FROM node:16.17.1

# set a directory for the app
WORKDIR /server

# copy package.json
COPY ./package.json /server

# install dependencies
RUN npm install

# copy all the files to the container
COPY . .

# .env
ENV NODE_ENV="development"
ENV PORT="8000"
ENV MONGO_URI="mongodb+srv://abderrazzaqmars:OOz2RiCWfaBAqBnG@syndicat.e16rnd5.mongodb.net/?retryWrites=true&w=majority"
ENV EMAIL_USER="abderrazzaqmars99@gmail.com"
ENV EMAIL_PASS="yswiczamttbarfja"
ENV JWT_SECRET="djnfieufeifueifu,ief,ueoferifermifo"

# define the port number the container should expose
EXPOSE 8000

# run the command
CMD ["npm","start"]