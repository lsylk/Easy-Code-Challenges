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

var Code = function(code) {
    this.code = code;
};

Code.prototype.decode = function(){

    var message = '';

    for (var i=0; i < this.code.length; ){
        if (/[0-9]/.test(this.code[i])) {
            var spacing = parseInt(this.code[i]);
            message += this.code[i + 1 + spacing];
            i += spacing + 2;
        } else {
            i++;
        }
    }

    return message;
};

Code.prototype.encode = function(){

    var message = '';

    for (var i = 0; i < this.code.length; i++) {
        var k = Math.floor(Math.random() * 5);
        message += k;

        for (var j = 0; j < k; j++) {
            var spacingLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
            message += spacingLetter;
        }

        message += this.code[i];
    }

    this.code = message;
    //console.log(this.code);
    return this;


};

// ===============  Leaping Lemur =================
// A lemur wants to jump across a span in the forest on branches. She can jump 1 or 2 branches at a time. Unfortunately, some of the branches are on dead trees, and she can’t use those branches to jump.
// 0 represents alive branches and 1 represents dead branches. The lemur starts on the first branch in the list (index 0) and is finished when she reaches the last branch in the list.

// Write a function that returns the number of jumps needed:

var LeapingLemur = function(branches){
    this.branches = branches;
};

LeapingLemur.prototype.jumps = function(){

    totalJumps = 0;

    for (var i = 0; i < this.branches.length; ){

        if (this.branches[i + 2] === 0) {
            totalJumps += 1;
            i += 2;

        } else if (this.branches[i + 1] === 0) {
            totalJumps += 1;
            i += 1;
        }
    }

    return totalJumps;
};



// Key is Palindrome, value is the Constructor/function Palindrome.
module.exports = {
    Palindrome: Palindrome,
    PigLatin: PigLatin,
    Code: Code,
    LeapingLemur: LeapingLemur
};