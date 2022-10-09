import Web3 from "web3";

import {API_KEY, CONTRACT_ADDR} from "./config.js";


(async function () {
    const networkAddr = `https://eth-goerli.g.alchemy.com/v2/${API_KEY}`

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

    web3.eth.getBalance(CONTRACT_ADDR).then(wei => {
        const balance = web3.utils.fromWei(wei, "ether");
        console.log("balance:", balance);
    })
})();