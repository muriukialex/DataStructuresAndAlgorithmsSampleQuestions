const ReverseString = (str) => {
    //return str.split(``).reverse().join(``); using the reverse function

    // let strArray = str.split(``);
    // let reversedString = ``;
    // for(let i= 0;i < strArray.length; i++){
    //     reversedString = strArray[i] + reversedString;
    // }

    let strArray = str.split(``);
    let reversedString = ``;
    for(let i= strArray.length - 1; i >= 0; i--){
        reversedString = reversedString + strArray[i];
    }

    return reversedString;
}

console.log(ReverseString(`kenyatta`));