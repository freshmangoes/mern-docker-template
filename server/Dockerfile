# Specify node version
FROM node:18.8.0

# Working directory of app
WORKDIR /usr/src/app

# Copying dependency files
COPY package*.json /usr/src/app/

# Install dependencies
RUN npm i

# Copy local files to app folder
COPY . /usr/src/app/

# Expose server port
EXPOSE 3001

CMD npm start