const WETH = artifacts.require('WETH');
const Router = artifacts.require('UniswapV2Router02');

module.exports = async function (deployer, network) {
  let weth;
  const factoryAddress = '0x24EcA1d580E2239fE9Cc484db3Af7896A55e5A88';

  if (network === 'mainnet') {
    weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
  } else {
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }

  await deployer.deploy(Router, factoryAddress, weth.address);
};
