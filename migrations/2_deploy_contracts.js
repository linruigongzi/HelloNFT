var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Art = artifacts.require('./Art.sol');
var Token = artifacts.require('./Token.sol')

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Art);
  deployer.deploy(Token);
};
