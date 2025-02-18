

// put version

const version = "0.1.0";
const versionDate = "18 Feb 2025";

document.getElementById("version").innerText = version;
document.getElementById("versiondate").innerText = versionDate;


// button data

const buttonData = {
    "a-grave": "à",
    "n-breve": "n̆",
    "a-acute": "á",
    "a-caron": "ǎ",
    "e-acute": "é",
    "i-acute": "í",
    "o-acute": "ó",
    "u-acute": "ú",
}
const breakAt = 1;



// put buttons

let content = "";
let i = 0;
for(const [id, display] of Object.entries(buttonData)) {
    content += `<button onclick="put('${id}')">${display}</button>`;
    if(i === breakAt) {
        content += "<br>";
    }
    ++i;
}
document.getElementById("buttonsdiv").innerHTML = content;


// put character

function put(id) {
    document.getElementById("textbox").value += buttonData[id];
}