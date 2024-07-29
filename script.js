function createDivWithButtons(buttonLabels) {
    const div = document.createElement('div');
    div.className = 'btn';

    buttonLabels.forEach(label => {
        const button = document.createElement('button');
        button.textContent = label;
        button.value = label;
        div.appendChild(button);
    });
    return div;
}
const buttonSets = [
    ['C', 'CE', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['00', '0', '.', '=']
];
const container = document.querySelector('.container');
buttonSets.forEach(buttonLabels => {
    const div = createDivWithButtons(buttonLabels);
    container.appendChild(div);
});
console.log(container);
let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener(`click`, (e) => {
        if (e.target.innerHTML == '=') { //whenever the equal button is press value shown input tag
            string = eval(string); //eval: eavluate is a inbuilt function which is automatically perform clculations.
            input.value = string;
        } else if (e.target.innerHTML == 'C') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'CE') {
            string = string.substring(0, string.length - 1); // using substring which is exclude value.
            input.value = string;
        } else {
            string += e.target.innerHTML; //whenever the no is enter is adding on string
            input.value = string
        }
    })
})