# Use the official Node.js image as the base image
FROM node:18

# Create a working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the compiled files from the dist directory to the container
COPY dist/ ./dist/
COPY .env .env

# Expose the port that the application will run on
EXPOSE 3000

# Set environment variables (optional)
ENV NODE_ENV=production

# Start the application
CMD ["node", "dist/app.js"]