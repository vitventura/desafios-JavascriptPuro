//dado um inteiro retorne se um for TRUE (palindromo), e de outra forma FALSE

var isPalindrome = function(x){
    var s = x.toString();
    var t = s.split("").reverse().join("");
    return s === t;
};