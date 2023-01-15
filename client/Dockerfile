FROM node:16.17.1

# set a directory for the app
WORKDIR /client

# copy package.json
COPY package.json /client

# install dependencies
RUN npm install

# copy all the files to the container
COPY . .

# define the port number the container should expose
EXPOSE 3000

# run the command
CMD ["npm","start"]