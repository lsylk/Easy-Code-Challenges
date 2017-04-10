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

describe('Decode or encode the following string', function(){
    
    it('Decodes a Word starting with a Number', function() {
        var decode = new codeChallenges.Code('0h1ae2bcy');
        expect(decode.decode()).toEqual('hey');
    });

    it('Decodes a Word starting with Letters', function() {
        var decode = new codeChallenges.Code('hnd0h1ae2bcy');
        expect(decode.decode()).toEqual('hey');
    });

    it('Decodes a Word with Uppercase Letters', function() {
        var decode = new codeChallenges.Code('3bkdB0a2jhl2okl1fo2oso0n');
        expect(decode.decode()).toEqual('Balloon');
    });

    it('Decodes a Phrase', function() {
        var decode = new codeChallenges.Code('2mmI0 4lqyqh0a3vubv2ope1n 3dcs31f 3lywd3ceao4rldrg3svus3bjb.');
        expect(decode.decode()).toEqual('I have 3 dogs.');
    });

    it('Encodes a String', function() {
        var encode = new codeChallenges.Code('I have 3 dogs.');
        expect(encode.encode().decode()).toEqual('I have 3 dogs.');
    });


});

// ===================================================
// ===============  Leaping Lemur =====================

describe('How many jumps does the Lemur need to jump', function(){
    
    it('No Branches', function() {
        var lemur = new codeChallenges.LeapingLemur([0]);
        expect(lemur.jumps()).toEqual(0);
    });

    it('Two alive branches', function() {
        var lemur = new codeChallenges.LeapingLemur([0, 0]);
        expect(lemur.jumps()).toEqual(1);
    });

    it('Three alive brances', function() {
        var lemur = new codeChallenges.LeapingLemur([0, 0, 0]);
        expect(lemur.jumps()).toEqual(1);
    });

    it('One Dead Branch', function() {
        var lemur = new codeChallenges.LeapingLemur([0, 1, 0]);
        expect(lemur.jumps()).toEqual(1);
    });

    it('One Dead Branch and Three alive Branches', function() {
        var lemur = new codeChallenges.LeapingLemur([0, 0, 1, 0]);
        expect(lemur.jumps()).toEqual(2);
    });

    it('Two Dead Branches', function() {
        var lemur = new codeChallenges.LeapingLemur([0, 0, 0, 0, 1, 0, 0, 1, 0]);
        expect(lemur.jumps()).toEqual(5);
    });

});