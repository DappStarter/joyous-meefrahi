require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy repeat night proud include area bottom genre'; 
let testAccounts = [
"0x62fd9d009bd53f9eab0357e4f45f983e746bd720ad9143dbba14883b99a3b8fc",
"0xfb6e29e3c3e502651a139bfd726c7a8362e36023d35de48adc6024ce0ed00594",
"0xff9653808f136c897a4a1cd2cf01b7a867c22354f1cb657e33e3d1ffcad13028",
"0xa69ae84c063c147f7dd00aa5219001948588e4f8ee107244da775e415697776b",
"0xcff03556f0488c22c5fe3c5c7c7537a7d924dba57a34d2a79b7cdb4610ea7fcc",
"0x7a12c2a38202450295479175e91b40696022767e49023de7d769d9e45496f349",
"0x7259e6084201ec5414824ac13fa0fd2ccc4e3a4601d1f8252bca71d5d9679373",
"0x7ba94c1f08debc0c7a596377b5f3e2f95d9a892adc09867ba1545b3af63c1d5e",
"0x70e465e67926c8b5100e0887e56bab57ec695a5df2f5bf2db15c6a1ae18cb0b5",
"0x2e8e88ca70d3e1109a91edee2bfadfec008afb6ca4ff3b00f6c11d4d5bca1024"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
