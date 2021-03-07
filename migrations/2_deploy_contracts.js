var Art = artifacts.require('./Art.sol');
var Token = artifacts.require('./Token.sol')

module.exports = function(deployer) {

  deployer.deploy(Token, "Hello NFC", "HNC", "1000000000000000000000000").then(function() {
    // return deployer.deploy(Art, Token.address);
    return deployer.deploy(Art, Token.address).then(function(instance){
      instance.registe("0x1111111111111111111111111111111111111111", 1, 10000); 
      instance.registe("0x2222222222222222222222222222222222222222", 2, 10000);
      instance.registe("0x3333333333333333333333333333333333333333", 3, 10000); 
      instance.registe("0x4444444444444444444444444444444444444444", 4, 10000); 
      instance.registe("0x5555555555555555555555555555555555555555", 5, 10000); 
      instance.registe("0x6666666666666666666666666666666666666666", 6, 10000); 
      instance.registe("0x7777777777777777777777777777777777777777", 7, 10000); 
      instance.registe("0x8888888888888888888888888888888888888888", 8, 10000); 
      instance.registe("0x9999999999999999999999999999999999999999", 9, 10000); 
      instance.registe("0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 10, 10000); 
      instance.registe("0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", 11, 10000); 
    });
  });
};
