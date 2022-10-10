#!/bin/bash

echo "${ETH_ACCOUNT_PASSWORD}" >/password.txt

if [[ ! -d "${ETH_DATA_DIR}/keystore" ]]; then
  geth account new --password=/password.txt --datadir "${ETH_DATA_DIR}"
  geth init --datadir "${ETH_DATA_DIR}" /genesis.json
fi

geth \
  --password=/password.txt \
  --dev \
  --datadir "${ETH_DATA_DIR}" \
  --networkid "${ETH_NETWORK_ID}" \
  --http \
  --http.addr="${ETH_HTTP_HOST}" \
  --http.port="${ETH_HTTP_PORT}" \
  --http.corsdomain=* \
  --http.api=personal,eth,net,web3
