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

            <table class="theory-table">
                <thead><tr><th>Cum se scrie</th><th>Cum se citește</th></tr></thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>das Photo</strong> (sau Foto)<br>
                            <strong>die Philosophie</strong><br>
                            <strong>die Phase</strong><br>
                            <strong>das Phänomen</strong><br>
                            <strong>der Phönix</strong><br>
                            <strong>das Telephon</strong> (sau Telefon)
                        </td>
                        <td>
                            Foto<br>
                            Filosofi:<br>
                            Faze<br>
                            Fɛnome:n<br>
                            Fø:nics<br>
                            Telefon<br>
                            <span class="ro-translation">poza · filosofia · faza · fenomenul · phoenix-ul · telefonul</span>
                        </td>
                    </tr>
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
                <thead><tr><th>Cum se scrie</th><th>Cum se citește</th></tr></thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>die Pfote</strong><br>
                            <strong>der Apfel</strong><br>
                            <strong>die Pflege</strong><br>
                            <strong>das Pferd</strong><br>
                            <strong>die Pfanne</strong><br>
                            <strong>die Pflicht</strong>
                        </td>
                        <td>
                            Pfo:te<br>
                            Apfăl<br>
                            Pfle:ge<br>
                            Pfe:rd<br>
                            Pfane<br>
                            Pflicht<br>
                            <span class="ro-translation">laba (de animal) · mărul · grija/îngrijirea · calul · tigaia · datoria/obligația</span>
                        </td>
                    </tr>
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
                <thead><tr><th>Regulă</th><th>Sunet</th><th>Exemple</th></tr></thead>
                <tbody>
                    <tr>
                        <td><strong>ch după i, e, ä, ö, ü, ei, eu, l, n, r</strong></td>
                        <td><strong>„h" moale</strong> (palatal — un fel de șoaptă)</td>
                        <td>
                            <strong>ich</strong> → ih<br>
                            <strong>mich, dich</strong> → mih, dih<br>
                            <strong>China, die Chemie</strong> → hina, hemi:<br>
                            <strong>das Mädchen</strong> → mɛdhăn<br>
                            <span class="ro-translation">eu · pe mine, pe tine · China, chimia · fata</span>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>ch după a, o, u, au</strong></td>
                        <td><strong>„h" gutural</strong> (din gât, ca un râs)</td>
                        <td>
                            <strong>acht</strong> → aht<br>
                            <strong>brachte</strong> → brahte<br>
                            <strong>das Buch</strong> → bu:h<br>
                            <strong>das Loch</strong> → lo:h<br>
                            <span class="ro-translation">opt · a adus · cartea · gaura</span>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Ch- la început + a/o/l/r</strong> (cuvinte din greacă)</td>
                        <td><strong>„c"</strong> (ca în „casă")</td>
                        <td>
                            <strong>Christian</strong> → Cristian<br>
                            <strong>das Chlor</strong> → Clor<br>
                            <strong>das Chaos</strong> → Caos<br>
                            <strong>der Chor</strong> → Cor<br>
                            <strong>der Charakter</strong> → Caracter<br>
                            <span class="ro-translation">Cristian · clorul · haosul · corul · caracterul</span>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Ch- în cuvinte din franceză</strong></td>
                        <td><strong>„ș"</strong></td>
                        <td>
                            <strong>die Chiffre</strong> → Șifre<br>
                            <strong>der Chef</strong> → Șef<br>
                            <strong>der Champagner</strong> → Șampanjer<br>
                            <span class="ro-translation">cifrul · șeful · șampania</span>
                        </td>
                    </tr>
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
                <thead><tr><th>Cum se scrie</th><th>Cum se citește</th></tr></thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>der Klecks</strong><br>
                            <strong>der Rücken</strong><br>
                            <strong>dick</strong><br>
                            <strong>das Glück</strong><br>
                            <strong>packen</strong><br>
                            <strong>der Schock</strong><br>
                            <strong>backen</strong>
                        </td>
                        <td>
                            Clecs<br>
                            Rücăn<br>
                            dic<br>
                            Glüc<br>
                            pacăn<br>
                            Șoc<br>
                            bacăn<br>
                            <span class="ro-translation">pata · spatele · gros · norocul · a împacheta · șocul · a coace</span>
                        </td>
                    </tr>
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
                <thead><tr><th>Cum se scrie</th><th>Cum se citește</th></tr></thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>die Katze</strong><br>
                            <strong>sitzen</strong><br>
                            <strong>jetzt</strong><br>
                            <strong>der Platz</strong><br>
                            <strong>der Blitz</strong><br>
                            <strong>putzen</strong><br>
                            <strong>der Witz</strong>
                        </td>
                        <td>
                            Kațe<br>
                            zițăn<br>
                            iețt<br>
                            Plaț<br>
                            Bliț<br>
                            puțăn (cu ț, NU pucăn)<br>
                            Viț<br>
                            <span class="ro-translation">pisica · a sta jos · acum · piața · fulgerul · a curăța · gluma</span>
                        </td>
                    </tr>
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
