// Modules & Startup
var gesiorapi = require('./lib/gesiorapi');
var gen = new require('./lib/randomgen');
var gesior = new gesiorapi('http://mydarkworld.net/');

// Generate account
var accpass = gen.randomAccount();
var email = gen.randomEmail();

// Process
gesior.createAccount(accpass, accpass, email, function(err, response, body){
  
});
