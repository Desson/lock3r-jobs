FROM node:12.19.0

RUN apt-get update && \
    apt-get install -y dos2unix

COPY . /locker
WORKDIR /locker

RUN dos2unix ./dockerentry
RUN npm i

ENTRYPOINT ["bash", "dockerentry"]
