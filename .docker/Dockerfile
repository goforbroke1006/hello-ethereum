FROM ubuntu:20.04

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y software-properties-common

RUN add-apt-repository -y ppa:ethereum/ethereum
RUN apt-get update
RUN apt-get install -y ethereum
RUN geth version

ENTRYPOINT [ "geth" ]

EXPOSE 8545