#!/bin/bash

#curl -X POST localhost:8545 \
#  -H "Content-Type: application/json" \
#  --data \
#  '
#{
#  "jsonrpc": "2.0",
#  "method": "eth_getBalance",
#  "params": ["0x0ADfCCa4B2a1132F82488546AcA086D7E24EA324", "latest"],
#  "id": 1
#}
#'

geth --goerli http://localhost:8545