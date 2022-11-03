FROM node:18

RUN mkdir -p /home/app

COPY package*.json ./ 

RUN npm install

COPY . /home/app

EXPOSE 3000

CMD ["node", "/home/app/app.js"]
