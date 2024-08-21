FROM node:18

# Set the working directory in the container
WORKDIR /app/front-end

# Install dependencies
COPY package.json .
RUN npm install

# Copy the project files
COPY . .

# Build the app for production
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Serve the build
CMD ["npm", "run", "dev"]
