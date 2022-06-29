FROM node:18
WORKDIR /app
ADD . .
RUN npm i
CMD ["npm", "run", "dev"]
