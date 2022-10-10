FROM ubuntu:20.04

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y software-properties-common

RUN add-apt-repository -y ppa:ethereum/ethereum
RUN apt-get update
RUN apt-get install -y ethereum
RUN geth version


COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY ./genesis.json /genesis.json

ENV ETH_NETWORK_ID=1999
ENV ETH_ACCOUNT_PASSWORD=ethereum
ENV ETH_HTTP_HOST=0.0.0.0
ENV ETH_HTTP_PORT=8545
ENV ETH_DATA_DIR=/data

ENTRYPOINT [ "/entrypoint.sh" ]

EXPOSE 8545