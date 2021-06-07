require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remain honey idea clog olympic gate'; 
let testAccounts = [
"0x5a0d3f0ae3a69667222efa84dee8f83f0c6c946fdbd8da3e06e45313b0dff674",
"0x4b0d81dc804bb107a32becddde8939b032f0f282148a6e549232e3935c8b61cf",
"0xe5e39c8d8b7fbf0627e30ed1dddef6375149d3d21d302f1e3dc13b494f560826",
"0x3444be232f184908af248b9c77a0ec65b3cd96adf85743a4be0881f52f1264ec",
"0x416492cf17024377d6796d1eb57175a793a3a85b9dfb143350ed6cf037cc5c64",
"0xadb530c9731c353b0ddccf9ffed7b66ece1c073c50113e84505bef2894621c36",
"0x9f26461795b9e09b98d9f763e864af9901a9e1ffb40d5ff9389709adf7480323",
"0x67f3641b4a5d1158259c685346e229a7fee097cb88a791e94eeffb9c09eddfef",
"0xc0d77d6f0f56564d77676e2dd9c27c6358e63bebe13c0441ddc5072cef790d1c",
"0xb39865480ea068921b0b2d5566ce2c469b56ab5ae9d09ca0edb2c26da39b2ea6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

