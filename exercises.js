// ============================================
// EXERCIȚII - Konsonantengruppen ph, pf, ch, ck, tz
// Claudia Toth · A0 — Fonetică · Lecția 6 · 5 exerciții
// ============================================

// ============================================
// EXERCIȚIUL 1: ph sau f? Identifică scrierea
// ============================================
const ex1Data = [
    { id: 'a', word: '__oto (poza)', options: ['Ph', 'F'], correct: 'Ph', explanation: '„Photo" — cuvânt din greacă, scris cu ph (deși forma „Foto" e și ea acceptată).' },
    { id: 'b', word: 'der __reund (prietenul)', options: ['Ph', 'F'], correct: 'F', explanation: '„Freund" e cuvânt german autohton → cu f simplu.' },
    { id: 'c', word: 'die __ilosophie', options: ['Ph', 'F'], correct: 'Ph', explanation: '„Philosophie" — cuvânt din greacă, scris cu ph.' },
    { id: 'd', word: 'der __isch (peștele)', options: ['Ph', 'F'], correct: 'F', explanation: '„Fisch" e cuvânt german autohton → cu f simplu.' },
    { id: 'e', word: 'das __änomen (fenomenul)', options: ['Ph', 'F'], correct: 'Ph', explanation: '„Phänomen" — cuvânt din greacă, scris cu ph.' },
    { id: 'f', word: 'die __amilie (familia)', options: ['Ph', 'F'], correct: 'F', explanation: '„Familie" — cu f simplu (din latină dar adaptat).' },
    { id: 'g', word: 'die __ase (faza)', options: ['Ph', 'F'], correct: 'Ph', explanation: '„Phase" — cuvânt din greacă, scris cu ph.' },
    { id: 'h', word: '__roh (vesel)', options: ['Ph', 'F'], correct: 'F', explanation: '„froh" e cuvânt german → cu f simplu.' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Cuvântul se scrie cu „ph" (împrumutat din greacă) sau cu „f" (cuvânt german)?</strong> Ambele se citesc „f", dar scrierea e diferită.</div>`;
    ex1Data.forEach((it, i) => {
        let opts = '';
        it.options.forEach((o, k) => {
            opts += `<div class="mc-option"><input type="radio" name="ex1-${it.id}" value="${o.replace(/"/g, '&quot;')}" id="ex1-${it.id}-${k}"><label for="ex1-${it.id}-${k}">${o}</label></div>`;
        });
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label><span class="nomen-highlight">${it.word}</span></label><div class="mc-options">${opts}</div></div><div class="feedback" id="ex1-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex1-${it.id}"]:checked`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        const ans = sel ? sel.value : '';
        if (ans === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `${it.correct} — ${it.explanation}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
        }
    });
    return { correct, total: ex1Data.length };
}

// ============================================
// EXERCIȚIUL 2: pf, ph sau f? Completează
// ============================================
const ex2Data = [
    { id: 'a', word: 'der A__el (mărul)', correct: 'pf', accept: ['pf'], hint: 'sunet unic „pf"' },
    { id: 'b', word: '__oto (poza)', correct: 'Ph', accept: ['ph'], hint: 'din greacă' },
    { id: 'c', word: 'die __ote (laba de animal)', correct: 'Pf', accept: ['pf'], hint: 'sunet unic „pf"' },
    { id: 'd', word: '__roh (vesel)', correct: 'F', accept: ['f'], hint: 'cuvânt german simplu' },
    { id: 'e', word: 'die __ilosophie', correct: 'Ph', accept: ['ph'], hint: 'din greacă' },
    { id: 'f', word: 'das __erd (calul)', correct: 'Pf', accept: ['pf'], hint: 'sunet unic „pf"' },
    { id: 'g', word: 'die __amilie (familia)', correct: 'F', accept: ['f'], hint: 'din latină, dar f' },
    { id: 'h', word: 'die __anne (tigaia)', correct: 'Pf', accept: ['pf'], hint: 'sunet unic „pf"' }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Completează cu pf, ph sau f.</strong><br><em>Reamintire:</em> pf = sunet unic (p+f) · ph = „f" (cuvânt din greacă) · f = „f" (cuvânt german).</div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${it.word} <small style="color:#6b7280;">💡 ${it.hint}</small></label><input type="text" id="ex2-${it.id}" placeholder="pf / ph / f"></div><div class="feedback" id="ex2-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        const ans = (inp.value || '').trim().toLowerCase();
        if (it.accept.some(a => a.toLowerCase() === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex2Data.length };
}

// ============================================
// EXERCIȚIUL 3: Cum se citește „ch"?
// ============================================
const ex3Data = [
    { id: 'a', word: 'ich', options: ['„h" moale', '„h" gutural', '„c"', '„ș"'], correct: '„h" moale', explanation: '„ich" → ih — ch după i = h moale.' },
    { id: 'b', word: 'acht', options: ['„h" moale', '„h" gutural', '„c"', '„ș"'], correct: '„h" gutural', explanation: '„acht" → aht — ch după a = h gutural (din gât).' },
    { id: 'c', word: 'der Chor', options: ['„h" moale', '„h" gutural', '„c"', '„ș"'], correct: '„c"', explanation: '„Chor" → Cor — Ch- la început + o = „c" (cuvânt din greacă).' },
    { id: 'd', word: 'der Chef', options: ['„h" moale', '„h" gutural', '„c"', '„ș"'], correct: '„ș"', explanation: '„Chef" → Șef — cuvânt din franceză, ch = „ș".' },
    { id: 'e', word: 'das Buch', options: ['„h" moale', '„h" gutural', '„c"', '„ș"'], correct: '„h" gutural', explanation: '„Buch" → Bu:h — ch după u = h gutural.' },
    { id: 'f', word: 'mich', options: ['„h" moale', '„h" gutural', '„c"', '„ș"'], correct: '„h" moale', explanation: '„mich" → mih — ch după i = h moale.' },
    { id: 'g', word: 'das Chaos', options: ['„h" moale', '„h" gutural', '„c"', '„ș"'], correct: '„c"', explanation: '„Chaos" → Caos — Ch- la început + a = „c" (cuvânt din greacă).' },
    { id: 'h', word: 'die Chiffre', options: ['„h" moale', '„h" gutural', '„c"', '„ș"'], correct: '„ș"', explanation: '„Chiffre" → Șifre — cuvânt din franceză, ch = „ș".' },
    { id: 'i', word: 'das Loch', options: ['„h" moale', '„h" gutural', '„c"', '„ș"'], correct: '„h" gutural', explanation: '„Loch" → Lo:h — ch după o = h gutural.' },
    { id: 'j', word: 'die Chemie', options: ['„h" moale', '„h" gutural', '„c"', '„ș"'], correct: '„h" moale', explanation: '„Chemie" → Hemi: — Ch- la început + e = h moale (excepție de la regula „c"!).' }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Cum se citește „ch" în fiecare cuvânt?</strong><br><em>Reamintire:</em> după i/e = „h" moale · după a/o/u = „h" gutural · Ch- + a/o/l/r = „c" · cuvinte franceze = „ș".</div>`;
    ex3Data.forEach((it, i) => {
        let opts = '';
        it.options.forEach((o, k) => {
            opts += `<div class="mc-option"><input type="radio" name="ex3-${it.id}" value="${o.replace(/"/g, '&quot;')}" id="ex3-${it.id}-${k}"><label for="ex3-${it.id}-${k}">${o}</label></div>`;
        });
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label><span class="nomen-highlight">${it.word}</span></label><div class="mc-options">${opts}</div></div><div class="feedback" id="ex3-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex3-${it.id}"]:checked`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        const ans = sel ? sel.value : '';
        if (ans === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `${it.correct} — ${it.explanation}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
        }
    });
    return { correct, total: ex3Data.length };
}

