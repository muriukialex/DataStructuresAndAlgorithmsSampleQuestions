const CapitalizeFirstLetter = (sentence) => {
    let strArray = sentence.toLowerCase().split(` `);
    for(let i = 0; i< strArray.length ; i++){
        strArray[i] = strArray[i].substring(0,1).toUpperCase() + strArray[i].substring(1);
    }
    return strArray.join(` `);
}

console.log(CapitalizeFirstLetter("i am a man"));