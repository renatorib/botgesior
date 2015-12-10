var request = require('request');

module.exports = function(site){

  this.site = site;
  this.cookiejar = request.jar();
  var self = this;

  // Request Wrapper

  this.request = function(method, path, data, callback){
    var options = {
      url: self.site + "/" + path,
      form: data,
      method: method.toUpperCase(),
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded'
      },
      jar: self.cookiejar
    };

    return request(options, callback);
  }

  // Methods

  /**
  * Create new account
  *
  * @param  {String} account
  * @param  {String} password
  * @param  {String} email
  * @param  {Function} callback
  */
  this.createAccount = function(account, password, email, callback){
    var path = "?subtopic=createaccount&action=saveaccount";
    var data = {
      reg_name: account,
      reg_email: email,
      reg_password: password,
      reg_password2: password,
      rules: true
    };
    self.request('post', path, data, callback);
  }

  /**
  * Login into account
  *
  * @param  {String} account
  * @param  {String} password
  * @param  {Function} callback
  */
  this.login = function(account, password, callback){
    var path = "?subtopic=accountmanagement";
    var data = {
      account_login: account,
      password_login: password
    };
    self.request('post', path, data, callback);
  }

  /**
  * Logout from account
  *
  * @param  {Function} callback
  */
  this.logout = function(callback){
    var path = "?subtopic=accountmanagement&action=logout";
    self.request('get', path, {}, callback);
  }

  /**
  * Create new character - Must be logged in
  *
  * @param  {String} account
  * @param  {String} password
  * @param  {String} email
  * @param  {Function} callback
  */
  this.createCharacter = function(name, sex, vocation, callback){
    var path = "?subtopic=accountmanagement&action=createcharacter";
    var data = {
      savecharacter: 1,
      newcharname: name,
      newcharsex: sex,
      newcharvocation: vocation
    };
    self.request('post', path, data, callback);
  }

  return this;
}
