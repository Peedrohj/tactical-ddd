FROM node:14.17.0-slim

# Build arguments
ARG UID

# Configure node user
RUN usermod -u ${UID} node 
USER node
WORKDIR /home/node/app

CMD [ "tail", "-f" , "/dev/null" ]