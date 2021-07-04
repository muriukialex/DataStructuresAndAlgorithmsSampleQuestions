const MaxCharacterInString = (str) =>{
    let charObject = {};
    let maxChar = ``;
    let maxNum = 0;
    str.split(``).map(letter =>{
        if(charObject[letter]){
            charObject[letter]++;
        }else{
            charObject[letter] = 1;
        }
    })
    for(let char in charObject){
        if(charObject[char] > maxNum){
            maxNum = charObject[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(MaxCharacterInString(`altrtrtrtrtrtrtrtttttttepppp`));