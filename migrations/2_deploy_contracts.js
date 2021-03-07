var Art = artifacts.require('./Art.sol');
var Token = artifacts.require('./Token.sol')

module.exports = function(deployer) {

  // var token, art;
  // deployer.then(function() {
  //   // Create a new version of Token
  //   return Token.new("Hello NFC", "HNC", "1000000000000000000000000");
  // }).then(function(instance) {
  //   token = instance;
  //   // Get the deployed instance of Art
  //   return Art.deployed(token.address);
  // }).then(function(instance) {
  //   art = instance;
  //   // Set the new instance of A's address on B via B's setA() function.
  //   Art.registe("0x1111111111111111111111111111111111111111", 1, 10000); 
  //   Art.registe("0x2222222222222222222222222222222222222222", 2, 10000);
  //   Art.registe("0x3333333333333333333333333333333333333333", 3, 10000); 
  // });
  deployer.deploy(Token, "Hello NFC", "HNC", "1000000000000000000000000").then(function() {
    // return deployer.deploy(Art, Token.address);
    return deployer.deploy(Art, Token.address).then(function(instance){
      instance.registe("0x1111111111111111111111111111111111111111", 1, 10000); 
      instance.registe("0x2222222222222222222222222222222222222222", 2, 10000);
      instance.registe("0x3333333333333333333333333333333333333333", 3, 10000); 
    });
  });
};