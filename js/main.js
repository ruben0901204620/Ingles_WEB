// ── Estado global ────────────────────────────────────────────────
let currentList    = [];
let currentIndex   = 0;
let isLightMode    = false;
let isAllMode      = false;
let cameFromLevel  = false;
let starRGB        = { r: 0, g: 242, b: 255 };

// ── Canvas de partículas ─────────────────────────────────────────
const canvas = document.getElementById('antigravity-canvas');
const ctx    = canvas.getContext('2d');
let particles = [];
let mouse = {
    x: window.innerWidth / 2,  y: window.innerHeight / 2,
    targetX: window.innerWidth / 2, targetY: window.innerHeight / 2
};

// ── Tema ─────────────────────────────────────────────────────────
function toggleTheme() {
    isLightMode = !isLightMode;
    document.body.classList.toggle('light-mode');
    updateStarColor();
}

function updateStarColor() {
    const iaVisible = !document.getElementById('ia-screen').classList.contains('hidden');
    if (iaVisible) {
        starRGB = { r: 163, g: 71, b: 255 };
    } else if (isAllMode) {
        // arcoíris gestionado por Particle.draw()
    } else {
        starRGB = isLightMode ? { r: 0, g: 0, b: 255 } : { r: 0, g: 242, b: 255 };
    }
}

// ── Navegación ───────────────────────────────────────────────────
function showScreen(id) {
    ['menu-screen','level-screen','game-screen','ia-screen'].forEach(s => {
        document.getElementById(s).classList.add('hidden');
    });
    document.getElementById(id).classList.remove('hidden');
    updateStarColor();
}

function goToMenu() {
    isAllMode = false;
    cameFromLevel = false;
    showScreen('menu-screen');
}

function showIAScreen() { showScreen('ia-screen'); }

function showLevelScreen(levelId) {
    const level = LEVELS_CONFIG.find(l => l.id === levelId);
    if (!level) return;

    const list = document.getElementById('level-category-list');
    list.innerHTML = '';

    level.categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className   = 'category-btn';
        btn.textContent = cat.name;
        btn.onclick     = () => startCategory(cat.data, levelId);
        list.appendChild(btn);
    });

    document.getElementById('level-screen-title').textContent = level.label;
    cameFromLevel = levelId;
    showScreen('level-screen');
}

function startCategory(data, levelId) {
    isAllMode     = false;
    cameFromLevel = levelId;
    currentList   = [...data].sort(() => Math.random() - 0.5);
    currentIndex  = 0;
    showScreen('game-screen');
    loadQuestion();
}

function startAllInOne() {
    isAllMode = true;
    cameFromLevel = false;
    currentList = LEVELS_CONFIG
        .flatMap(l => l.categories)
        .flatMap(c => c.data)
        .sort(() => Math.random() - 0.5);
    currentIndex = 0;
    showScreen('game-screen');
    loadQuestion();
}

function goBack() {
    if (cameFromLevel) {
        showLevelScreen(cameFromLevel);
    } else {
        isAllMode = false;
        showScreen('menu-screen');
    }
}

// ── Juego ────────────────────────────────────────────────────────
function loadQuestion() {
    const item = currentList[currentIndex];
    document.getElementById('display-emoji').textContent = item.e;
    document.getElementById('display-word').textContent  = item.q;
    document.getElementById('feedback').textContent      = '';
    const input = document.getElementById('user-input');
    input.value = '';
    input.focus();
}

function validateAnswer() {
    const input    = document.getElementById('user-input');
    const val      = input.value.trim().toLowerCase();
    const correct  = currentList[currentIndex].a.toLowerCase();
    const feedback = document.getElementById('feedback');

    if (val === correct) {
        feedback.textContent = '✦ PERFECT ✦';
        feedback.style.color = '#00ffaa';
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % currentList.length;
            loadQuestion();
        }, 1200);
    } else {
        feedback.textContent = `Correct: ${currentList[currentIndex].a}`;
        feedback.style.color = '#ff4d4d';
    }
}

document.getElementById('user-input').addEventListener('keypress', e => {
    if (e.key === 'Enter') validateAnswer();
});
document.getElementById('check-btn-normal').onclick = validateAnswer;

