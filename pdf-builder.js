// ============================================
// PDF BUILDER — Konsonantengruppen ph, pf, ch, ck, tz (A0 · Lecția 6)
// Claudia Toth · model PDF brandat
// ============================================

(function () {
    if (typeof document === 'undefined') return;
    document.addEventListener('DOMContentLoaded', buildPDF);

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        root.innerHTML = buildTheory() + buildExercises() + buildFlashcards() + buildVerbs();
    }

    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        t = t.replace(/<div class="sub-section-header"[^>]*>\s*<span>([^<]+)<\/span>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g, '<h2 class="sub-chapter">$1</h2>');
        t = t.replace(/<div class="sub-section">/g, '<div>');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#dbeafe[^"]*"[^>]*>/g, '<div class="theory-box info-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#F5F0E8[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#F5F0E8[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        return `<h1 class="chapter">📘 1. Teorie — Grupurile consonantice ph, pf, ch, ck, tz</h1>` + t;
    }

    function mcBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>`;
        data.forEach((item, i) => {
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q"><strong>${item.word}</strong></div><div class="options">`;
            item.options.forEach((opt, oi) => {
                const letter = String.fromCharCode(65 + oi);
                const isRight = opt === item.correct;
                h += `<div class="${isRight ? 'right' : ''}">${letter}. ${opt}${isRight ? ' ✓' : ''}</div>`;
            });
            h += `</div><div class="ex-explanation">${item.explanation || ''}</div></div></div>`;
        });
        return h + `</div>`;
    }

    function fillInWordBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>`;
        data.forEach((item, i) => {
            const filled = item.word.replace(/__/g, `<strong style="color:#047857">${item.correct}</strong>`);
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${filled}</div><div class="ex-explanation">${item.hint || ''}</div></div></div>`;
        });
        return h + `</div>`;
    }

    function buildExercises() {
        let html = `<h1 class="chapter new-section">📝 2. Exerciții — cu rezolvări complete</h1>`;

        if (typeof ex1Data !== 'undefined') {
            html += mcBlock(
                'Übung 1 — ph (împrumutat din greacă) sau f (cuvânt german)?',
                'Ambele se citesc „f", dar scrierea diferă: ph în cuvinte împrumutate din greacă, f în cuvintele germane autohtone.',
                ex1Data
            );
        }
        if (typeof ex2Data !== 'undefined') {
            html += fillInWordBlock(
                'Übung 2 — Completează cu pf, ph sau f',
                'pf = sunet unic (p+f) · ph = „f" (din greacă) · f = „f" (cuvânt german).',
                ex2Data
            );
        }
        if (typeof ex3Data !== 'undefined') {
            html += mcBlock(
                'Übung 3 — Cum se citește „ch" în fiecare cuvânt?',
                'după i/e = h moale · după a/o/u = h gutural · Ch- + a/o/l/r = „c" · cuvinte franceze = „ș".',
                ex3Data
            );
        }
        if (typeof ex4Data !== 'undefined') {
            html += fillInWordBlock(
                'Übung 4 — Completează cu k sau ck',
                'ck doar după vocală scurtă (dick, packen). k simplu după consoanele l, m, n, r (krank, denken).',
                ex4Data
            );
        }
        if (typeof ex5Data !== 'undefined') {
            html += fillInWordBlock(
                'Übung 5 — Completează cu z sau tz',
                'tz doar după vocală scurtă (Katze, sitzen). z simplu după consoanele l, m, n, r (tanzen, Herz).',
                ex5Data
            );
        }

        return html;
    }

    function buildFlashcards() {
        const count = (typeof flashcardsData !== 'undefined') ? flashcardsData.length : 0;
        let html = `<h1 class="chapter new-section">📇 3. Vocabular complet (Flashcards)</h1>
            <p style="margin-bottom:10px">Cele <strong>${count} carduri</strong> ale lecției.</p>
            <div class="flashcards-grid">`;
        if (typeof flashcardsData !== 'undefined') {
            flashcardsData.forEach(card => {
                html += `<div class="fc-row"><span class="de">${card.de}</span><span class="ro">— ${card.ro}</span></div>`;
            });
        }
        html += `</div>`;
        return html;
    }

    function buildVerbs() {
        let html = `<h1 class="chapter new-section">🔁 4. Verbele lecției — la prezent (Präsens)</h1>
            <div class="andreea-note">
                <div class="speaker">📌 Andreea îți spune:</div>
                <div>La A0 (fonetică) înveți verbele DOAR la prezent (Präsens). Trecutul (Präteritum/Perfekt) vine în A1+.</div>
            </div>`;
        if (typeof verbsData !== 'undefined') {
            verbsData.forEach((v, idx) => {
                const recapTag = v.recap ? `<span class="recap-tag">📎 recap din ${v.recap}</span>` : '';
                html += `<div class="verb-card">
                    <div class="vh"><span class="name">${idx + 1}. ${v.inf}</span><span class="ro">— ${v.ro}</span>${recapTag}</div>
                    <h5>Präsens (prezent)</h5>
                    <table><thead><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr></thead><tbody>`;
                v.praes.forEach(row => {
                    html += `<tr><td><strong>${row[0]}</strong></td><td class="verb">${row[1]}</td><td class="ro-text">${row[2]}</td></tr>`;
                });
                html += `</tbody></table>`;
                if (v.note) html += `<div class="note"><strong>⚠️ </strong>${v.note}</div>`;
                html += `</div>`;
            });
        }
        return html;
    }
})();
