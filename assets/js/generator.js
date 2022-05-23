/* Elements */
const backgroundColorSelect = document.getElementById("background-color-select");
const fontColorSelect = document.getElementById("font-color-select");
const hoverColorSelect = document.getElementById("hover-color-select");
const idSelect = document.getElementById("id-select");
const titleSelect = document.getElementById("title-select");
const chevronsSelect = document.getElementById("chevrons-select");
const chevronsColorSelect = document.getElementById("chevrons-color-select");
const numberColumnsSelect = document.getElementById("number-columns-select");
let optionsSelect = document.getElementById("options-select");
const optionsCenterSelect = document.getElementById("options-center-select");

let codeHTML = document.getElementById("code-HTML");
let codeCSS = document.getElementById("code-CSS");
let codeJS = document.getElementById("code-JS");


/* Generator  */
function generate() {
    /* Show preview */ 
    previewNo.style.display = "none";
    previewYes.style.display = "block";

    /* Values */ 
    const BCSValue = backgroundColorSelect.value;
    const FCSValue = fontColorSelect.value;
    const HCSvalue = hoverColorSelect.value;
    let ISValue = idSelect.value;
    const TSValue = titleSelect.value;
    const CSValue = chevronsSelect.checked;
    const CCSValue = chevronsColorSelect.value;
    let NCSValue = numberColumnsSelect.value;
    const OSValue = optionsSelect.value.split('\n');
    var OCSValue = optionsCenterSelect.checked;

    /* Create the element */
    previewYes.innerHTML
   
    /* Background */
    btnSelect.forEach(btn => {
        btn.style.backgroundColor = BCSValue;
        btn.style.color = FCSValue;
        btn.addEventListener('mouseover', function(){
            btn.style.color = HCSvalue;
        });
        btn.addEventListener('mouseleave', function(){
            btn.style.color = CCSValue;
        });
    });
    document.getElementById("opened-select").style.backgroundColor = BCSValue;
    document.getElementById("opened-select").style.color = FCSValue;

    /* Title */
    document.getElementById("btn-open-select").innerHTML = TSValue;
    document.getElementById("btn-close-select").innerHTML = TSValue;

    /* Chevrons */
    let TCOpen = "";
    let TCClose = "";
    if(CSValue === true) {
        TCOpen = "<i class='arrow arrow-down'></i>";
        TCClose = "<i class='arrow arrow-up'></i>";
        if(TSValue === ""){
            document.getElementById(`btn-open-select`).innerHTML = TSValue+"<i class='arrow arrow-down'></i>";
            document.getElementById(`btn-close-select`).innerHTML = TSValue+"<i class='arrow arrow-up'></i>";
        } else {
            document.getElementById(`btn-open-select`).innerHTML = TSValue+"<i class='arrow arrow-down' style='margin-left: 15px';></i>";
            document.getElementById(`btn-close-select`).innerHTML = TSValue+"<i class='arrow arrow-up' style='margin-left: 15px';></i>";
        }
        const arrowSelect = document.querySelectorAll('.arrow');
        arrowSelect.forEach(arrow => {
            arrow.style.borderColor = CCSValue;
            arrow.addEventListener('mouseover', function(){
                arrow.style.borderColor = HCSvalue;
            })
            arrow.addEventListener('mouseleave', function(){
                arrow.style.borderColor = CCSValue;
            })
        });
    } else {
        document.getElementById("btn-open-select").innerHTML = TSValue;
        document.getElementById("btn-close-select").innerHTML = TSValue;
    }
 
    /* Columns */
    NCSValue = parseInt(NCSValue);
    switch(true) {
        case NCSValue < 1:
            NCSValue = 1;
            break;
        case NCSValue > 4:
            NCSValue = 4;
            break;
        default:
            break;
    }
    document.getElementById("list-select").style.columns = NCSValue;

    /* Options */
    let Options = [];
    OSValue.forEach(function(option) {
        option = option.replace(',', '');
        Options.push(option);
    })

    /* Options center */
    if(OCSValue === true) {
        var OptionsCenter = `display: block;
    margin-bottom: 15px;
    text-align: center;`;
    }

    /* Check ID */
    if(ISValue === "") {
        ISValue = "";
        ISValueSHY = "";
    } else {
        ISValueSHY = "-"+ISValue;
    }

    /* Snippets */
    let codeHTML = "";
    codeHTML = 
`<button class="btn-select" id="btn-open-select${ISValueSHY}" onclick="openSelect('${ISValue}')">${TSValue || ''}${TCOpen || ''}</button>
<div class="opened-select opened-select-hidden" id="opened-select${ISValueSHY}">
    <button class="btn-select btn-close-select" id="btn-close-select${ISValueSHY}" onclick="closeSelect('${ISValue}')">${TSValue || ''}${TCClose || ''}</button>`;
    if(Options[0] !== "") {
        codeHTML += 
        `
    <ul class="list-select" id="list-select${ISValueSHY}">
        ${Options.map(option =>
            `<li class="name-select">${option}</li>`
        ).join("\n            ")}
    </ul>`
    } else {
        codeHTML +=
        `
    <ul class="list-select" id="list-select${ISValueSHY}">
        <li class="name-select">Your option</li>
        <li class="name-select">Your option</li>
        <li class="name-select">Your option</li>
        <li class="name-select">Your option</li>
        <li class="name-select">Your option</li>
    </ul>`;
    }
    codeHTML += `
</div>`;

    let codeCSS = 
`.btn-select {
    background-color: ${BCSValue || '#000000'};
    border-color: transparent;
    border-radius: 10px;
    color: ${FCSValue || '#ffffff'};
    font-size: 18px;
    min-height: 50px;
    padding: 5px 10px;
    position: relative;
    width: 100%;
}
.btn-select:hover {
    color: ${HCSvalue || '#0091b5'};
    cursor: pointer;
}
.btn-select-hidden {
    display: none;
}
.btn-select-show {
    display: block;
}
.btn-close-select {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin: auto;
}
.arrow {
    border: solid ${CCSValue || '#ffffff'};
    border-width: 0 3px 3px 0;
    display: inline-block;
    ${TSValue ? 'margin-left: 15px;' : 'margin-left: 0px;'}
    padding: 5px;
    position: absolute;
    right: 15px;
}
.arrow:hover {
    color: ${HCSvalue || '#0091b5'};
}
.arrow-up {
    top: 50%;
    transform: rotate(-135deg);
}
.arrow-down {
    top: 35%;
    transform: rotate(45deg);
}
.opened-select {
    background-color: ${BCSValue || '#000000'};
    border-radius: 10px;
    width: 100%;
}
.opened-select-hidden {
    display: none;
}
.opened-select-show {
    display: block;
}
.list-select {
    columns: ${NCSValue || 1};
    list-style: none;
    margin: auto;
    padding: 2.5px 10px 5px 10px;
}
.name-select {
    color: ${FCSValue || '#ffffff'};
    ${OptionsCenter || "margin-bottom: 15px;"}
}
.name-select:hover {
    color: ${HCSvalue || '#0091b5'};
    cursor: pointer;
}
`;

    if(ISValue === "") {
        var codeJS = 
`/* Open the select */
function openSelect(idSelect) {
    document.getElementById("btn-open-select").classList.remove("btn-select-show");
    document.getElementById("btn-close-select").classList.remove("btn-select-hidden");
    document.getElementById("opened-select").classList.remove("opened-select-hidden");
    
    document.getElementById("btn-open-select").classList.add("btn-select-hidden");
    document.getElementById("btn-close-select").classList.add("btn-select-show");
    document.getElementById("opened-select").classList.add("opened-select-show");
}


/* Close the select */
function closeSelect(idSelect) {
    document.getElementById("btn-open-select").classList.remove("btn-select-hidden");
    document.getElementById("btn-close-select").classList.remove("btn-select-show");
    document.getElementById("opened-select").classList.remove("opened-select-show");
    
    document.getElementById("btn-open-select").classList.add("btn-select-show");
    document.getElementById("btn-close-select").classList.add("btn-select-hidden");
    document.getElementById("opened-select").classList.add("opened-select-hidden");
}
`;        
    } else {
        var codeJS = 
`/* Open the select */
function openSelect(idSelect) {
    document.getElementById("btn-open-select-"+idSelect).classList.remove("btn-select-show");
    document.getElementById("btn-close-select-"+idSelect).classList.remove("btn-select-hidden");
    document.getElementById("opened-select-"+idSelect).classList.remove("opened-select-hidden");
    
    document.getElementById("btn-open-select-"+idSelect).classList.add("btn-select-hidden");
    document.getElementById("btn-close-select-"+idSelect).classList.add("btn-select-show");
    document.getElementById("opened-select-"+idSelect).classList.add("opened-select-show");
}


/* Close the select */
function closeSelect(idSelect) {
    document.getElementById("btn-open-select-"+idSelect).classList.remove("btn-select-hidden");
    document.getElementById("btn-close-select-"+idSelect).classList.remove("btn-select-show");
    document.getElementById("opened-select-"+idSelect).classList.remove("opened-select-show");
    
    document.getElementById("btn-open-select-"+idSelect).classList.add("btn-select-show");
    document.getElementById("btn-close-select-"+idSelect).classList.add("btn-select-hidden");
    document.getElementById("opened-select-"+idSelect).classList.add("opened-select-hidden");
}
`;   
    }

    /* Write preview */
    writePreview(HCSvalue, CCSValue);

    /* Show snippets */ 
    snippetNo.style.display = "none";
    snippetYes.style.display = "block";
    btnHTML.style.backgroundColor = "#0091b5";
    btnCSS.style.backgroundColor = "#00adb5";
    btnJS.style.backgroundColor = "#00adb5";
    snippetHTML.style.display = "block";
    snippetCSS.style.display = "none";
    snippetJS.style.display = "none";

    /* Write snippets */
    writeSnippet("HTML", codeHTML);
    writeSnippet("CSS", codeCSS);
    writeSnippet("JS", codeJS);
}


