# Dockerfile for React

# Build react 
FROM node:19

# Working directory be app
WORKDIR /usr/src/app


COPY package*.json ./
COPY package-lock*.json ./
###  Installing dependencies

RUN npm install

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]
