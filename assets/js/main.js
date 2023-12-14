const stringBefore = document.querySelector("#cutString_pre");
const stringAfter = document.querySelector("#cutString_after");
const strintError = document.querySelector("#error");

const selection = document.getElementsByName("options");


const getQuery = () => {
    let selectedValue = null;
    console.log(selection);

    selection.forEach(radio => {
        radio.checked
            ? (
                selectedValue = radio.value,
                console.log(selectedValue)
            )
            : null;
    });

    return selectedValue;
}

const preString = (string, cutter) => {
    
    console.log(string, cutter);
    let position = null;

    string.includes(cutter)
        ? (
            console.log("yes"),
            position = string.indexOf(cutter),
            stringBefore.innerHTML = string.slice(0, position),
            stringAfter.innerHTML = string.slice(position, string.length)
            )
        :   error.innerHTML = "Das Trennzeichen ist nicht in der Zeichenkette enthalten! Bitte wählen Sie ein anderes Trennzeichen.";
}

const afterString = (string,cutter) => {
    console.log(string, cutter);
    let position = null;

    string.includes(cutter)
        ? (
            position = string.indexOf(cutter),
            stringBefore.innerHTML = string.slice(0, position + 1),
            stringAfter.innerHTML = string.slice(position + 1, string.length)
            )
        :   error.innerHTML = "Das Trennzeichen ist nicht in der Zeichenkette enthalten! Bitte wählen Sie ein anderes Trennzeichen.";
}

const getSwitch = () => {
    
    let string = document.querySelector("#inputstring").value;
    let cutter = document.querySelector("#cutstring").value;

    console.log("Aufruf getSwitch()", string, cutter, getOption);


    switch(getQuery()) {
        case "pre_string":
            console.log("Pre_String ausgewählt");
            preString(string, cutter);
            break;
        case "after_string":
            console.log("After_String ausgewählt");
            afterString(string, cutter);
            break;
    }
}

// * give functions to onsubmit

function cuttString() {
    // getQuery();
    getSwitch();
}