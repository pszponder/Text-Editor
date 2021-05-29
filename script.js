/**
 * Add event listener to buttons to:
 *  Change color 
 *  Format the user text
 */ 
let buttonIDList = [
    'bold',
    'italic',
    'underline',
    'justify-left',
    'center',
    'justify-right'
];

for (let i = 0; i < buttonIDList.length; i++) {
    let listener = document.getElementById(buttonIDList[i]);
    listener.addEventListener('click', changeColor);
    listener.addEventListener('click', changeFormatting);
}

// function to change the colors of the buttons when pressed
function changeColor() {
    document.getElementById(this.id).classList.toggle('active-color');
}

// function to change the formatting of the content of the formatted text textarea
function changeFormatting() {

    let textFormatted = document.getElementById('formattedText');
    let lJustify = document.getElementById('justify-left');
    let cJustify = document.getElementById('center');
    let rJustify = document.getElementById('justify-right');

    if (this.id === 'bold') {
        textFormatted.classList.toggle('bold');
    } else if (this.id === 'italic') {
        textFormatted.classList.toggle('italic');
    } else if (this.id === 'underline') {
        textFormatted.classList.toggle('underline');
    } else if (this.id === 'justify-left') {
        textFormatted.classList.toggle('justify-left');
        cJustify.classList.remove('active-color');
        rJustify.classList.remove('active-color');
        textFormatted.classList.remove('justify-center', 'justify-right');
    } else if (this.id === 'center') {
        textFormatted.classList.toggle('justify-center');
        lJustify.classList.remove('active-color');
        rJustify.classList.remove('active-color');
        textFormatted.classList.remove('justify-left', 'justify-right');
    } else {
        textFormatted.classList.toggle('justify-right');
        lJustify.classList.remove('active-color');
        cJustify.classList.remove('active-color');
        textFormatted.classList.remove('justify-left', 'justify-center');
    }
}

/**
 * Add Event Listener to textarea
 * Have event listener execute copyText every time user types in a value
 */

// add event handler to the user input field
document.getElementById('userText').addEventListener('input', copyText);

// function to display user input in the formatted text textarea
function copyText() {
    let unformattedText = document.getElementById('userText').value;
    document.getElementById('formattedText').value = unformattedText;
}