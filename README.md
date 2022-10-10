# hello-ethereum

Up private blockchain for experiments.

Based on [article](https://habr.com/ru/post/341466/) by m1rko.

### Terms

* account - ??? Is it the same as node? Have no idea.

### Usage

```shell
# setup local env with private blockchain
docker-compose up -d
sleep 5

# extract secret json file to host machine
(docker-compose exec test-net find "/data/keystore/" -name "UTC--*" -exec sh -c "cat {}" \;) > secret.json
```

Go to chrome, install MetaMask extension, 
import account from secret.json and with password "ethereum" (default for current docker-compose build).
It can take a couple of minutes.

Run Remix daemon to allow Remix web IDE access to your files:

```shell
remixd
```

Go to [Remix online](https://remix.ethereum.org/) and choose local workspace.

Try to create new contract.

??? How to run/use/apply the new contract?

#### Basic example

```shell
bash ./examples/01-get-balance/run.sh
```

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

* https://docs.alchemy.com/
* https://www.youtube.com/watch?v=veBu03A6ptw&list=PLMj8NvODurfEYLsuiClgikZBGDfhwdcXF&ab_channel=Alchemy
* https://docs.alchemy.com/docs
* https://university.alchemy.com/

* https://goerli.net/
* https://goerli.etherscan.io/
* https://dashboard.alchemy.com/composer
