module.exports = {

  /**
  * Generate random word (function by James Padolsey)
  *
  * @param  {Int} lenght
  * @return {String}
  */
  randomWord: function(length){
    var consonants = 'bcdfghjklmnpqrstvwxyz',
    vowels = 'aeiou',
    rand = function(limit) {
      return Math.floor(Math.random()*limit);
    },
    i, word='', length = parseInt(length,10),
    consonants = consonants.split(''),
    vowels = vowels.split('');
    for (i=0;i<length/2;i++) {
      var randConsonant = consonants[rand(consonants.length)],
      randVowel = vowels[rand(vowels.length)];
      word += (i===0) ? randConsonant.toUpperCase() : randConsonant;
      word += i*2<length-1 ? randVowel : '';
    }
    return word;
  },

  /**
  * Generate random name
  *
  * @return {String}
  */
  randomName: function(){
    return this.randomWord(6) + " " + this.randomWord(6);
  },

  /**
  * Generate random email
  *
  * @return {String}
  */
  randomEmail: function(){
    return this.randomWord(3).toLowerCase() + "@" + this.randomWord(6).toLowerCase() + ".com";
  },

  /**
  * Generate random account/password
  *
  * @return {String}
  */
  randomAccount: function(){
    return this.randomWord(8).toLowerCase();
  },

  randomPassword: function(){
    return this.randomAccount();
  },

}
