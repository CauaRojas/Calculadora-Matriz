"use strict";
class Matriz {
    numbers;
    constructor(numbers) {
        this.numbers = numbers;
    }
}
const buttonRow = document.querySelector('#buttonRow');
const buttonCollumn = document.querySelector('#buttonCollumn');
const leftDiv = document.querySelector('div#left');
const rightDiv = document.querySelector('div#right');
const divs = [leftDiv, rightDiv];
console.log(divs);
const addCollumn = () => {
    divs.forEach((div) => {
        const divChildren = Array.from(document.querySelectorAll('#' + div?.id + ' *'));
        divChildren.forEach((childDiv) => {
            const input = document.createElement('input');
            input.type = 'number';
            childDiv.appendChild(input);
        });
    });
};
const addRow = () => {
    divs.forEach((div) => {
        const divChildren = Array.from(document.querySelectorAll('#' + div?.id + ' *'));
        const newRow = document.createElement('div');
        newRow.className = 'row';
        for (let i = 1; i <= divChildren[0].childElementCount; i++) {
            const newInput = document.createElement('input');
            newInput.type = 'number';
            newRow.appendChild(newInput);
        }
        div?.appendChild(newRow);
    });
};
buttonCollumn.addEventListener('click', addCollumn);
buttonRow.addEventListener('click', addRow);
console.log(addCollumn);
