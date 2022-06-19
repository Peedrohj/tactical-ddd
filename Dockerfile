FROM node:14.17.0-slim

# Install base dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    curl \
    wget \
    openssh-client

# Build arguments
ARG UID

# Configure node user
RUN usermod -u ${UID} node 
USER node
WORKDIR /home/node/app

CMD [ "tail", "-f" , "/dev/null" ]