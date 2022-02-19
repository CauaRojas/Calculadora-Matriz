"use strict";
class Matriz {
    numbers;
    constructor(numbers) {
        this.numbers = numbers;
    }
    get rows() {
        let firstRow = this.numbers.length;
        let lastRow;
        this.numbers.forEach((row) => {
            if (lastRow === undefined)
                lastRow = row.length;
            if (lastRow !== row.length)
                throw new Error('Matrix is not retangular');
            lastRow = row.length;
        });
        return firstRow;
    }
    isValid = true;
    get collums() {
        let firstCollumn = this.numbers[0].length;
        let lastRow;
        this.numbers.forEach((row) => {
            if (lastRow === undefined)
                lastRow = row.length;
            if (lastRow !== row.length)
                throw new Error('Matrix is not retangular');
            lastRow = row.length;
        });
        return firstCollumn;
    }
    sum(Matriz2) {
        let numbers2 = Matriz2.numbers;
        let resultingArray;
        resultingArray = Array(Array());
        if (this.rows !== Matriz2.rows || this.collums !== Matriz2.collums) {
            throw new Error("The matrices don't have the same length");
        }
        let count1 = 0;
        while (this.numbers.length > count1) {
            let count2 = 0;
            let intermed = Array();
            while (this.numbers[count1].length > count2) {
                intermed[count2] =
                    this.numbers[count1][count2] + numbers2[count1][count2];
                count2++;
            }
            resultingArray[count1] = intermed;
            count1++;
        }
        return new Matriz(resultingArray);
    }
    subtract(Matriz2) {
        let numbers2 = Matriz2.numbers;
        let resultingArray;
        resultingArray = Array(Array());
        if (this.rows !== Matriz2.rows || this.collums !== Matriz2.collums) {
            throw new Error("The matrices don't have the same length");
        }
        let count1 = 0;
        while (this.numbers.length > count1) {
            let count2 = 0;
            let intermed = Array();
            while (this.numbers[count1].length > count2) {
                intermed[count2] =
                    this.numbers[count1][count2] - numbers2[count1][count2];
                count2++;
            }
            resultingArray[count1] = intermed;
            count1++;
        }
        return new Matriz(resultingArray);
    }
    divide(Matriz2) {
        let numbers2 = Matriz2.numbers;
        let resultingArray;
        resultingArray = Array(Array());
        if (this.rows !== Matriz2.rows || this.collums !== Matriz2.collums) {
            console.log("the array haven't the same length");
            return;
        }
        let count1 = 0;
        let count2 = 0;
        let count3 = numbers2.length;
        let reverse = Array();
        while (this.numbers.length > count1) {
            let intermed = Array();
            while (this.numbers[count1].length > count2) {
                reverse[count1][count2] = numbers2[count3][count2];
                count3--;
                intermed[count2] =
                    this.numbers[count1][count2] * reverse[count1][count2];
                count2++;
            }
            resultingArray[count1] = intermed;
            count1++;
        }
        return new Matriz(resultingArray);
    }
    multiplicate(Matriz2) {
        let numbers2 = Matriz2.numbers;
        let resultingArray = Array();
        let c = 0;
        while (this.rows > c) {
            resultingArray[c] = Array();
            c++;
        }
        const suming = (x) => {
            let count = 0;
            let value = 0;
            while (x.length > count) {
                value += x[count];
                count++;
            }
            return value;
        };
        if (this.rows !== Matriz2.collums) {
            console.log("The matrices haven't the same length");
            return;
        }
        let count1 = 0;
        let intermed2 = Array();
        while (this.numbers.length > count1) {
            let intermed = Array();
            let count3 = 0;
            while (numbers2[count1].length > count3) {
                let count2 = 0;
                while (this.numbers[count1].length > count2) {
                    intermed[count2] = (this.numbers[count1][count2] * numbers2[count2][count3]);
                    count2++;
                }
                resultingArray[count1][count3] = suming(intermed);
                count3++;
            }
            count1++;
        }
        return new Matriz(resultingArray);
    }
    fillDiv(div) {
        let row = 0;
        let collum = 0;
        let childrenDiv = [
            ...div.children,
        ];
        childrenDiv.forEach((rowDiv) => {
            collum = 0;
            const inputs = [
                ...rowDiv.children,
            ];
            inputs.forEach((input) => {
                input.value = this.numbers[row][collum].toString();
                collum++;
            });
            row++;
        });
    }
}
module.exports = Matriz;
// let viewIsOperation = true;
// let teste = new Matriz([
//     [2, 2, 2, 2],
//     [2, 2, 2, 2],
// ]);
// const buttonRow = document.querySelector('#buttonRow');
// const buttonCollumn = document.querySelector('#buttonCollumn');
// const buttonSwitch = document.querySelector('#switch');
// const buttonCalculate = document.querySelector('#calculate');
// const buttonClear = document.querySelector('#clear');
// const select = document.querySelector('select');
// const leftDiv = document.querySelector('div#left');
// const rightDiv = document.querySelector('div#right');
// const fullDiv = document.querySelector('div#full');
// const section = document.querySelector('section');
// const mainDiv = document.querySelector('main');
// const divs = [leftDiv, rightDiv];
// const changeOperation = () => {
//     if (viewIsOperation) {
//         buttonSwitch.textContent = 'Fazer Operações Basicas';
//         section?.classList.remove('invisible');
//         mainDiv?.classList.add('invisible');
//         viewIsOperation = !viewIsOperation;
//     }
//     else if (!viewIsOperation) {
//         buttonSwitch.textContent = 'Calcular Determinante';
//         section?.classList.add('invisible');
//         mainDiv?.classList.remove('invisible');
//         viewIsOperation = !viewIsOperation;
//     }
// };
// const addCollumn = () => {
//     if (viewIsOperation) {
//         divs.forEach((div) => {
//             const divChildren = [...div?.children];
//             divChildren.forEach((childDiv) => {
//                 const input = document.createElement('input');
//                 input.type = 'number';
//                 childDiv.appendChild(input);
//             });
//         });
//     }
//     else if (!viewIsOperation) {
//         const divChildren = [...fullDiv?.children];
//         divChildren.forEach((childDiv) => {
//             const input = document.createElement('input');
//             input.type = 'number';
//             childDiv.appendChild(input);
//         });
//         const newRow = document.createElement('div');
//         newRow.className = 'row';
//         for (let i = 1; i <= divChildren[0].childElementCount; i++) {
//             const newInput = document.createElement('input');
//             newInput.type = 'number';
//             newRow.appendChild(newInput);
//         }
//         fullDiv?.appendChild(newRow);
//     }
// };
// const addRow = () => {
//     if (viewIsOperation) {
//         divs.forEach((div) => {
//             const divChildren = [...div?.children];
//             const newRow = document.createElement('div');
//             newRow.className = 'row';
//             for (let i = 1; i <= divChildren[0].childElementCount; i++) {
//                 const newInput = document.createElement('input');
//                 newInput.type = 'number';
//                 newRow.appendChild(newInput);
//             }
//             div?.appendChild(newRow);
//         });
//     }
//     else if (!viewIsOperation) {
//         const divChildren = [...fullDiv?.children];
//         divChildren.forEach((childDiv) => {
//             const input = document.createElement('input');
//             input.type = 'number';
//             childDiv.appendChild(input);
//         });
//         const newRow = document.createElement('div');
//         newRow.className = 'row';
//         for (let i = 1; i <= divChildren[0].childElementCount; i++) {
//             const newInput = document.createElement('input');
//             newInput.type = 'number';
//             newRow.appendChild(newInput);
//         }
//         fullDiv?.appendChild(newRow);
//     }
// };
// const createMatrizFromInput = (div) => {
//     let arrayOfInputs = [];
//     let isValid = true;
//     let childrenDiv = [
//         ...div.children,
//     ];
//     childrenDiv.forEach((rowDiv) => {
//         const inputs = [...rowDiv.children];
//         let row = [];
//         inputs.forEach((input) => {
//             if (input.value === '')
//                 isValid = false;
//             row.push(parseInt(input.value));
//         });
//         arrayOfInputs.push(row);
//     });
//     const newMatriz = new Matriz(arrayOfInputs);
//     newMatriz.isValid = isValid;
//     return newMatriz;
// };
// const calculate = () => {
//     let newMatriz = new Matriz([]);
//     const leftMatriz = createMatrizFromInput(leftDiv);
//     const rightMatriz = createMatrizFromInput(rightDiv);
//     if (!leftMatriz.isValid || !rightMatriz.isValid) {
//         alert('Por favor, preencha todos os campos antes de tentar calcular');
//         throw new Error('Matrices are not valid');
//     }
//     switch (select?.value) {
//         case '+':
//             newMatriz = leftMatriz.sum(rightMatriz);
//             break;
//         case '-':
//             newMatriz = leftMatriz.subtract(rightMatriz);
//             break;
//         case '*':
//             // newMatriz = leftMatriz.multiplicate(rightMatriz) as Matriz;
//             break;
//         case '/':
//             newMatriz = leftMatriz.divide(rightMatriz);
//             break;
//         default:
//             throw new Error('Operation with matrices is invalid');
//     }
//     newMatriz.fillDiv(leftDiv);
//     let childrenDiv = [
//         ...rightDiv?.children,
//     ];
//     childrenDiv.forEach((rowDiv) => {
//         const inputs = [...rowDiv.children];
//         inputs.forEach((input) => {
//             input.value = '';
//         });
//     });
// };
// buttonClear.addEventListener('click', () => {
//     window.location.reload();
// });
// buttonCollumn.addEventListener('click', addCollumn);
// buttonRow.addEventListener('click', addRow);
// console.log(addCollumn);
// /* buttonSwitch.addEventListener('click', () => {
//     createMatrizFromInput(leftDiv as HTMLDivElement);
// }); */
// buttonSwitch.addEventListener('click', changeOperation);
// buttonCalculate.addEventListener('click', calculate);
// console.log(addCollumn);
