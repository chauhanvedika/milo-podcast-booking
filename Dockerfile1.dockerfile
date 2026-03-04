FROM nginx:latest
COPY package*.json ./

WORKDIR /app
RUN npm install
COPY . .
EXPOSE 8080
CMD["node", "index"]