// ── Partículas ───────────────────────────────────────────────────
class Particle {
    constructor() { this.init(); }
    init() {
        this.angle   = Math.random() * Math.PI * 2;
        const maxDim = Math.max(window.innerWidth, window.innerHeight);
        this.radius  = Math.random() * (maxDim * 0.85);
        this.x       = Math.random() * window.innerWidth;
        this.y       = Math.random() * window.innerHeight;
        this.z       = Math.random();
        this.speed   = (0.0001 + Math.random() * 0.0001) * (this.z + 0.5);
        this.opacity = (this.z * 0.45) + 0.15;
        this.hue     = Math.random() * 360;
        this.tier    = this.z > 0.68 ? 2 : this.z > 0.34 ? 1 : 0;
        if      (this.tier === 2) this.size = (this.z * 1.8) + 0.6;
        else if (this.tier === 1) this.size = (this.z * 1.2) + 0.35;
        else                      this.size = (this.z * 0.8) + 0.10;
    }
    draw() {
        const { r, g, b } = starRGB;
        const alpha = isLightMode ? Math.min(1, this.opacity + 0.35) : this.opacity;
        if (this.tier === 2) {
            const haloR = this.size * 2.6;
            const halo  = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, haloR);
            if (isAllMode) {
                halo.addColorStop(0,    `hsla(${this.hue},100%,98%,${alpha})`);
                halo.addColorStop(0.18, `hsla(${this.hue}, 90%,72%,${alpha * 0.85})`);
                halo.addColorStop(0.55, `hsla(${this.hue}, 80%,58%,${alpha * 0.35})`);
                halo.addColorStop(1,    `hsla(${this.hue}, 75%,50%,0)`);
            } else {
                halo.addColorStop(0,    `rgba(255,255,255,${alpha})`);
                halo.addColorStop(0.15, `rgba(${r},${g},${b},${alpha * 0.90})`);
                halo.addColorStop(0.50, `rgba(${r},${g},${b},${alpha * 0.28})`);
                halo.addColorStop(1,    `rgba(${r},${g},${b},0)`);
            }
            ctx.fillStyle = halo;
            ctx.beginPath(); ctx.arc(this.x, this.y, haloR, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = isAllMode
                ? `hsla(${this.hue},100%,98%,${Math.min(1, alpha)})`
                : `rgba(255,255,255,${Math.min(1, alpha + 0.3)})`;
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size * 0.32, 0, Math.PI * 2); ctx.fill();
        } else if (this.tier === 1) {
            const r2   = this.size * 1.8;
            const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, r2);
            if (isAllMode) {
                grad.addColorStop(0,   `hsla(${this.hue},95%,90%,${alpha * 0.9})`);
                grad.addColorStop(0.5, `hsla(${this.hue},80%,60%,${alpha * 0.5})`);
                grad.addColorStop(1,   `hsla(${this.hue},75%,50%,0)`);
            } else {
                grad.addColorStop(0,   `rgba(${r},${g},${b},${alpha * 0.85})`);
                grad.addColorStop(0.5, `rgba(${r},${g},${b},${alpha * 0.30})`);
                grad.addColorStop(1,   `rgba(${r},${g},${b},0)`);
            }
            ctx.fillStyle = grad;
            ctx.beginPath(); ctx.arc(this.x, this.y, r2, 0, Math.PI * 2); ctx.fill();
        } else {
            ctx.fillStyle = isAllMode
                ? `hsla(${this.hue},75%,65%,${alpha * 0.7})`
                : `rgba(${r},${g},${b},${alpha * 0.6})`;
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
        }
    }
    update() {
        const df = (this.z * 0.0018) + 0.0004;
        const tx = mouse.x + Math.cos(this.angle) * this.radius;
        const ty = mouse.y + Math.sin(this.angle) * this.radius;
        this.x += (tx - this.x) * df;
        this.y += (ty - this.y) * df;
        this.angle += this.speed;
        if (isAllMode) this.hue += 0.3;
    }
}

function initParticles() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = Array.from({ length: 800 }, () => new Particle());
}

function animate() {
    mouse.x += (mouse.targetX - mouse.x) * 0.003;
    mouse.y += (mouse.targetY - mouse.y) * 0.003;
    ctx.fillStyle = isLightMode ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let t = 0; t < 3; t++) particles.forEach(p => { if (p.tier === t) { p.update(); p.draw(); } });
    requestAnimationFrame(animate);
}

window.addEventListener('mousemove', e => { mouse.targetX = e.clientX; mouse.targetY = e.clientY; });
window.addEventListener('resize', initParticles);

// ── Construir menú principal desde LEVELS_CONFIG ─────────────────
function buildMainMenu() {
    const container = document.getElementById('level-buttons-container');
    LEVELS_CONFIG.forEach(level => {
        const btn = document.createElement('button');
        btn.className   = 'category-btn btn-level';
        btn.textContent = `${level.icon} ${level.label}`;
        btn.onclick     = () => showLevelScreen(level.id);
        container.appendChild(btn);
    });
}

// ── Init ─────────────────────────────────────────────────────────
buildMainMenu();
initParticles();
animate();
