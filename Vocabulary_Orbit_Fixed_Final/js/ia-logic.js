const API_KEY = "Tu_Token"; 
const API_URL = "TU_API_URL";
const TOKEN_LIMIT = 5000000;

let tokensUsed = localStorage.getItem('tokensUsed') ? parseInt(localStorage.getItem('tokensUsed')) : 0;
let currentTense = "past";
let currentSpanish = "";

const tenseMap = {
    past: "pretérito perfecto simple",
    present: "presente simple",
    continuous: "presente continuo"
};

function updateTokenDisplay() {
    const meterPercent = document.getElementById('tokenPercentage');
    if (!meterPercent) return;
    const percentage = (tokensUsed / TOKEN_LIMIT) * 100;
    meterPercent.innerText = `${percentage.toFixed(4)}%`;
    const fill = document.getElementById('progressFill');
    if (fill) fill.style.width = `${percentage}%`;
    localStorage.setItem('tokensUsed', tokensUsed);
}

async function callIA(systemPrompt, userPrompt) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${API_KEY}`,
                "HTTP-Referer": "http://localhost",
                "X-Title": "Vocabulary Orbit"
            },
            body: JSON.stringify({ 
                model: "deepseek/deepseek-chat", 
                messages: [{ role: "system", content: systemPrompt }, { role: "user", content: userPrompt }], 
                temperature: 0.7 
            })
        });
        if (!response.ok) throw new Error("Error 401: Revisa tu API Key o saldo.");
        const data = await response.json();
        if (data.usage) {
            tokensUsed += data.usage.total_tokens;
            updateTokenDisplay();
        }
        return data.choices[0].message.content.trim();
    } catch (error) { 
        console.error(error);
        return null; 
    }
}

async function generateSentence() {
    const display = document.getElementById("spanishSentence");
    const feedback = document.getElementById("feedbackIA");
    const inputArea = document.getElementById("userInputIA");
    
    display.style.opacity = "0.5";
    display.innerText = "Generando...";
    if(feedback) feedback.innerText = "";
    if(inputArea) inputArea.value = "";

    const res = await callIA("Eres un generador de frases cortas.", `Genera una frase corta en español en ${tenseMap[currentTense]}. Solo la frase, sin comillas.`);
    if (res) {
        currentSpanish = res.replace(/"/g, '');
        display.innerText = currentSpanish;
    } else {
        display.innerText = "⚠️ Error al conectar con la IA.";
    }
    display.style.opacity = "1";
}

async function checkTranslation() {
    const userText = document.getElementById("userInputIA").value;
    const feedback = document.getElementById("feedbackIA");
    if (!userText || !currentSpanish) return;
    
    feedback.innerText = "Analizando...";
    const systemInstruction = "Eres un traductor robótico. Si la traducción es perfecta responde '¡Correcto! ✦'. Si tiene errores, responde ÚNICAMENTE la oración corregida en inglés, sin explicaciones.";
    const res = await callIA(systemInstruction, `Traduce "${currentSpanish}": ${userText}`);
    feedback.innerText = res || "Error";
}

// Inicializar eventos
function initIA() {
    const btnCheck = document.getElementById("checkBtnIA");
    const btnReset = document.getElementById("resetBtnIA");
    if(btnCheck) btnCheck.onclick = checkTranslation;
    if(btnReset) btnReset.onclick = generateSentence;

    document.querySelectorAll(".tense-btn").forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll(".tense-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentTense = btn.dataset.tense;
        };
    });
}

initIA();
updateTokenDisplay();