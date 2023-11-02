FROM node:lts-alpine

# Create app directory

WORKDIR /app

# Install app dependencies
COPY . .
RUN npm install

CMD ["npm", "start"]

# Expose port 8000
EXPOSE 8000