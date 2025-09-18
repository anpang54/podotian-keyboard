

// put version

const version = "0.1.2";
const versionDate = "18 Sep 2025";

document.getElementById("version").innerText = version;
document.getElementById("versiondate").innerText = versionDate;


// button data

const buttonData = {
    "a-grave": ["À", "à"],
    "o-grave": ["Ò", "ò"],
    "n-breve": ["N̆", "n̆"],
    "a-acute": ["Á", "á"],
    "a-caron": ["Ǎ", "ǎ"],
    "e-acute": ["É", "é"],
    "i-acute": ["Í", "í"],
    "o-acute": ["Ó", "ó"],
    "o-caron": ["Ǒ", "ǒ"],
    "u-acute": ["Ú", "ú"]
}
const breakAt = 2;


// put buttons

let content = "";
let i = 0;
for(const [id, display] of Object.entries(buttonData)) {
    content += `<button id="button-${id}" onclick="put('${id}')"></button>`;
    if(i === breakAt) {
        content += "<br>";
    }
    ++i;
}
document.getElementById("buttonsdiv").innerHTML = content;


// caps

let capital;
let capsLock = false;
let shift = false;

document.body.addEventListener("keydown", function(event) {
    if(event.key === "Shift") {
        shift = true;
    }
    capital = capsLock ^ shift;
    updateButtons();
})
document.body.addEventListener("keyup", function(event) {
    if(event.key === "Shift") {
        shift = false;
    }
    if(event.key === "CapsLock") {
        capsLock = !capsLock;
    }
    capital = capsLock ^ shift;
    updateButtons();
});

function toggleCaps() {
    capital = !capital;
    updateButtons();
}


// update buttons

function updateButtons() {
    document.getElementById("capsdisplay").innerText = capital? "On":"Off";
    for(const [id, display] of Object.entries(buttonData)) {
        document.getElementById(`button-${id}`).innerText = display[capital? 0:1];
    }
}
updateButtons();


// put character

function put(id) {
    document.getElementById("textbox").value += buttonData[id][capital? 0:1];
}