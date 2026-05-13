// ============================================
// TEORIE - Konsonantengruppen ph, pf, ch, ck, tz
// Claudia Toth · A0 — Fonetică · Lecția 6 din 7
// ============================================

const theoryHTML = `
    <!-- 0: Ph/ph -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🇵🇭 1. Grupul Ph/ph = „f" (cuvinte împrumutate din greacă)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-grupul-ph.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>O literă „f" deghizată</h4>
                <p>Grupul <strong>ph</strong> se citește mereu ca <strong>„f"</strong> — la fel ca litera „f" simplă. Apare doar în cuvinte împrumutate din <strong>greacă</strong> sau <strong>latină</strong>.</p>
                <p style="margin-top: 8px;">⚠️ În germana modernă, multe cuvinte cu „ph" au fost simplificate la „f" (Foto, Telefon — scrise normal). Dar formele cu „ph" rămân acceptate.</p>
            </div>
            <div class="theory-box" style="background: #fffbeb; border-left: 4px solid #f59e0b; margin-bottom: 14px;">
                <h4>💡 Înainte să începem — Diacritice germane fără tastatură germană</h4>
                <p>„Nu ai tastatură germană? <strong>Niciun stres!</strong> La toate exercițiile poți scrie:</p>
                <ul style="margin: 6px 0 4px 18px;">
                    <li><code style="background:#fff;padding:1px 5px;border-radius:3px;">ss</code> în loc de <code style="background:#fff;padding:1px 5px;border-radius:3px;">ß</code> &nbsp;→&nbsp; <em>„heisst" = „heißt"</em></li>
                    <li><code style="background:#fff;padding:1px 5px;border-radius:3px;">ae</code> în loc de <code style="background:#fff;padding:1px 5px;border-radius:3px;">ä</code> &nbsp;→&nbsp; <em>„Rumaenien" = „Rumänien"</em></li>
                    <li><code style="background:#fff;padding:1px 5px;border-radius:3px;">oe</code> în loc de <code style="background:#fff;padding:1px 5px;border-radius:3px;">ö</code> &nbsp;→&nbsp; <em>„schoen" = „schön"</em></li>
                    <li><code style="background:#fff;padding:1px 5px;border-radius:3px;">ue</code> în loc de <code style="background:#fff;padding:1px 5px;border-radius:3px;">ü</code> &nbsp;→&nbsp; <em>„gruessen" = „grüßen"</em></li>
                </ul>
                <p>Sistemul acceptă <strong>ambele forme</strong> automat. Eu așa am început — fără tastatură germană! E o convenție oficială folosită și de germani când scriu fără diacritice."</p>
            </div>


            <table class="theory-table">
                <thead><tr><th>Cuvânt</th><th>Pronunție</th><th>Traducere</th></tr></thead>
                <tbody>
                    <tr><td><strong>das Photo</strong> (sau Foto)</td><td>Foto</td><td><span class="ro-translation">poza</span></td></tr>
                    <tr><td><strong>die Philosophie</strong></td><td>Filosofi:</td><td><span class="ro-translation">filosofia</span></td></tr>
                    <tr><td><strong>die Phase</strong></td><td>Faze</td><td><span class="ro-translation">faza</span></td></tr>
                    <tr><td><strong>das Phänomen</strong></td><td>Fɛnome:n</td><td><span class="ro-translation">fenomenul</span></td></tr>
                    <tr><td><strong>der Phönix</strong></td><td>Fø:nics</td><td><span class="ro-translation">phoenix-ul</span></td></tr>
                    <tr><td><strong>das Telephon</strong> (sau Telefon)</td><td>Telefon</td><td><span class="ro-translation">telefonul</span></td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6;">
                <h4>💡 Reține</h4>
                <p>Dacă vezi <strong>ph</strong>, gândește-te „f". Sunetul e identic cu litera „f" simplă.</p>
            </div>
        </div>
    </div>

    <!-- 1: Pf/pf -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🌬 2. Grupul Pf/pf = „pf" (sunet unic german!)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-grupul-pf.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Un sunet care NU există în română</h4>
                <p>Grupul <strong>pf</strong> formează un <strong>singur sunet</strong> — un „p" accentuat urmat imediat de un „f" slab, pronunțate <strong>împreună rapid</strong>.</p>
                <p style="margin-top: 8px;">Truc: începi un „p" cu buzele închise, apoi imediat treci în „f" — fără pauză între ele. Ambele sunete trebuie auzite, dar curg unul în celălalt.</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Cuvânt</th><th>Pronunție</th><th>Traducere</th></tr></thead>
                <tbody>
                    <tr><td><strong>die Pfote</strong></td><td>Pfo:te</td><td><span class="ro-translation">laba (de animal)</span></td></tr>
                    <tr><td><strong>der Apfel</strong></td><td>Apfăl</td><td><span class="ro-translation">mărul</span></td></tr>
                    <tr><td><strong>die Pflege</strong></td><td>Pfle:ge</td><td><span class="ro-translation">grija / îngrijirea</span></td></tr>
                    <tr><td><strong>das Pferd</strong></td><td>Pfe:rd</td><td><span class="ro-translation">calul</span></td></tr>
                    <tr><td><strong>die Pfanne</strong></td><td>Pfane</td><td><span class="ro-translation">tigaia</span></td></tr>
                    <tr><td><strong>die Pflicht</strong></td><td>Pflicht</td><td><span class="ro-translation">datoria / obligația</span></td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>⚠️ Capcană pentru români</h4>
                <p>Tendința naturală e să „înghiți" p-ul și să spui doar „f" (Apfel → „afăl"). <strong>Greșit!</strong></p>
                <p style="margin-top: 8px;">Trebuie să auzi clar AMBELE sunete: p + f. Exersează cu „Apfel" pronunțat „A<strong>p</strong>fel" — accent pe p.</p>
            </div>
        </div>
    </div>

    <!-- 2: Ch/ch — 4 moduri -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🔀 3. Grupul Ch/ch — 4 moduri de citire (cea mai capricioasă!)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-grupul-ch.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Ch are 4 pronunții — depinde de poziție și de cuvânt</h4>
                <p>Grupul <strong>ch</strong> e cel mai variat sunet din germană. Pronunția depinde de ce vine <strong>înainte</strong> sau <strong>după</strong> el.</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Regulă</th><th>Sunet</th><th>Exemplu · traducere</th></tr></thead>
                <tbody>
                    <tr>
                        <td rowspan="4"><strong>ch după i, e, ä, ö, ü, ei, eu, l, n, r</strong></td>
                        <td rowspan="4"><strong>„h" moale</strong> (palatal — un fel de șoaptă)</td>
                        <td><strong>ich</strong> → ih · <span class="ro-translation">eu</span></td>
                    </tr>
                    <tr><td><strong>mich, dich</strong> → mih, dih · <span class="ro-translation">pe mine, pe tine</span></td></tr>
                    <tr><td><strong>China, die Chemie</strong> → hina, hemi: · <span class="ro-translation">China, chimia</span></td></tr>
                    <tr><td><strong>das Mädchen</strong> → mɛdhăn · <span class="ro-translation">fata</span></td></tr>
                    <tr>
                        <td rowspan="4"><strong>ch după a, o, u, au</strong></td>
                        <td rowspan="4"><strong>„h" gutural</strong> (din gât, ca un râs)</td>
                        <td><strong>acht</strong> → aht · <span class="ro-translation">opt</span></td>
                    </tr>
                    <tr><td><strong>brachte</strong> → brahte · <span class="ro-translation">a adus</span></td></tr>
                    <tr><td><strong>das Buch</strong> → bu:h · <span class="ro-translation">cartea</span></td></tr>
                    <tr><td><strong>das Loch</strong> → lo:h · <span class="ro-translation">gaura</span></td></tr>
                    <tr>
                        <td rowspan="5"><strong>Ch- la început + a/o/l/r</strong> (cuvinte din greacă)</td>
                        <td rowspan="5"><strong>„c"</strong> (ca în „casă")</td>
                        <td><strong>Christian</strong> → Cristian · <span class="ro-translation">Cristian</span></td>
                    </tr>
                    <tr><td><strong>das Chlor</strong> → Clor · <span class="ro-translation">clorul</span></td></tr>
                    <tr><td><strong>das Chaos</strong> → Caos · <span class="ro-translation">haosul</span></td></tr>
                    <tr><td><strong>der Chor</strong> → Cor · <span class="ro-translation">corul</span></td></tr>
                    <tr><td><strong>der Charakter</strong> → Caracter · <span class="ro-translation">caracterul</span></td></tr>
                    <tr>
                        <td rowspan="3"><strong>Ch- în cuvinte din franceză</strong></td>
                        <td rowspan="3"><strong>„ș"</strong></td>
                        <td><strong>die Chiffre</strong> → Șifre · <span class="ro-translation">cifrul</span></td>
                    </tr>
                    <tr><td><strong>der Chef</strong> → Șef · <span class="ro-translation">șeful</span></td></tr>
                    <tr><td><strong>der Champagner</strong> → Șampanjer · <span class="ro-translation">șampania</span></td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>💡 Trucul de aur pentru ch</h4>
                <ul>
                    <li>După <strong>i, e</strong> și consoane → „h" moale (ca o șoaptă)</li>
                    <li>După <strong>a, o, u, au</strong> → „h" gutural (din gât)</li>
                    <li>La început + <strong>a/o/l/r</strong> → „c" (cuvinte greacă)</li>
                    <li>În cuvinte care arată „franțuzește" → „ș" (Chef, Chic)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 3: Ck/ck -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🆎 4. Scharfes Ck/ck = „c" (după vocală scurtă)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-grupul-ck.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Cum se scrie „c" tăios după vocală scurtă</h4>
                <p>Grupul <strong>ck</strong> = sunetul „c" românesc, dar <strong>tăios și scurt</strong> (numit „scharfes ck" = c ascuțit). Apare DOAR <strong>după o vocală scurtă</strong>.</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Cuvânt</th><th>Pronunție</th><th>Traducere</th></tr></thead>
                <tbody>
                    <tr><td><strong>der Klecks</strong></td><td>Clecs</td><td><span class="ro-translation">pata</span></td></tr>
                    <tr><td><strong>der Rücken</strong></td><td>Rücăn</td><td><span class="ro-translation">spatele</span></td></tr>
                    <tr><td><strong>dick</strong></td><td>dic</td><td><span class="ro-translation">gros</span></td></tr>
                    <tr><td><strong>das Glück</strong></td><td>Glüc</td><td><span class="ro-translation">norocul</span></td></tr>
                    <tr><td><strong>packen</strong></td><td>pacăn</td><td><span class="ro-translation">a împacheta</span></td></tr>
                    <tr><td><strong>der Schock</strong></td><td>Șoc</td><td><span class="ro-translation">șocul</span></td></tr>
                    <tr><td><strong>backen</strong></td><td>bacăn</td><td><span class="ro-translation">a coace</span></td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background: #fee2e2; border-color: #ef4444;">
                <h4>⚠️ NICIODATĂ ck după l, m, n, r</h4>
                <p>Dacă „c" tăios apare după o consoană (l, m, n, r), se scrie doar <strong>k</strong> (NU ck!):</p>
                <ul>
                    <li><strong>krank</strong> → cranc <span class="ro-translation">bolnav</span></li>
                    <li><strong>denken</strong> → denkăn <span class="ro-translation">a gândi</span></li>
                    <li><strong>der Funk</strong> → Func <span class="ro-translation">radio (transmisie)</span></li>
                    <li><strong>die Bank</strong> → Banc <span class="ro-translation">banca / banca (loc)</span></li>
                </ul>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6;">
                <h4>💡 Regulă simplă</h4>
                <ul>
                    <li><strong>Vocală scurtă + ck</strong>: dick, packen, Glück</li>
                    <li><strong>Consoană (l, m, n, r) + k</strong>: krank, denken, Bank</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 4: Tz/tz -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🆎 5. Scharfes Tz/tz = „ț" (după vocală scurtă)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-grupul-tz.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Perechea lui ck pentru sunetul „ț"</h4>
                <p>Grupul <strong>tz</strong> = sunetul „ț" românesc, <strong>tăios și scurt</strong> (numit „scharfes tz"). Funcționează exact la fel ca ck — apare DOAR <strong>după o vocală scurtă</strong>.</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Cuvânt</th><th>Pronunție</th><th>Traducere</th></tr></thead>
                <tbody>
                    <tr><td><strong>die Katze</strong></td><td>Kațe</td><td><span class="ro-translation">pisica</span></td></tr>
                    <tr><td><strong>sitzen</strong></td><td>zițăn</td><td><span class="ro-translation">a sta jos</span></td></tr>
                    <tr><td><strong>jetzt</strong></td><td>iețt</td><td><span class="ro-translation">acum</span></td></tr>
                    <tr><td><strong>der Platz</strong></td><td>Plaț</td><td><span class="ro-translation">piața</span></td></tr>
                    <tr><td><strong>der Blitz</strong></td><td>Bliț</td><td><span class="ro-translation">fulgerul</span></td></tr>
                    <tr><td><strong>putzen</strong></td><td>puțăn (cu ț, NU pucăn)</td><td><span class="ro-translation">a curăța</span></td></tr>
                    <tr><td><strong>der Witz</strong></td><td>Viț</td><td><span class="ro-translation">gluma</span></td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background: #fee2e2; border-color: #ef4444;">
                <h4>⚠️ NICIODATĂ tz după l, m, n, r</h4>
                <p>Dacă „ț" apare după o consoană (l, m, n, r), se scrie doar <strong>z</strong> (NU tz!):</p>
                <ul>
                    <li><strong>tanzen</strong> → tanțăn <span class="ro-translation">a dansa</span></li>
                    <li><strong>der Tanz</strong> → Tanț <span class="ro-translation">dansul</span></li>
                    <li><strong>das Herz</strong> → Herț <span class="ro-translation">inima</span></li>
                    <li><strong>ganz</strong> → ganț <span class="ro-translation">complet, în întregime</span></li>
                </ul>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6;">
                <h4>💡 Regulă generală pentru scharfes (ck + tz)</h4>
                <p>Atât <strong>ck</strong> cât și <strong>tz</strong> urmează aceeași logică:</p>
                <ul>
                    <li>După <strong>vocală scurtă</strong> → se scrie dublu: <strong>ck</strong> sau <strong>tz</strong></li>
                    <li>După <strong>consoană (l, m, n, r)</strong> → se scrie simplu: <strong>k</strong> sau <strong>z</strong></li>
                </ul>
                <p style="margin-top: 8px;">Logica: după o consoană deja există un sunet „tare", deci nu mai e nevoie de „dublare" pentru efect.</p>
            </div>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;
