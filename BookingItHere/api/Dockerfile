FROM node:18-bullseye

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y locales && locale -a
RUN locale-gen pt_PT.UTF-8 && locale-gen en_GB.UTF-8 && locale-gen es_ES.UTF-8 && dpkg-reconfigure locales

# Linux Timezone
RUN ln -fs /usr/share/zoneinfo/Europe/Lisbon /etc/localtime && dpkg-reconfigure -f noninteractive tzdata

COPY package*.json ./

RUN npm install

COPY .env .env
COPY bin bin
COPY src src
COPY __tests__ __tests__
COPY .sequelizerc .sequelizerc
COPY jest.config.js jest.config.js

EXPOSE 3000
CMD [ "npm", "run", "dev" ]
