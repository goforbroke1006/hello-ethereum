# hello-ethereum

Motivation: create 2 wallet in test-net, send money between them.

Problem: have no idea what steps required to do it.

### Samples

1. Clone configs
    
   ```shell
   cp examples/02-web3/config.dist.js examples/02-web3/config.js
   cp examples/03-alchemy/config.dist.js examples/03-alchemy/config.js
   ```

2. Visit https://goerlifaucet.com/
3. Login to it
4. Go to main dashboard https://dashboard.alchemy.com/
5. Find in list "Demo App" and click "VIEW KEY"
6. Copy api-key and wallet-key from Javascript code and paste to config.js files
7. Copy your wallet code and paste here https://goerlifaucet.com/ and press "Send me ETH"
8. Run samples

   ```shell
   node examples/02-web3/index.js
   node examples/03-alchemy/index.js
   ```

### Useful links

* https://goerli.net/
* https://goerli.etherscan.io/
* https://dashboard.alchemy.com/composer
