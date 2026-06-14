// ============================================
// VERB-KONJUGATION (A0 — DOAR Präsens) - Lecția 6: Konsonantengruppen ph/pf/ch/ck/tz
// Claudia Toth · A0 Fonetică (pură) · recap sein (din L5) + heißen (din L1)
// La A0: NUMAI Präsens (Präteritum/Perfekt vin în A1+).
// REGULĂ: NU backticks, NU ghilimele interne care rup template literal!
// ============================================

const verbsData = [
    {
        inf: 'sein', ro: 'a fi', recap: 'L5', praes: [
            ['ich','bin','sunt'],['du','bist','ești'],['er/sie/es','ist','este'],
            ['wir','sind','suntem'],['ihr','seid','sunteți'],['sie/Sie','sind','sunt']
        ],
        note: 'Cel mai important verb din germană: „Ich bin Andreea." Neregulat — se învață pe dinafară.'
    },
    {
        inf: 'heißen', ro: 'a se numi', recap: 'L1', praes: [
            ['ich','heiße','mă numesc'],['du','heißt','te numești'],['er/sie/es','heißt','se numește'],
            ['wir','heißen','ne numim'],['ihr','heißt','vă numiți'],['sie/Sie','heißen','se numesc']
        ],
        note: 'Radical în -ß → du heißt = er heißt (NU „heißst").'
    }
];

function praesTable(rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#5A5147;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>Präsens (prezent)</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 Verbele lecției — la prezent (Präsens)</strong><br>' +
        'Click pe un verb ca să-i vezi conjugarea. Instrument de <strong>referință</strong>.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„La A0 (fonetică) înveți verbele DOAR la prezent (Präsens). Trecutul vine în A1+. Lecția asta e pură fonetică — reluăm sein (din L5) și heißen (din L1) ca referință. 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em>' + (v.recap ? ' · 📎 recap' : '') + '</span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            (v.recap ? '<div class="theory-box" style="background:#d1fae5;"><p style="margin:0;">📎 <strong>Recap</strong> — verb din <strong>' + v.recap + '</strong>, reluat aici ca referință.</p></div>' : '') +
            praesTable(v.praes) +
            (v.note ? '<div class="theory-box" style="background:#F5F0E8;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });
    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
