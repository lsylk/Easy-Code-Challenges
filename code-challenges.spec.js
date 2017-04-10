var codeChallenges = require('./code-challenges');

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

describe('Turn phrase into a PigLatin', function(){
    
    it('has words with lowercase letters', function() {
        var palindrome = new codeChallenges.PigLatin('porcupines are cute');
        expect(palindrome.isPigLatin()).toEqual('orcupinespay areyay utecay');
    });

    it('has words with numbers', function() {
        var palindrome = new codeChallenges.PigLatin('give me 1 apple');
        expect(palindrome.isPigLatin()).toEqual('ivegay emay 1ay appleyay');
    });

    it('has words with Uppercase Letters', function() {
        var palindrome = new codeChallenges.PigLatin('Hello Awesome Programmer');
        expect(palindrome.isPigLatin()).toEqual('elloHay Awesomeyay rogrammerPay');
    });

});