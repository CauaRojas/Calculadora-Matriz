class Matriz {
	constructor(public numbers: Array<Array<Number>>) {}
}

const buttonRow = document.querySelector('#buttonRow') as HTMLButtonElement;
const buttonCollumn = document.querySelector(
	'#buttonCollumn'
) as HTMLButtonElement;

const leftDiv = document.querySelector('div#left');
const rightDiv = document.querySelector('div#right');
const divs = [leftDiv, rightDiv];
console.log(divs);

const addCollumn = () => {
	divs.forEach((div) => {
		const divChildren = [...(div?.children as unknown as Element[])];
		divChildren.forEach((childDiv) => {
			const input = document.createElement('input');
			input.type = 'number';
			childDiv.appendChild(input);
		});
	});
};
const addRow = () => {
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
};

buttonCollumn.addEventListener('click', addCollumn);
buttonRow.addEventListener('click', addRow);
console.log(addCollumn);
