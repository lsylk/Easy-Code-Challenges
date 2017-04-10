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

// describe('Leaping Lemur', function(){
    
//     it('No Branches', function() {
//         var lemur = new codeChallenges.LeapingLemur([0]);
//         expect(lemur.jumps()).toEqual(0);
//     });

//     it('Two alive branches', function() {
//         var lemur = new codeChallenges.LeapingLemur([0, 0]);
//         expect(lemur.jumps()).toEqual(1);
//     });

//     it('Three alive brances', function() {
//         var lemur = new codeChallenges.LeapingLemur([0, 0, 0]);
//         expect(lemur.jumps()).toEqual(1);
//     });

//     it('One Dead Branch', function() {
//         var lemur = new codeChallenges.LeapingLemur([0, 1, 0]);
//         expect(lemur.jumps()).toEqual(1);
//     });

//     it('One Dead Branch and Three alive Branches', function() {
//         var lemur = new codeChallenges.LeapingLemur([0, 0, 1, 0]);
//         expect(lemur.jumps()).toEqual(2);
//     });

//     it('Two Dead Branches', function() {
//         var lemur = new codeChallenges.LeapingLemur([0, 0, 0, 0, 1, 0, 0, 1, 0]);
//         expect(lemur.jumps()).toEqual(5);
//     });

// });

// ===================================================
// ===================  Pangram ======================

describe('Pangram', function(){
    
    it('It is Pangram including Symbols', function() {
        var pangram = new codeChallenges.Pangram('The quick brown fox jumps over the lazy dog!');
        expect(pangram.isPangram()).toEqual(true);
    });

    it('It is Pangram with Uppercase Letters', function() {
        var pangram = new codeChallenges.Pangram('"\"Five quacking Zephyrs jolt my wax bed.\""');
        expect(pangram.isPangram()).toEqual(true);
    });

    it('It is Pangram with Lowercase Letters', function() {
        var pangram = new codeChallenges.Pangram('the 1 quick brown fox jumps over the 2 lazy dogs');
        expect(pangram.isPangram()).toEqual(true);
    });

    it('Missing Letters replaced by Numbers', function() {
    var pangram = new codeChallenges.Pangram("7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog");
    expect(pangram.isPangram()).toEqual(false);
    });

    it("Another missing Character 'x'", function() {
    var pangram = new codeChallenges.Pangram("the quick brown fish jumps over the lazy dog");
    expect(pangram.isPangram()).toEqual(false);
    });

    it("Missing Letters", function() {
    var pangram = new codeChallenges.Pangram("I like cats, but not mice");
    expect(pangram.isPangram()).toEqual(false);
    });

});

// // ===================================================
// // ====================  Split =======================

describe('Split', function(){
    
    it('Split by " " ', function() {
        var phrase = new codeChallenges.SplitString('I love balloonicorn', ' ');
        expect(phrase.split()).toEqual(['i', 'love', 'balloonicorn']);
    });

    it('Split by "that" ', function() {
        var phrase = new codeChallenges.SplitString('that is which is that which is that', ' that ');
        expect(phrase.split()).toEqual(['that is which is', 'which is that']);
    });

    it('Split by " " ', function() {
        var phrase = new codeChallenges.SplitString('that is which is that which is that', 'that');
        expect(phrase.split()).toEqual(['', ' is which is ', ' which is ', '']);
    });

    it('Split by " " ', function() {
        var phrase = new codeChallenges.SplitString('hello world', 'nope');
        expect(phrase.split()).toEqual(['hello world']);
    });
});

