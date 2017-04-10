var codeChallenges = require('./code-challenges');

// ===================================================
// ===============  Palindrome Tests =================

describe('Palindrome', function(){
    // function like a container for tests.
    // it statements are the actual tests.
    
    it('tacocat is palindrome', function() {
        var palindrome = new codeChallenges.Palindrome('tacocat');
        expect(palindrome.isPalindrome()).toEqual(true);
    });

    it('bart is not palindrome', function() {
        var palindrome = new codeChallenges.Palindrome('bart');
        expect(palindrome.isPalindrome()).toEqual(false);
    });

    it('Tacocat is palindrome', function() {
        var palindrome = new codeChallenges.Palindrome('Tacocat');
        expect(palindrome.isPalindrome()).toEqual(true);
    });

});

// ===================================================
// ===============  Pig Latin Tests =================

describe('Turn phrase into a PigLatin', function(){
    
    it('has words with lowercase letters', function() {
        var pigLatin = new codeChallenges.PigLatin('porcupines are cute');
        expect(pigLatin.isPigLatin()).toEqual('orcupinespay areyay utecay');
    });

    it('has words with numbers', function() {
        var pigLatin = new codeChallenges.PigLatin('give me 1 apple');
        expect(pigLatin.isPigLatin()).toEqual('ivegay emay 1ay appleyay');
    });

    it('has words with Uppercase Letters', function() {
        var pigLatin = new codeChallenges.PigLatin('Hello Awesome Programmer');
        expect(pigLatin.isPigLatin()).toEqual('elloHay Awesomeyay rogrammerPay');
    });

});

// ===================================================
// ===============  Decode Tests =====================

describe('Decode the following phrase', function(){
    
    it('Decodes a Word', function() {
        var decode = new codeChallenges.Decode('0h1ae2bcy');
        expect(decode.isDecoded()).toEqual('hey');
    });

    it('Decodes a Word with Uppercase Letters', function() {
        var decode = new codeChallenges.Decode('3bkdB0a2jhl2okl1fo2oso0n');
        expect(decode.isDecoded()).toEqual('Balloon');
    });

    it('Decodes a Phrase', function() {
        var decode = new codeChallenges.Decode('0I 2cdh1a3abcv2ace 13 2kld1o2adg1s0.');
        expect(decode.isDecoded()).toEqual('I have 3 dogs.');
    });

});
