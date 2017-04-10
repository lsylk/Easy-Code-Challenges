// ===============  Palindrome =================

var Palindrome = function(word){
    this.word = word.toLowerCase();
};

Palindrome.prototype.isPalindrome = function(){

    return this.word === this.word.split('').reverse().join('');
    
};

// ===============  Pig Latin =================

var PigLatin = function(word){
    this.word = word;
};

PigLatin.prototype.isPigLatin = function(){

    var words = this.word.split(' ');
    var phrase = [];

    for (var i = 0; i < words.length; i++) {
        if (/[^AaEeIiOoUu]/.test(words[i][0])) {
            newWord = words[i].slice(1) + words[i][0] + 'ay';
            phrase.push(newWord);
        } else {
            newWord = words[i] + 'yay';
            phrase.push(newWord);
        }
    }

    return phrase.join(' ');
};





// Key is Palindrome, value is the Constructor/function Palindrome.
module.exports = {
    Palindrome: Palindrome,
    PigLatin: PigLatin
};