const ReverseInt = (int) => {
    let str = int.toString().split(``).reverse().join(``);
    return parseInt(str) * Math.sign(int); //use Math.sign which retains sign of the original integer
}

console.log(ReverseInt(983553));