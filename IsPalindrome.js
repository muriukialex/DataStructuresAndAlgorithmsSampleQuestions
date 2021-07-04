const IsPalindrome = (str) =>{
    //Palindrome is a word that has the same character positions both backward and forward
    return str.split(``).reverse().join(``) === str;
}
console.log(IsPalindrome(`madam`));