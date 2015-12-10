// Modules & Startup
var gesiorapi = require('./lib/gesiorapi');
var gen = new require('./lib/randomgen');
var gesior = new gesiorapi('http://mydarkworld.net/');

var i = 1;
var createChars = function(len, each, all){
  var name = gen.randomName();
  gesior.createCharacter(name, 1, 4, function(){
    if(i < len){
      i++;
      createChars(len, each, all);
      each(name);
    } else {
      i = 1;
      all();
    }
  })
}

// Generate account
var accpass = gen.randomAccount();
var email = gen.randomEmail();

// Process
console.log('Initialized.');
gesior.logout(function(){

  gesior.createAccount(accpass, accpass, email, function(err, resp, body){
    console.log('Created: ' + accpass + '/' + accpass);

    gesior.login(accpass, accpass, function(){
      console.log('Logged.')

      createChars(10, function(name){
        console.log('Created char: ' + name);
      }, function(){
        console.log('------------');
        console.log('Done!');
        console.log('------------');
      });

    });

  });

});
