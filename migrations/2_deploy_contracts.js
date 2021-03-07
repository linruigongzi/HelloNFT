var Art = artifacts.require('./Art.sol');
var Token = artifacts.require('./Token.sol')

module.exports = function(deployer) {
  deployer.deploy(Token, "Hello NFC", "HNC", "1000000000000000000000000").then(function() {
    deployer.deploy(Art, Token.address).then(function(){
      Art.registe("0x1111111111111111111111111111111111111111", 1, 10000); 
      Art.registe("0x2222222222222222222222222222222222222222", 1, 10000);
      Art.registe("0x3333333333333333333333333333333333333333", 1, 10000); 
    });
  });
};