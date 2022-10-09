// Setup
import {Network, Alchemy} from 'alchemy-sdk';
import {ALCHEMY_API_KEY, ALCHEMY_CONTRACT_ADDR} from './config.js'

const settings = {
    apiKey: ALCHEMY_API_KEY,
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);

// Get the latest block
const latestBlock = await alchemy.core.getBlockNumber();
console.log("latestBlock:", latestBlock);

const balance = await alchemy.core.getBalance(ALCHEMY_CONTRACT_ADDR);
console.log("balance:", balance.toString())

// Get all outbound transfers for a provided address
const tb = await alchemy.core.getTokenBalances(ALCHEMY_CONTRACT_ADDR);
console.log(tb);