// ============================================
// EXERCIȚIUL 4: k sau ck?
// ============================================
const ex4Data = [
    { id: 'a', word: 'di__ (gros)', correct: 'ck', accept: ['ck'], hint: 'după vocală scurtă i' },
    { id: 'b', word: 'kran__ (bolnav)', correct: 'k', accept: ['k'], hint: 'după consoana n' },
    { id: 'c', word: 'pa__en (a împacheta)', correct: 'ck', accept: ['ck'], hint: 'după vocală scurtă a' },
    { id: 'd', word: 'die Ban__ (banca)', correct: 'k', accept: ['k'], hint: 'după consoana n' },
    { id: 'e', word: 'das Glü__ (norocul)', correct: 'ck', accept: ['ck'], hint: 'după vocală scurtă ü' },
    { id: 'f', word: 'denk__n (a gândi)', correct: 'k', accept: ['k'], hint: 'după consoana n din „denk-"' },
    { id: 'g', word: 'der Rü__en (spatele)', correct: 'ck', accept: ['ck'], hint: 'după vocală scurtă ü' },
    { id: 'h', word: 'der Fun__ (radio)', correct: 'k', accept: ['k'], hint: 'după consoana n' }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Completează cu k sau ck.</strong><br><em>Regulă:</em> <strong>ck</strong> doar după vocală scurtă (dick, packen). <strong>k</strong> simplu după consoanele l, m, n, r (krank, denken).</div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${it.word} <small style="color:#6b7280;">💡 ${it.hint}</small></label><input type="text" id="ex4-${it.id}" placeholder="k sau ck"></div><div class="feedback" id="ex4-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        const ans = (inp.value || '').trim().toLowerCase();
        if (it.accept.some(a => a.toLowerCase() === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex4Data.length };
}

// ============================================
// EXERCIȚIUL 5: z sau tz?
// ============================================
const ex5Data = [
    { id: 'a', word: 'die Ka__e (pisica)', correct: 'tz', accept: ['tz'], hint: 'după vocală scurtă a' },
    { id: 'b', word: 'tan__en (a dansa)', correct: 'z', accept: ['z'], hint: 'după consoana n' },
    { id: 'c', word: 'si__en (a sta jos)', correct: 'tz', accept: ['tz'], hint: 'după vocală scurtă i' },
    { id: 'd', word: 'das Her__ (inima)', correct: 'z', accept: ['z'], hint: 'după consoana r' },
    { id: 'e', word: 'der Pla__ (piața)', correct: 'tz', accept: ['tz'], hint: 'după vocală scurtă a' },
    { id: 'f', word: 'gan__ (complet)', correct: 'z', accept: ['z'], hint: 'după consoana n' },
    { id: 'g', word: 'pu__en (a curăța)', correct: 'tz', accept: ['tz'], hint: 'după vocală scurtă u' },
    { id: 'h', word: 'der Tan__ (dansul)', correct: 'z', accept: ['z'], hint: 'după consoana n' }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Completează cu z sau tz.</strong><br><em>Regulă:</em> <strong>tz</strong> doar după vocală scurtă (Katze, sitzen). <strong>z</strong> simplu după consoanele l, m, n, r (tanzen, Herz).</div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${it.word} <small style="color:#6b7280;">💡 ${it.hint}</small></label><input type="text" id="ex5-${it.id}" placeholder="z sau tz"></div><div class="feedback" id="ex5-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        const ans = (inp.value || '').trim().toLowerCase();
        if (it.accept.some(a => a.toLowerCase() === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

// ============================================
// INIT EXERCIȚII
// ============================================
buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