/* Write preview */
function writePreview(HCSvalue, CCSValue) {
    const optionsSelect = document.getElementById("options-select").value.split('\n');
    document.getElementById("list-select").innerHTML = "";
    if(optionsSelect[0] !== "") {
        optionsSelect.forEach(function(option) {
            option = option.replace(',', '');
            document.getElementById("list-select").innerHTML += `<li class="name-select">${option}</li>`;
        });
    } else {
        const baseOptions = `
            <li class="name-select">Your option</li>
            <li class="name-select">Your option</li>
            <li class="name-select">Your option</li>
            <li class="name-select">Your option</li>
            <li class="name-select">Your option</li>
            <li class="name-select">Your option</li>`;
        document.getElementById("list-select").innerHTML = baseOptions;
    }
    if(optionsCenterSelect.checked === true) {
        document.querySelectorAll(".name-select").forEach(nameSelect => {
            nameSelect.style.display = "block";
            nameSelect.style.textAlign = "center";
        });
    }
    document.querySelectorAll(".name-select").forEach(nameSelect => {
        nameSelect.addEventListener('mouseover', function(){
            nameSelect.style.color = HCSvalue;
        });
        nameSelect.addEventListener('mouseleave', function(){
            nameSelect.style.color = CCSValue;
        });
    });
}


/* Write snippet */
function writeSnippet(type, code) {
    switch(type) {
        case "HTML":
            codeHTML.innerText = code;
            break;
        case "CSS":
            codeCSS.innerText = code;
            break;
        case "JS":
            codeJS.innerText = code;
            break;
    }
}