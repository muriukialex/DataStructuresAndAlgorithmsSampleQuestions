const FizzBuzz = (n) =>{
    for(let i = 1; i <= n; i++){
        if(i%3 === 0 && i%5 === 0){   //checking if i is a multiple of 3 and 5  
            console.assert(i%3 === 0 && i%5 === 0,`FizzBuzz`);
            console.log(`FizzBuzz`);
        }else if(i%3 === 0){    //checking if i is a multiple of 3 alone
            console.assert(i%3===0,`Fizz`);
            console.log(`Fizz`);
        }else if(i%5===0){      //checking if i is a multiple of 5 alone
            console.assert(i%5===0,`Buzz`);
            console.log(`Buzz`);
        }else{      // i is not a multiple of either 3 or 5 
            console.assert(i%3 && i%5 !== 0,i);
            console.log(i);
        }
    }
}

FizzBuzz(15);