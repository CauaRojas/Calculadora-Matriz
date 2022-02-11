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
        const divChildren = [...div?.children];
        divChildren.forEach((childDiv) => {
            const input = document.createElement('input');
            input.type = 'number';
            childDiv.appendChild(input);
        });
    });
};
const addRow = () => {
    divs.forEach((div) => {
        const divChildren = [...div?.children];
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
    Matriz.prototype.sum = function (numbers2) {
        var resultingArray;
        resultingArray = Array(Array());
        if (this.numbers.length !== numbers2.length) {
            console.log("the arrays haven't the same length");
            return;
        }
        var i = 0;
        while (this.numbers.length > i) {
            var c = 0;
            var intermed = Array();
            while (this.numbers[i].length >= c) {
                intermed[i] = this.numbers[i][c] + numbers2[i][c];
                c++;
            }
            resultingArray[i] = intermed;
            i++;
        }
        return resultingArray;
    };
    return Matriz;
}());
module.exports = Matriz;
