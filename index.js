//Imprime todos los números del 1 al 1000 por consola, con la salvedad de todos aquellos números que sean múltiplos de 3 que en vez de imprimir el número, se imprimirá Fizz, en los números que sean múltiplos de 5 se imprimirá Buzz, y además en los números que sean múltiplos de 3 y de 5 se imprimirá FizzBuzz.

for (let i=0; i<1000; i++){

        //si múltiplo de 3 y  5 imprime FizzBuzz
        
    if (((i%3) === 0) && ((i%5) === 0)){
        console.log ('FizzBuzz');

        //si múltiplo de 3 imprime Fizz

    } else if ((i%3) === 0){
	    console.log('Fizz');

        //si múltiplo de  imprime Buzz

    }else if ((i%5) === 0){
        console.log('Buzz');

        //Si no, imprime i

    }else {
        console.log(i);
    }
}
