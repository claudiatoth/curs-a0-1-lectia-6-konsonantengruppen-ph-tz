// ============================================
// FLASHCARDS - Konsonantengruppen ph, pf, ch, ck, tz
// Claudia Toth · A0 — Fonetică · Lecția 6 · 32 carduri
// Audio profesional pre-generat cu Hedda
// ============================================

const flashcardsData = [
    // ========== Ph (5 carduri) ==========
    { de: "das Photo · die Photos", ro: "poza · pozele · ph sună ca f → Foto", audio: "audio/letters/photo.wav" },
    { de: "die Philosophie · die Philosophien", ro: "filosofia · filosofiile · ph sună ca f → Filosofi:", audio: "audio/letters/philosophie.wav" },
    { de: "die Phase · die Phasen", ro: "faza · fazele · ph sună ca f → Faze", audio: "audio/letters/phase.wav" },
    { de: "das Phänomen · die Phänomene", ro: "fenomenul · fenomenele · ph sună ca f → Fɛnome:n", audio: "audio/letters/phaenomen.wav" },
    { de: "der Phönix · die Phönixe", ro: "phoenix-ul · phoenix-ii · ph sună ca f → Fø:nics", audio: "audio/letters/phoenix.wav" },

    // ========== Pf (6 carduri) ==========
    { de: "die Pfote · die Pfoten", ro: "laba · labele (de animal) · pf este sunet unic pf → Pfo:te", audio: "audio/letters/pfote.wav" },
    { de: "der Apfel · die Äpfel", ro: "mărul · merele · → Apfăl (NU se citește afăl!)", audio: "audio/letters/apfel.wav" },
    { de: "die Pflege · die Pflegen", ro: "grija · grijile / îngrijirea · îngrijirile · → Pfle:ge", audio: "audio/letters/pflege.wav" },
    { de: "das Pferd · die Pferde", ro: "calul · caii · → Pfe:rd", audio: "audio/letters/pferd.wav" },
    { de: "die Pfanne · die Pfannen", ro: "tigaia · tigăile · → Pfane", audio: "audio/letters/pfanne.wav" },
    { de: "die Pflicht · die Pflichten", ro: "datoria · datoriile, obligația · obligațiile · → Pflicht", audio: "audio/letters/pflicht.wav" },

    // ========== Ch — 4 sunete (8 carduri) ==========
    { de: "ich", ro: "eu · ch după i sună ca h moale → ih", audio: "audio/letters/ich.wav" },
    { de: "mich / dich", ro: "pe mine / pe tine · ch după i sună ca h moale → mih, dih", audio: "audio/letters/mich-dich.wav" },
    { de: "acht", ro: "opt · ch după a sună ca h gutural → aht", audio: "audio/letters/acht.wav" },
    { de: "das Buch · die Bücher", ro: "cartea · cărțile · ch după u sună ca h gutural → bu:h", audio: "audio/letters/buch.wav" },
    { de: "Christian", ro: "Cristian · Ch + i de obicei sună ca c în nume proprii → Cristian", audio: "audio/letters/christian.wav" },
    { de: "der Chor · die Chöre", ro: "corul · corurile · Ch- + o sună ca c → Cor", audio: "audio/letters/chor.wav" },
    { de: "der Chef · die Chefs", ro: "șeful · șefii · cuvânt din franceză, ch sună ca ș → Șef", audio: "audio/letters/chef.wav" },
    { de: "die Chiffre · die Chiffren", ro: "cifrul · cifrurile · cuvânt din franceză, ch sună ca ș → Șifre", audio: "audio/letters/chiffre.wav" },

    // ========== Ck (7 carduri) ==========
    { de: "der Klecks · die Kleckse", ro: "pata · petele (de cerneală) · ck după vocală scurtă sună ca c → Clecs", audio: "audio/letters/klecks.wav" },
    { de: "der Rücken · die Rücken", ro: "spatele · spatele (plural identic) · → Rücăn", audio: "audio/letters/ruecken.wav" },
    { de: "dick", ro: "gros (adjectiv) · → dic", audio: "audio/letters/dick.wav" },
    { de: "das Glück", ro: "norocul (substantiv nenumărabil — abstract) · → Glüc", audio: "audio/letters/glueck.wav" },
    { de: "packen", ro: "a împacheta (verb) · → pacăn", audio: "audio/letters/packen.wav" },
    { de: "der Schock · die Schocks", ro: "șocul · șocurile · → Șoc", audio: "audio/letters/schock.wav" },
    { de: "krank", ro: "bolnav · k după consoana n (NU ck!) → cranc", audio: "audio/letters/krank.wav" },

    // ========== Tz (6 carduri) ==========
    { de: "die Katze · die Katzen", ro: "pisica · pisicile · tz după vocală scurtă sună ca ț → Kațe", audio: "audio/letters/katze.wav" },
    { de: "sitzen", ro: "a sta jos · → zițăn", audio: "audio/letters/sitzen.wav" },
    { de: "jetzt", ro: "acum · → iețt", audio: "audio/letters/jetzt.wav" },
    { de: "der Platz · die Plätze", ro: "piața (loc) · piețele / locul · locurile · → Plaț", audio: "audio/letters/platz.wav" },
    { de: "putzen", ro: "a curăța · → puțăn", audio: "audio/letters/putzen.wav" },
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
