###########################################################
#
# Dockerfile for tfk-opengov-meetings-extract
#
###########################################################

# Setting the base to nodejs 4.6.0
FROM mhart/alpine-node:4.9.1@sha256:c47433a256be0bc5314eb8288ea8fae7466d283d91f1da7ff950f91e43838b33

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update git && rm -rf /var/cache/apk/*

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Startup
ENTRYPOINT node index.js