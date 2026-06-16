// ╔══════════════════════════════════════════════════════════════════╗
// ║                   VERBS SECTION LOGIC                            ║
// ║  Siempre muestra las 3 formas. Verificar colorea pero NO salta. ║
// ║  Solo pasa a la siguiente cuando el usuario acierta todo.        ║
// ╚══════════════════════════════════════════════════════════════════╝

let verbsCurrentList     = [];
let verbsQueue           = [];
let verbsCurrentIndex    = 0;
let verbsCompleted       = 0;
let verbsType            = 'irregular';
let verbsAnsweredCorrect  = new Set();

function showVerbsScreen() {
    showScreen('verbs-screen');
    starRGB = { r: 80, g: 255, b: 150 };
    verbsLoadList();
}

function verbsLoadList() {
    if (verbsType === 'irregular')    verbsCurrentList = [...IRREGULAR_VERBS];
    else if (verbsType === 'regular') verbsCurrentList = [...REGULAR_VERBS];
    else                              verbsCurrentList = [...IRREGULAR_VERBS, ...REGULAR_VERBS];

    verbsQueue           = [...verbsCurrentList].sort(() => Math.random() - 0.5);
    verbsCurrentIndex    = 0;
    verbsCompleted       = 0;
    verbsAnsweredCorrect = new Set();
    verbsUpdateCounter();
    verbsRenderCard();
}

