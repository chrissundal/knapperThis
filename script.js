let lettersPressed = '';
let startMessage = '';
let funElement = '';
let powerOn = false;

updateView();
function updateView() {
    let html = `
                <div class="ramme">
                        <div class="tekst">${startMessage} ${lettersPressed ?? ''}${funElement}</div>
                    <div class="btnframe">
                        <button class="restart" onclick="stopColor()"><strong>Reset DOS</strong></button>
                        <button class="start" onclick="powerPc()"><strong>Power</strong></button>
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
function createFirstTast() {
    return `<div class="rad1">
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

}
function createSecondTast() {
    return `<div class="rad2">
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

}
function createThirdTast() {
    return `<div class="rad3">
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

}

function powerPc() {
    startMessage = `<img src="dos.png" class="bilde"/>`;
    setTimeout(firstStartUpPc, 3000)
    updateView();
}
function firstStartUpPc() {
    startMessage = 'Boot'
    setTimeout(secondStartUpPc, 3000)
    updateView();
}
function secondStartUpPc() {
    setTimeout(thirdStartUpPc, 3000)
    startMessage = '...'
    updateView();
}
function thirdStartUpPc() {
    startMessage = 'C:'
    powerOn = !powerOn;
    firstElm();
    updateView();
}
function firstElm() {
    setTimeout(secondElm, 1000)
    funElement = '_'
    updateView();
}
function secondElm() {
    setTimeout(firstElm, 1000)
    funElement = ''
    updateView();
}

function tastatur(htmlElement) {
    if (powerOn == true) {
        lettersPressed += htmlElement.innerHTML;
    }
    updateView();
}
function stopColor() {
    location.reload();
}