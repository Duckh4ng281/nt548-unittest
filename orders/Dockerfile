FROM node:alpine AS builder

WORKDIR /app

COPY package.json .

RUN npm install --omit-dev

COPY . .

CMD ["npm", "start"]

FROM node:alpine

COPY --from=builder /app .

CMD ["npm", "start"]