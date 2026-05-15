let currentList = [];
let currentIndex = 0;
let isLightMode = false;
let isAllMode = false;
let starRGB = { r: 0, g: 242, b: 255 };

const canvas = document.getElementById('antigravity-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = {
    x: window.innerWidth / 2, y: window.innerHeight / 2,
    targetX: window.innerWidth / 2, targetY: window.innerHeight / 2
};

function toggleTheme() {
    isLightMode = !isLightMode;
    document.body.classList.toggle('light-mode');
    updateThemeColor();
}

function updateThemeColor() {
    const iaScreen = document.getElementById('ia-screen');
    if (iaScreen && !iaScreen.classList.contains('hidden')) {
        starRGB = { r: 163, g: 71, b: 255 };
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
        this.angle  = Math.random() * Math.PI * 2;
        const maxDim = Math.max(window.innerWidth, window.innerHeight);
        this.radius  = Math.random() * (maxDim * 0.85);
        this.x       = Math.random() * window.innerWidth;
        this.y       = Math.random() * window.innerHeight;
        this.z       = Math.random();
        this.speed   = (0.0001 + Math.random() * 0.0001) * (this.z + 0.5);
        this.opacity = (this.z * 0.45) + 0.15;
        this.hue     = Math.random() * 360;

        // Tier determina el estilo visual:
        // tier 2 → orb con gradiente + núcleo blanco  (z > 0.68)
        // tier 1 → punto medio con mini-halo          (z > 0.34)
        // tier 0 → estrella diminuta                  (resto)
        this.tier = this.z > 0.68 ? 2 : this.z > 0.34 ? 1 : 0;

        // Tamaño base por tier (reducidos)
        if (this.tier === 2) {
            this.size = (this.z * 1.8) + 0.6;   // core más pequeño, halo ×2.6
        } else if (this.tier === 1) {
            this.size = (this.z * 1.2) + 0.35;  // 0.7 – 1.55 px
        } else {
            this.size = (this.z * 0.8) + 0.10;  // 0.1 – 0.9 px
        }
    }

    draw() {
        const { r, g, b } = starRGB;
        const alpha = isLightMode ? Math.min(1, this.opacity + 0.35) : this.opacity;

        if (this.tier === 2) {
            // ── ORB BRILLANTE ──────────────────────────────────────────
            // Capa 1: halo exterior suave
            const haloR = this.size * 2.6;
            const halo  = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, haloR);

            if (isAllMode) {
                halo.addColorStop(0,   `hsla(${this.hue}, 100%, 98%, ${alpha})`);
                halo.addColorStop(0.18,`hsla(${this.hue},  90%, 72%, ${alpha * 0.85})`);
                halo.addColorStop(0.55,`hsla(${this.hue},  80%, 58%, ${alpha * 0.35})`);
                halo.addColorStop(1,   `hsla(${this.hue},  75%, 50%, 0)`);
            } else {
                halo.addColorStop(0,   `rgba(255, 255, 255, ${alpha})`);
                halo.addColorStop(0.15,`rgba(${r}, ${g}, ${b}, ${alpha * 0.90})`);
                halo.addColorStop(0.50,`rgba(${r}, ${g}, ${b}, ${alpha * 0.28})`);
                halo.addColorStop(1,   `rgba(${r}, ${g}, ${b}, 0)`);
            }

            ctx.fillStyle = halo;
            ctx.beginPath();
            ctx.arc(this.x, this.y, haloR, 0, Math.PI * 2);
            ctx.fill();

            // Capa 2: núcleo sólido blanco pequeño (el "punto caliente")
            const coreAlpha = isAllMode ? alpha : Math.min(1, alpha + 0.3);
            const coreColor = isAllMode
                ? `hsla(${this.hue}, 100%, 98%, ${coreAlpha})`
                : `rgba(255, 255, 255, ${coreAlpha})`;
            ctx.fillStyle = coreColor;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 0.32, 0, Math.PI * 2);
            ctx.fill();

        } else if (this.tier === 1) {
            // ── PUNTO CON MINI-GRADIENTE ───────────────────────────────
            const r2 = this.size * 1.8;
            const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, r2);

            if (isAllMode) {
                grad.addColorStop(0,  `hsla(${this.hue}, 95%, 90%, ${alpha * 0.9})`);
                grad.addColorStop(0.5,`hsla(${this.hue}, 80%, 60%, ${alpha * 0.5})`);
                grad.addColorStop(1,  `hsla(${this.hue}, 75%, 50%, 0)`);
            } else {
                grad.addColorStop(0,  `rgba(${r}, ${g}, ${b}, ${alpha * 0.85})`);
                grad.addColorStop(0.5,`rgba(${r}, ${g}, ${b}, ${alpha * 0.30})`);
                grad.addColorStop(1,  `rgba(${r}, ${g}, ${b}, 0)`);
            }

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(this.x, this.y, r2, 0, Math.PI * 2);
            ctx.fill();

        } else {
            // ── ESTRELLA DIMINUTA (sin gradiente → máx rendimiento) ────
            const dotAlpha = isAllMode
                ? `hsla(${this.hue}, 75%, 65%, ${alpha * 0.7})`
                : `rgba(${r}, ${g}, ${b}, ${alpha * 0.6})`;
            ctx.fillStyle = dotAlpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    update() {
        // ── FÍSICA ORIGINAL SIN CAMBIOS ────────────────────────────────
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
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < 800; i++) particles.push(new Particle());
}

function animate() {
    if (!canvas) return;
    mouse.x += (mouse.targetX - mouse.x) * 0.003;
    mouse.y += (mouse.targetY - mouse.y) * 0.003;

    // Trail semitransparente — igual que antes
    ctx.fillStyle = isLightMode ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dibuja tier 0 primero (fondo), luego tier 1, luego tier 2 encima
    for (let t = 0; t < 3; t++) {
        particles.forEach(p => { if (p.tier === t) { p.update(); p.draw(); } });
    }

    requestAnimationFrame(animate);
}

function init() {
    const listContainer = document.querySelector('.category-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    Object.keys(VOCABULARY).forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.innerText = cat;
        btn.onclick = () => start(cat);
        listContainer.appendChild(btn);
    });

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
    document.getElementById('display-word').innerText  = item.q;
    document.getElementById('feedback').innerText      = "";
    const input = document.getElementById('user-input');
    input.value = "";
    input.focus();
}

function validateNormalAnswer() {
    const input   = document.getElementById('user-input');
    const val     = input.value.trim().toLowerCase();
    const correct = currentList[currentIndex].a.toLowerCase();
    const feedback = document.getElementById('feedback');

    if (val === correct) {
        feedback.innerText    = "✦ PERFECT ✦";
        feedback.style.color  = "#00ffaa";
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % currentList.length;
            loadQuestion();
        }, 1200);
    } else {
        feedback.innerText   = `Correct: ${currentList[currentIndex].a}`;
        feedback.style.color = "#ff4d4d";
    }
}

document.getElementById('user-input').addEventListener('keypress', e => {
    if (e.key === 'Enter') validateNormalAnswer();
});
document.getElementById('check-btn-normal').onclick = validateNormalAnswer;

window.addEventListener('mousemove', e => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
});
window.addEventListener('resize', initParticles);

initParticles();
animate();
init();
