/* Elements */ 
let previewNo = document.getElementById("preview-no");
let previewYes = document.getElementById("preview-yes");

let btnSelect = document.querySelectorAll(".btn-select");

let snippetNo = document.getElementById("snippet-no");
let snippetYes = document.getElementById("snippet-yes");

let btnSnippet = document.querySelectorAll(".btn-snippet");
let blocsSnippet = document.querySelectorAll(".bloc-snippet");

let btnHTML = document.getElementById("btn-HTML"); 
let btnCSS = document.getElementById("btn-CSS");
let btnJS = document.getElementById("btn-JS");

let snippetHTML = document.getElementById("bloc-snippet-HTML");
let snippetCSS = document.getElementById("bloc-snippet-CSS");
let snippetJS = document.getElementById("bloc-snippet-JS");


/* Open the select */
function openSelect(idSelect) {
    if(idSelect === undefined) {
        idSelect = "";
    }
    document.getElementById(`btn-open-select${idSelect}`).classList.remove("btn-select-show");
    document.getElementById(`btn-close-select${idSelect}`).classList.remove("btn-select-hidden");
    document.getElementById(`opened-select${idSelect}`).classList.remove("opened-select-hidden");
    
    document.getElementById(`btn-open-select${idSelect}`).classList.add("btn-select-hidden");
    document.getElementById(`btn-close-select${idSelect}`).classList.add("btn-select-show");
    document.getElementById(`opened-select${idSelect}`).classList.add("opened-select-show");
}


/* Close the select */
function closeSelect(idSelect) {
    if(idSelect === undefined) {
        idSelect = "";
    }
    document.getElementById(`btn-open-select${idSelect}`).classList.remove("btn-select-hidden");
    document.getElementById(`btn-close-select${idSelect}`).classList.remove("btn-select-show");
    document.getElementById(`opened-select${idSelect}`).classList.remove("opened-select-show");
    
    document.getElementById(`btn-open-select${idSelect}`).classList.add("btn-select-show");
    document.getElementById(`btn-close-select${idSelect}`).classList.add("btn-select-hidden");
    document.getElementById(`opened-select${idSelect}`).classList.add("opened-select-hidden");
}


/* Change snippet button */ 
function changeSnippet(type) {
    btnSnippet.forEach(btn => {
        btn.style.backgroundColor = "#00adb5";
    });
    document.getElementById("btn-"+type).style.backgroundColor = "#0091b5";

    blocsSnippet.forEach(blocSnippet => {
        blocSnippet.style.display = "none";
    });
    document.getElementById("bloc-snippet-"+type).style.display = "block";
}

/* Copy */ 
let clipboard = new ClipboardJS('.fa-clipboard');

/* Launch highlight.js */
hljs.highlightAll();

/* Change the year */
document.getElementById("year").innerText = new Date().getFullYear();