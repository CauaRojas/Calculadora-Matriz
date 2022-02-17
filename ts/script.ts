class Matriz {
	constructor(public numbers: Array<Array<number>>) {}

	public get rows() {
		let firstRow = this.numbers.length;
		let lastRow: number;
		this.numbers.forEach((row) => {
			if (lastRow === undefined) lastRow = row.length;
			if (lastRow !== row.length)
				throw new Error('Matrix is not retangular');
			lastRow = row.length;
		});

		return firstRow;
	}

	public isValid = true;

	public get collums() {
		let firstCollumn = this.numbers[0].length;
		let lastRow: number;
		this.numbers.forEach((row) => {
			if (lastRow === undefined) lastRow = row.length;
			if (lastRow !== row.length)
				throw new Error('Matrix is not retangular');
			lastRow = row.length;
		});

		return firstCollumn;
	}

	sum(Matriz2: Matriz) {
		let numbers2 = Matriz2.numbers;
		let resultingArray: Array<Array<number>>;
		resultingArray = Array(Array());

		if (this.rows !== Matriz2.rows || this.collums !== Matriz2.collums) {
			throw new Error("The matrices don't have the same length");
		}

		let count1 = 0;

		while (this.numbers.length > count1) {
			let count2 = 0;
			let intermed: Array<number> = Array();
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

	subtract(Matriz2: Matriz) {
		let numbers2 = Matriz2.numbers;
		let resultingArray: Array<Array<number>>;
		resultingArray = Array(Array());

		if (this.rows !== Matriz2.rows || this.collums !== Matriz2.collums) {
			throw new Error("The matrices don't have the same length");
		}

		let count1 = 0;

		while (this.numbers.length > count1) {
			let count2 = 0;
			let intermed: Array<number> = Array();
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
	divide(Matriz2: Matriz) {
		let numbers2 = Matriz2.numbers;
		let resultingArray: Array<Array<number>>;
		resultingArray = Array(Array());

		if (this.rows !== Matriz2.rows || this.collums !== Matriz2.collums) {
			console.log("the array haven't the same length");
			return;
		}

		let count1 = 0;

		while (this.numbers.length > count1) {
			let count2 = 0;
			let intermed: Array<number> = Array();
			while (this.numbers[count1].length > count2) {
				let reverse: Array<Array<number>> = Array();
				let count3 = numbers2.length;
				reverse[count1][count2] = numbers2[count3][count3];
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
	multiplicate(Matriz2: Matriz) {
		let numbers2 = Matriz2.numbers;
		let resultingArray: Array<Array<number>> =  Array(Array());

		const suming = (x: Array<number>) =>{
			let count: number = 0;
			let value: number = 0;
			while(x.length > count){
				value += x[count];
				count++;
			}
			return value;
		}

		if (this.rows !== Matriz2.collums) {
			console.log("The matrices haven't the same length");
			return;
		}

		let count1 = 0;
		let intermed2 = Array();

		while (this.numbers.length > count1) {
			let intermed: Array<number> = Array();
			let count3 = 0;
			while (numbers2[count1].length > count3){
				let count2 = 0;
				while(this.numbers[count1].length > count2){
					intermed[count2] = (this.numbers[count1][count2] * numbers2[count2][count3]);
					count2++;
				}
				
				intermed2[count3] = suming(intermed);
				count3++;
			}
			count1++;
			resultingArray[count1] = intermed2 ;
		}
		return new Matriz(resultingArray);
	}

	fillDiv(div: HTMLDivElement) {
		let row = 0;
		let collum = 0;
		let childrenDiv = [
			...(div.children as unknown as Element[] as HTMLDivElement[]),
		];
		childrenDiv.forEach((rowDiv) => {
			collum = 0;
			const inputs = [
				...(rowDiv.children as unknown as HTMLInputElement[]),
			];
			inputs.forEach((input) => {
				input.value = this.numbers[row][collum].toString();
				collum++;
			});
			row++;
		});
	}
}
//module.exports = Matriz;

let viewIsOperation = true;
let teste = new Matriz([
	[2, 2, 2, 2],
	[2, 2, 2, 2],
]);

const buttonRow = document.querySelector('#buttonRow') as HTMLButtonElement;
const buttonCollumn = document.querySelector(
	'#buttonCollumn'
) as HTMLButtonElement;
const buttonSwitch = document.querySelector('#switch') as HTMLButtonElement;
const buttonCalculate = document.querySelector(
	'#calculate'
) as HTMLButtonElement;
const select = document.querySelector('select');

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
		const divChildren = [...(fullDiv?.children as unknown as Element[])];
		divChildren.forEach((childDiv) => {
			const input = document.createElement('input');
			input.type = 'number';
			childDiv.appendChild(input);
		});
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
		divChildren.forEach((childDiv) => {
			const input = document.createElement('input');
			input.type = 'number';
			childDiv.appendChild(input);
		});
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

const createMatrizFromInput = (div: HTMLDivElement): Matriz => {
	let arrayOfInputs: Array<Array<number>> = [];
	let isValid = true;
	let childrenDiv = [
		...(div.children as unknown as Element[] as HTMLDivElement[]),
	];

	childrenDiv.forEach((rowDiv) => {
		const inputs = [...(rowDiv.children as unknown as HTMLInputElement[])];
		let row: Array<number> = [];
		inputs.forEach((input) => {
			if (input.value === '') isValid = false;
			row.push(parseInt(input.value));
		});
		arrayOfInputs.push(row);
	});

	const newMatriz = new Matriz(arrayOfInputs);
	newMatriz.isValid = isValid;
	return newMatriz;
};

const calculate = () => {
	let newMatriz: Matriz = new Matriz([]);
	const leftMatriz = createMatrizFromInput(leftDiv as HTMLDivElement);
	const rightMatriz = createMatrizFromInput(rightDiv as HTMLDivElement);
	if (!leftMatriz.isValid || !rightMatriz.isValid) {
		alert('Por favor, preencha todos os campos antes de tentar calcular');
		throw new Error('Matrices are not valid');
	}
	switch (select?.value) {
		case '+':
			newMatriz = leftMatriz.sum(rightMatriz);
			break;
		case '-':
			newMatriz = leftMatriz.subtract(rightMatriz);
			break;
		case '*':
			// newMatriz = leftMatriz.multiplicate(rightMatriz) as Matriz;
			break;
		case '/':
			newMatriz = leftMatriz.divide(rightMatriz) as Matriz;
			break;
		default:
			throw new Error('Operation with matrices is invalid');
	}
	newMatriz.fillDiv(leftDiv as HTMLDivElement);
	let childrenDiv = [
		...(rightDiv?.children as unknown as Element[] as HTMLDivElement[]),
	];
	childrenDiv.forEach((rowDiv) => {
		const inputs = [...(rowDiv.children as unknown as HTMLInputElement[])];
		inputs.forEach((input) => {
			input.value = '';
		});
	});
};

buttonCollumn.addEventListener('click', addCollumn);
buttonRow.addEventListener('click', addRow);
console.log(addCollumn);
/* buttonSwitch.addEventListener('click', () => {
	createMatrizFromInput(leftDiv as HTMLDivElement);
}); */
buttonSwitch.addEventListener('click', changeOperation);
buttonCalculate.addEventListener('click', calculate);
console.log(addCollumn);
