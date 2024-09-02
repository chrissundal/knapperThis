let lettersPressed = '';

        updateView();
        function updateView(){
            let html = `
                <div class="ramme">
                        <div class="tekst">Tekst: ${lettersPressed ?? ''}</div>
                    <div class="btnframe">
                        <button class="restart" onclick="stopColor()"><strong>Reset DOS</strong></button>
                    </div>
                </div>
            <div class="rammeTast">
                <div class="tast">
                    ${createFirstTast()}
                    ${createSecondTast()}
                    ${createThirdTast()}
                </div>
            </div>
            `;
            document.getElementById('app').innerHTML = html;
        }
        function createFirstTast(){
        return  `<div class="rad1">
                    <button onclick="tastatur(this)">Q</button>
                    <button onclick="tastatur(this)">W</button>
                    <button onclick="tastatur(this)">E</button>
                    <button onclick="tastatur(this)">R</button>
                    <button onclick="tastatur(this)">T</button>
                    <button onclick="tastatur(this)">Y</button>
                    <button onclick="tastatur(this)">U</button>
                    <button onclick="tastatur(this)">I</button>
                    <button onclick="tastatur(this)">O</button>
                    <button onclick="tastatur(this)">P</button>
                    <button onclick="tastatur(this)">Å</button>
                    <button onclick="tastatur(this)">¨</button>
                </div> 
            `;
            updateView();
        }
        function createSecondTast(){
            return  `<div class="rad2">
                <button onclick="tastatur(this)">A</button>
                <button onclick="tastatur(this)">S</button>
                <button onclick="tastatur(this)">D</button>
                <button onclick="tastatur(this)">F</button>
                <button onclick="tastatur(this)">G</button>
                <button onclick="tastatur(this)">H</button>
                <button onclick="tastatur(this)">J</button>
                <button onclick="tastatur(this)">K</button>
                <button onclick="tastatur(this)">L</button>
                <button onclick="tastatur(this)">Ø</button>
                <button onclick="tastatur(this)">Æ</button>
                </div>
                `;
                updateView();
            }
            function createThirdTast(){
                return  `<div class="rad3">
                    <button onclick="tastatur(this)">Z</button>
                    <button onclick="tastatur(this)">X</button>
                    <button onclick="tastatur(this)">C</button>
                    <button onclick="tastatur(this)">V</button>
                    <button onclick="tastatur(this)">B</button>
                    <button onclick="tastatur(this)">N</button>
                    <button onclick="tastatur(this)">M</button>
                    <button onclick="tastatur(this)">,</button>
                    <button onclick="tastatur(this)">.</button>
                    <button onclick="tastatur(this)">-</button>
                    </div>
                    `;
                    updateView();
        }
        
        function tastatur(htmlElement) {
            lettersPressed += htmlElement.innerHTML;
            updateView();
        }
        function stopColor() {
            location.reload();
        }