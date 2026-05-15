let currentList = [];
let currentIndex = 0;
let isLightMode = false;
let isAllMode = false; 
let starRGB = { r: 0, g: 242, b: 255 }; 

const canvas = document.getElementById('antigravity-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: window.innerWidth/2, y: window.innerHeight/2, targetX: window.innerWidth/2, targetY: window.innerHeight/2 };

function toggleTheme() {
    isLightMode = !isLightMode;
    document.body.classList.toggle('light-mode');
    updateThemeColor();
}

function updateThemeColor() {
    const iaScreen = document.getElementById('ia-screen');
    if (iaScreen && !iaScreen.classList.contains('hidden')) {
        starRGB = { r: 163, g: 71, b: 255 }; // Morado IA
    } else if (!isAllMode) {
        starRGB = isLightMode ? { r: 0, g: 0, b: 255 } : { r: 0, g: 242, b: 255 };
    }
}

function showIAScreen() {
    document.getElementById('menu-screen').classList.add('hidden');
    document.getElementById('ia-screen').classList.remove('hidden');
    updateThemeColor();
}

function goBack() {
    isAllMode = false;
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('ia-screen').classList.add('hidden');
    document.getElementById('menu-screen').classList.remove('hidden');
    updateThemeColor();
}

class Particle {
    constructor() { this.init(); }
    init() {
        this.angle = Math.random() * Math.PI * 2;
        const maxDim = Math.max(window.innerWidth, window.innerHeight);
        this.radius = Math.random() * (maxDim * 0.85); 
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.z = Math.random(); 
        this.size = (this.z * 2.6) + 0.2; 
        this.speed = (0.0001 + Math.random() * 0.0001) * (this.z + 0.5); 
        this.opacity = (this.z * 0.45) + 0.15;
        this.hue = Math.random() * 360; 
    }
    draw() {
        let color;
        const alpha = isLightMode ? this.opacity + 0.4 : this.opacity;
        if (isAllMode) {
            color = `hsla(${this.hue}, 75%, 60%, ${alpha})`;
        } else {
            color = `rgba(${starRGB.r}, ${starRGB.g}, ${starRGB.b}, ${alpha})`;
        }
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
    update() {
        const depthFactor = (this.z * 0.0018) + 0.0004;
        const tx = mouse.x + Math.cos(this.angle) * this.radius;
        const ty = mouse.y + Math.sin(this.angle) * this.radius;
        this.x += (tx - this.x) * depthFactor; 
        this.y += (ty - this.y) * depthFactor;
        this.angle += this.speed;
        if (isAllMode) this.hue += 0.3; 
    }
}

function initParticles() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < 800; i++) particles.push(new Particle());
}

function animate() {
    if (!canvas) return;
    mouse.x += (mouse.targetX - mouse.x) * 0.003;
    mouse.y += (mouse.targetY - mouse.y) * 0.003;
    ctx.fillStyle = isLightMode ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.35)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}

function init() {
    const listContainer = document.querySelector('.category-list');
    if (!listContainer) return; 
    listContainer.innerHTML = '';
    
    // Categorías normales
    Object.keys(VOCABULARY).forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.innerText = cat;
        btn.onclick = () => start(cat);
        listContainer.appendChild(btn);
    });

    // BOTÓN ALL-IN-ONE
    const allBtn = document.createElement('button');
    allBtn.className = 'category-btn btn-all';
    allBtn.innerText = "🌌 All-in-One Universe";
    allBtn.onclick = () => start("ALL");
    listContainer.appendChild(allBtn);
}

function start(mode) {
    isAllMode = (mode === "ALL");
    currentList = isAllMode ? Object.values(VOCABULARY).flat() : [...VOCABULARY[mode]];
    currentList.sort(() => Math.random() - 0.5);
    currentIndex = 0;
    updateThemeColor();
    document.getElementById('menu-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const item = currentList[currentIndex];
    document.getElementById('display-emoji').innerText = item.e;
    document.getElementById('display-word').innerText = item.q;
    document.getElementById('feedback').innerText = "";
    document.getElementById('user-input').value = "";
    document.getElementById('user-input').focus();
}

window.addEventListener('mousemove', e => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
});

// ... (manten el resto de tu código de partículas y navegación igual) ...

function loadQuestion() {
    const item = currentList[currentIndex];
    document.getElementById('display-emoji').innerText = item.e;
    document.getElementById('display-word').innerText = item.q;
    document.getElementById('feedback').innerText = "";
    const input = document.getElementById('user-input');
    input.value = "";
    input.focus();
}

// FUNCIÓN PARA VALIDAR LA RESPUESTA
function validateNormalAnswer() {
    const input = document.getElementById('user-input');
    const val = input.value.trim().toLowerCase();
    const correct = currentList[currentIndex].a.toLowerCase();
    const feedback = document.getElementById('feedback');
    
    if (val === correct) {
        feedback.innerText = "✦ PERFECT ✦";
        feedback.style.color = "#00ffaa";
        setTimeout(() => { 
            currentIndex = (currentIndex + 1) % currentList.length; 
            loadQuestion(); 
        }, 1200);
    } else {
        feedback.innerText = `Correct: ${currentList[currentIndex].a}`;
        feedback.style.color = "#ff4d4d";
    }
}

// EVENTO: Al presionar Enter
document.getElementById('user-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') validateNormalAnswer();
});

// EVENTO: Al hacer clic en el botón Verificar (RESTAURADO)
document.getElementById('check-btn-normal').onclick = validateNormalAnswer;

// ... (resto de funciones como goBack, start, etc.) ...

window.addEventListener('resize', initParticles);
initParticles();
animate();
init();