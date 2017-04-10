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

// ===============  Decode =================

var Decode = function(code) {
    this.code = code;
};

Decode.prototype.isDecoded = function(){

    var message = '';

    for (var i=0; i < this.code.length; i++){
        if (/[0-9]/.test(this.code[i])) {
            message += this.code[i + 1 + parseInt(this.code[i])];
        }
    }

    return message;
};


// Key is Palindrome, value is the Constructor/function Palindrome.
module.exports = {
    Palindrome: Palindrome,
    PigLatin: PigLatin,
    Decode: Decode
};