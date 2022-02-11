class Matriz {
	constructor(public numbers: Array<Array<number>>) {}

    sum(numbers2: Array<Array<number>>){
        var resultingArray: Array<Array<number>>;
        resultingArray = Array(Array());
        
        if(this.numbers.length !== numbers2.length){
            console.log("the arrays haven't the same length");
            return;
        }
        
        var i = 0;

        while(this.numbers.length > i){
            var c = 0;
            var intermed:Array<number> = Array();
            while(this.numbers[i].length >= c){
                intermed[i]= this.numbers[i][c] + numbers2[i][c];
                c++;
            }
            resultingArray[i] = intermed;
            i++;
        }
        return resultingArray;
    }
}
module.exports = Matriz;

let viewIsOperation = true;

const buttonRow = document.querySelector('#buttonRow') as HTMLButtonElement;
const buttonCollumn = document.querySelector(
	'#buttonCollumn'
) as HTMLButtonElement;
const buttonSwitch = document.querySelector('#switch') as HTMLButtonElement;
const buttonCalculate = document.querySelector(
	'#calculate'
) as HTMLButtonElement;

const leftDiv = document.querySelector('div#left');
const rightDiv = document.querySelector('div#right');
const fullDiv = document.querySelector('div#full') as HTMLDivElement;
const section = document.querySelector('section');
const mainDiv = document.querySelector('main');
const divs = [leftDiv, rightDiv];

const changeOperation = () => {
	if (viewIsOperation) {
		buttonSwitch.textContent = 'Fazer Operações Basicas';
		section?.classList.remove('invisible');
		mainDiv?.classList.add('invisible');
		viewIsOperation = !viewIsOperation;
	} else if (!viewIsOperation) {
		buttonSwitch.textContent = 'Calcular Determinante';
		section?.classList.add('invisible');
		mainDiv?.classList.remove('invisible');
		viewIsOperation = !viewIsOperation;
	}
};

const addCollumn = () => {
	if (viewIsOperation) {
		divs.forEach((div) => {
			const divChildren = [...(div?.children as unknown as Element[])];
			divChildren.forEach((childDiv) => {
				const input = document.createElement('input');
				input.type = 'number';
				childDiv.appendChild(input);
			});
		});
	} else if (!viewIsOperation) {
		console.log(fullDiv);

		const divChildren = [...(fullDiv?.children as unknown as Element[])];
		divChildren.forEach((childDiv) => {
			const input = document.createElement('input');
			input.type = 'number';
			childDiv.appendChild(input);
		});
	}
};
const addRow = () => {
	if (viewIsOperation) {
		divs.forEach((div) => {
			const divChildren = [...(div?.children as unknown as Element[])];
			const newRow = document.createElement('div');
			newRow.className = 'row';
			for (let i = 1; i <= divChildren[0].childElementCount; i++) {
				const newInput = document.createElement('input');
				newInput.type = 'number';
				newRow.appendChild(newInput);
			}
			div?.appendChild(newRow);
		});
	} else if (!viewIsOperation) {
		const divChildren = [...(fullDiv?.children as unknown as Element[])];
		const newRow = document.createElement('div');
		newRow.className = 'row';
		for (let i = 1; i <= divChildren[0].childElementCount; i++) {
			const newInput = document.createElement('input');
			newInput.type = 'number';
			newRow.appendChild(newInput);
		}
		fullDiv?.appendChild(newRow);
	}
};

buttonCollumn.addEventListener('click', addCollumn);
buttonRow.addEventListener('click', addRow);
console.log(addCollumn);
buttonSwitch.addEventListener('click', changeOperation);
console.log(addCollumn);