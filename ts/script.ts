class Matriz {
	constructor(public numbers: Array<Array<Number>>) {}

	sub(numbers2: Array<Array<Number>>){
        if(this.numbers.length !== numbers2.length){
            console.log("the arrays haven't the same length");
            return;
        }

        var i = 0;

        while(this.numbers.length >= i){

			var n = 0;
			while(this.numbers[n].length >= n){

				numbers2[i];
				this.numbers[i];
				n++
			}
		
			i++
        }
		
    }
}
