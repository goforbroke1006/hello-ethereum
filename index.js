const Web3 = require("web3");

(async function () {
    const networkAddr = process.env.HELLO_ETH_ADDR;
    if (undefined === networkAddr) {
        throw Error('ERROR: HELLO_ETH_ADDR env var required!');
    }

    console.log("network address:", networkAddr)
    const web3 = new Web3(new Web3.providers.HttpProvider(networkAddr));

    console.log("========== ========== ========== ==========");
    const blockNumber = await web3.eth.getBlockNumber();
    console.log("blockNumber:", blockNumber);

    console.log("========== ========== ========== ==========");
    const mining = await web3.eth.isMining();
    console.log("mining:", mining);

    console.log("========== ========== ========== ==========");
    const blockCount = 128;
    const feeHistory = await web3.eth.getFeeHistory(blockCount, blockNumber, []);
    console.log(feeHistory);

    // const address = "????????";
    // web3.eth.getBalance(address).then(wei => {
    //     const balance = web3.utils.fromWei(wei, "ether");
    //     console.log("balance:", balance);
    // })
})();