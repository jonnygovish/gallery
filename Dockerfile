# Define base image
FROM node:14.18.2-alpine

# Define working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json .

# Install dependencies
RUN npm install

# Copy rest of the app to the working directory
COPY . .

# Expose port 8000
EXPOSE 8000

# Define entry point
CMD ["npm", "start"]