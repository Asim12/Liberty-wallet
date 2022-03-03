var express = require('express');
var router = express.Router();
const Web3 = require('web3');

router.post('/sendTrasection', async(req, res) => {

    // mainnet
    // const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

    // testnet
    const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');

    web3.eth.accounts.create([entropy]);


    // web3.eth.accounts.create();
    // {
    // address: '0x926605D0729a968266f1BB299d8Df0471C4F5367',
    // privateKey: '0x6b4618539d95f205f33e916e89404b301dde545c0c4acc181fd0c0b42708bad3',
    // signTransaction: [Function: signTransaction],
    // sign: [Function: sign],
    // encrypt: [Function: encrypt]
    // }


    //recover a wallet
    // const account = web3.eth.accounts.privateKeyToAccount("0xe500f5754d761d74c3eb6c2566f4c568b81379bf5ce9c1ecd475d40efe23c577")

    //check balance
    // web3.eth.getBalance(holder).then(console.log);

    
    // // Make a transaction using the promise
    web3.eth.sendTransaction({
        from: holder,
        to: '0x0B75fbeB0BC7CC0e9F9880f78a245046eCBDBB0D',
        value: '1000000000000000000',
        gas: 5000000,
        gasPrice: 18e9,
    }, function(err, transactionHash) {
        if (err) {
        console.log(err);
        } else {
        console.log(transactionHash);
        }
    });
})




module.exports = router;