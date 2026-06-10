// --- CONFIGURACIÓN CONEXIÓN NODE.JS ---
const API_URL = "http://localhost:3000/api/chat"; // 👈 Ahora apunta a tu servidor local de Node.js
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

async function callIA(systemPrompt, userPrompt, temp = 0.7) {
    try {
        // Hacemos la petición directamente a nuestro servidor de Node.js en el puerto 3000
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ systemPrompt, userPrompt, temperature: temp })
        });

        if (!response.ok) throw new Error("Error en la petición al servidor Node.js");
        
        const data = await response.json();
        
        if (data.total_tokens) {
            tokensUsed += data.total_tokens;
            updateTokenDisplay();
        }
        
        return data.content.trim();
    } catch (error) { 
        console.error("Error al conectar con el Backend:", error);
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

    // Lista de contextos cotidianos reales
    const contextos = [
        "hacer café por la mañana", "perder las llaves", "llegar tarde a una cita", 
        "limpiar la sala de estar", "ir al supermercado a comprar comida", "hablar por teléfono", 
        "esperar el transporte público", "ver una serie en la televisión", "preparar el almuerzo",
        "hacer ejercicio", "estudiar por la tarde", "arreglar un aparato roto",
        "olvidar la cartera o billetera", "comer en un restaurante", "pasear por el barrio",
        "comprar ropa o zapatos", "beber agua fría", "escuchar música con auriculares"
    ];

    // Lista de sujetos variados
    const sujetos = [
        "Yo", "Tú", "Nosotros", "Ellos", "Mis amigos", "El camarero", "Mi jefe", 
        "El conductor del autobús", "La vecina del piso de arriba", "El médico", 
        "Un compañero de trabajo", "Carlos", "Sofía", "La dependienta de la tienda",
        "Mis primos", "Ustedes"
    ];

    const contextoAleatorio = contextos[Math.floor(Math.random() * contextos.length)];
    const sujetoAleatorio = sujetos[Math.floor(Math.random() * sujetos.length)];

    const systemPrompt = 
        "Eres un tutor de inglés nativo y práctico. Tu única tarea es generar una oración realista, natural y de uso cotidiano. " +
        "La oración debe reflejar exactamente lo que una persona real diría de forma espontánea en un día normal en la calle, casa o trabajo. " +
        "Mantén las estructuras simples pero nativas (nivel básico-intermedio). NUNCA uses lenguaje formal, de fantasía o robótico.";

    const userPrompt = 
        `Genera una única oración corta en español en el tiempo verbal: ${tenseMap[currentTense]}. ` +
        `Es OBLIGATORIO que la oración incluya o empiece con el sujeto: "${sujetoAleatorio}" ` +
        `y que esté inspirada en la acción cotidiana de: "${contextoAleatorio}". ` +
        `No uses bajo ningún concepto a "mi hermano" o "mi mamá". ` +
        `Responde ÚNICAMENTE la oración pura, sin comillas, sin introducciones y sin puntos finales aclaratorios.`;

    const res = await callIA(systemPrompt, userPrompt, 1.0);
    
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
    const systemInstruction = "Eres un traductor robótico estricto. Si la traducción del usuario es perfecta responde '¡Correcto! ✦'. Si tiene errores gramaticales o de vocabulario, responde ÚNICAMENTE la oración corregida en inglés, sin explicaciones extras.";
    
    const res = await callIA(systemInstruction, `Traduce "${currentSpanish}": ${userText}`, 0.5);
    feedback.innerText = res || "Error al analizar la respuesta.";
}

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

// Iniciar la lógica
initIA();
updateTokenDisplay();