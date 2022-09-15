const Mytoken= artifacts.require('./Mytoken.sol')

module.exports = async function(deployer) {
  await deployer.deploy(Mytoken)
}
