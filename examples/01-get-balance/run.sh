#!/bin/bash

account=$(geth attach --exec "eth.accounts[0]" http://localhost:8545 | tr -d '"')
echo "Account: ${account}"

balance=$(geth attach --exec "eth.getBalance('${account}')" http://localhost:8545 | tr -d '"')
echo "Balance: ${balance}"
