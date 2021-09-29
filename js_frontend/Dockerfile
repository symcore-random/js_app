# Use an official Python runtime as an image
FROM node:14

# The EXPOSE instruction indicates the ports on which a container 
# will listen for connections
# Since Flask apps listen to port 5000 by default, we expose it
EXPOSE 8009

# Sets the working directory for following COPY and CMD instructions
# Notice we haven’t created a directory by this name - this instruction 
# creates a directory with this name if it doesn’t exist

WORKDIR /app1

# Install any needed packages specified in requirements.txt
COPY package*.json /app1/
RUN npm install

# Run app.py when the container launches
COPY  .  /app1/
CMD ["npm", "start"]