require("@nomiclabs/hardhat-waffle");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
// const ALCHEMY_API_KEY = "KEY";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const AURORA_PRIVATE_KEY = "c666b09678718ac35d11d3719103e1147bc4954e16f903c1b34a5d72b172ccdd";

module.exports = {
  solidity: "0.7.3",
  networks: {
    aurora: {
      url: 'https://rpc.testnet.aurora.dev:8545',
      accounts: [`0x${AURORA_PRIVATE_KEY}`]
    },
    ropsten: {
      url: 'https://rpc.testnet.aurora.dev:8545',
      accounts: [`0x${AURORA_PRIVATE_KEY}`]
    }
  }
};
