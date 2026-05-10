// ============================================
// FLASHCARDS - Konsonantengruppen ph, pf, ch, ck, tz
// Claudia Toth · A0.1 · Lecția 6 · 32 carduri
// Audio profesional pre-generat cu Hedda
// ============================================

const flashcardsData = [
    // ========== Ph (5 carduri) ==========
    { de: "das Photo", ro: "poza · ph = „f" → Foto", audio: "audio/letters/photo.wav" },
    { de: "die Philosophie", ro: "filosofia · ph = „f" → Filosofi:", audio: "audio/letters/philosophie.wav" },
    { de: "die Phase", ro: "faza · ph = „f" → Faze", audio: "audio/letters/phase.wav" },
    { de: "das Phänomen", ro: "fenomenul · ph = „f" → Fɛnome:n", audio: "audio/letters/phaenomen.wav" },
    { de: "der Phönix", ro: "phoenix-ul · ph = „f" → Fø:nics", audio: "audio/letters/phoenix.wav" },

    // ========== Pf (6 carduri) ==========
    { de: "die Pfote", ro: "laba (de animal) · pf = sunet unic „pf" → Pfo:te", audio: "audio/letters/pfote.wav" },
    { de: "der Apfel", ro: "mărul · → Apfăl (NU „afăl"!)", audio: "audio/letters/apfel.wav" },
    { de: "die Pflege", ro: "grija / îngrijirea · → Pfle:ge", audio: "audio/letters/pflege.wav" },
    { de: "das Pferd", ro: "calul · → Pfe:rd", audio: "audio/letters/pferd.wav" },
    { de: "die Pfanne", ro: "tigaia · → Pfane", audio: "audio/letters/pfanne.wav" },
    { de: "die Pflicht", ro: "datoria, obligația · → Pflicht", audio: "audio/letters/pflicht.wav" },

    // ========== Ch — 4 sunete (8 carduri) ==========
    { de: "ich", ro: "eu · ch după i = „h" moale → ih", audio: "audio/letters/ich.wav" },
    { de: "mich / dich", ro: "pe mine / pe tine · ch după i = „h" moale → mih, dih", audio: "audio/letters/mich-dich.wav" },
    { de: "acht", ro: "opt · ch după a = „h" gutural → aht", audio: "audio/letters/acht.wav" },
    { de: "das Buch", ro: "cartea · ch după u = „h" gutural → bu:h", audio: "audio/letters/buch.wav" },
    { de: "Christian", ro: "Cristian · Ch + i de obicei = „c" în nume proprii → Cristian", audio: "audio/letters/christian.wav" },
    { de: "der Chor", ro: "corul · Ch- + o = „c" → Cor", audio: "audio/letters/chor.wav" },
    { de: "der Chef", ro: "șeful · cuvânt din franceză, ch = „ș" → Șef", audio: "audio/letters/chef.wav" },
    { de: "die Chiffre", ro: "cifrul · cuvânt din franceză, ch = „ș" → Șifre", audio: "audio/letters/chiffre.wav" },

    // ========== Ck (7 carduri) ==========
    { de: "der Klecks", ro: "pata · ck după vocală scurtă = „c" → Clecs", audio: "audio/letters/klecks.wav" },
    { de: "der Rücken", ro: "spatele · → Rücăn", audio: "audio/letters/ruecken.wav" },
    { de: "dick", ro: "gros · → dic", audio: "audio/letters/dick.wav" },
    { de: "das Glück", ro: "norocul · → Glüc", audio: "audio/letters/glueck.wav" },
    { de: "packen", ro: "a împacheta · → pacăn", audio: "audio/letters/packen.wav" },
    { de: "der Schock", ro: "șocul · → Șoc", audio: "audio/letters/schock.wav" },
    { de: "krank", ro: "bolnav · k după consoana n (NU ck!) → cranc", audio: "audio/letters/krank.wav" },

    // ========== Tz (6 carduri) ==========
    { de: "die Katze", ro: "pisica · tz după vocală scurtă = „ț" → Kațe", audio: "audio/letters/katze.wav" },
    { de: "sitzen", ro: "a sta jos · → zițăn", audio: "audio/letters/sitzen.wav" },
    { de: "jetzt", ro: "acum · → iețt", audio: "audio/letters/jetzt.wav" },
    { de: "der Platz", ro: "piața · → Plaț", audio: "audio/letters/platz.wav" },
    { de: "putzen", ro: "a curăța · → pucăn", audio: "audio/letters/putzen.wav" },
    { de: "tanzen", ro: "a dansa · z (NU tz!) după consoana n → tanțăn", audio: "audio/letters/tanzen.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> grupate pe sunete (5 ph · 6 pf · 8 ch · 7 ck · 6 tz).<br>
            Click pe card pentru a vedea traducerea și pronunția. Click pe 🔊 pentru a auzi pronunția germană (voce profesională înregistrată).
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => {
        console.log('Audio nu poate fi redat:', err);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    buildFlashcards();
});