function verbsSelectType(type) {
    verbsType = type;
    document.querySelectorAll('.verbs-type-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.verbs-type-btn[data-type="${type}"]`).classList.add('active');
    verbsLoadList();
}

// ── Renderizar tarjeta ────────────────────────────────────────────
function verbsRenderCard() {
    if (verbsQueue.length === 0) { verbsShowComplete(); return; }

    const verb = verbsQueue[verbsCurrentIndex % verbsQueue.length];

    document.getElementById('verbs-emoji').textContent   = verb.e;
    document.getElementById('verbs-spanish').textContent = verb.spanish;

    const feedback = document.getElementById('verbs-feedback');
    feedback.textContent = '';
    feedback.className   = 'verbs-feedback';

    const baseInput       = document.getElementById('verbs-base-input');
    const pastInput       = document.getElementById('verbs-past-input');
    const participleInput = document.getElementById('verbs-participle-input');

    [baseInput, pastInput, participleInput].forEach(i => {
        i.value = '';
        i.disabled = false;
        i.classList.remove('input-ok', 'input-err', 'input-hint');
    });

    // Restaurar botón
    const skipBtn = document.getElementById('verbs-skip-btn');
    skipBtn.textContent = 'Ver respuesta';
    skipBtn.onclick = verbsReveal;

    baseInput.focus();
    verbsUpdateCounter();
}

// ── Verificar — colorea inputs, NO avanza ────────────────────────
function verbsCheck() {
    const verb            = verbsQueue[verbsCurrentIndex % verbsQueue.length];
    const baseInput       = document.getElementById('verbs-base-input');
    const pastInput       = document.getElementById('verbs-past-input');
    const participleInput = document.getElementById('verbs-participle-input');
    const feedback        = document.getElementById('verbs-feedback');

    const baseOk = baseInput.value.trim().toLowerCase()        === verb.base.toLowerCase();
    const pastOk = pastInput.value.trim().toLowerCase()        === verb.past.toLowerCase();
    const partOk = participleInput.value.trim().toLowerCase()  === (verb.participle || verb.past).toLowerCase();

    baseInput.classList.toggle('input-ok',  baseOk);
    baseInput.classList.toggle('input-err', !baseOk);
    pastInput.classList.toggle('input-ok',  pastOk);
    pastInput.classList.toggle('input-err', !pastOk);
    participleInput.classList.toggle('input-ok',  partOk);
    participleInput.classList.toggle('input-err', !partOk);

    if (baseOk && pastOk && partOk) {
        // ✅ Correcto — mostrar éxito y LUEGO avanzar
        feedback.textContent = '✦ PERFECT ✦';
        feedback.className   = 'verbs-feedback correct';

        const idx = verbsCurrentIndex % verbsQueue.length;
        if (!verbsAnsweredCorrect.has(idx)) {
            verbsAnsweredCorrect.add(idx);
            verbsCompleted++;
            verbsUpdateCounter();
        }

        setTimeout(() => {
            verbsCurrentIndex++;
            if (verbsCurrentIndex >= verbsQueue.length) {
                verbsQueue = [...verbsCurrentList].sort(() => Math.random() - 0.5);
                verbsCurrentIndex = 0;
            }
            verbsRenderCard();
        }, 1200);

    } else {
        // ❌ Incorrecto — muestra las correctas debajo pero NO cambia de tarjeta
        let hints = [];
        if (!baseOk) hints.push(`Base: ${verb.base}`);
        if (!pastOk) hints.push(`Past: ${verb.past}`);
        if (!partOk) hints.push(`Part.: ${verb.participle || verb.past}`);
        feedback.textContent = hints.join('  ·  ');
        feedback.className   = 'verbs-feedback wrong';
    }
}

// ── Ver respuesta — rellena en amarillo, espera que escriban ─────
function verbsReveal() {
    const verb            = verbsQueue[verbsCurrentIndex % verbsQueue.length];
    const baseInput       = document.getElementById('verbs-base-input');
    const pastInput       = document.getElementById('verbs-past-input');
    const participleInput = document.getElementById('verbs-participle-input');
    const feedback        = document.getElementById('verbs-feedback');

    baseInput.value       = verb.base;
    pastInput.value       = verb.past;
    participleInput.value = verb.participle || verb.past;

    [baseInput, pastInput, participleInput].forEach(i => {
        i.classList.remove('input-ok', 'input-err');
        i.classList.add('input-hint');
    });

    feedback.textContent = '👀 Memorízalas, luego escríbelas';
    feedback.className   = 'verbs-feedback hint';

    // Limpiar y pedir que escriban ellos mismos
    setTimeout(() => {
        [baseInput, pastInput, participleInput].forEach(i => {
            i.value = '';
            i.classList.remove('input-hint');
        });
        feedback.textContent = '✍️ Ahora escríbelas tú';
        feedback.className   = 'verbs-feedback hint';
        baseInput.focus();
    }, 2400);

    // Cambiar botón a "Saltar" para poder pasar si quieren
    const skipBtn = document.getElementById('verbs-skip-btn');
    skipBtn.textContent = 'Saltar';
    skipBtn.onclick = verbsSkip;
}

// ── Saltar — solo disponible tras "Ver respuesta" ─────────────────
function verbsSkip() {
    verbsCurrentIndex++;
    if (verbsCurrentIndex >= verbsQueue.length) {
        verbsQueue = [...verbsCurrentList].sort(() => Math.random() - 0.5);
        verbsCurrentIndex = 0;
    }
    verbsRenderCard();
}

// ── Contador ─────────────────────────────────────────────────────
function verbsUpdateCounter() {
    const total = verbsCurrentList.length;
    const done  = verbsCompleted;
    const pct   = total > 0 ? Math.round((done / total) * 100) : 0;
    document.getElementById('verbs-counter-text').textContent = `${done} / ${total} completados`;
    document.getElementById('verbs-progress-fill').style.width = pct + '%';
    document.getElementById('verbs-progress-pct').textContent  = pct + '%';
}

function verbsShowComplete() {
    document.getElementById('verbs-feedback').textContent = '🎉 ¡Completaste todos los verbos!';
    document.getElementById('verbs-feedback').className   = 'verbs-feedback correct';
}

// ── Enter navega entre inputs ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('verbs-base-input')
        ?.addEventListener('keypress', e => { if (e.key === 'Enter') document.getElementById('verbs-past-input').focus(); });
    document.getElementById('verbs-past-input')
        ?.addEventListener('keypress', e => { if (e.key === 'Enter') document.getElementById('verbs-participle-input').focus(); });
    document.getElementById('verbs-participle-input')
        ?.addEventListener('keypress', e => { if (e.key === 'Enter') verbsCheck(); });
});
