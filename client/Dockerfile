FROM node:alpine AS builder

WORKDIR /app

COPY package.json .
RUN npm install --omit=dev

COPY . .

FROM node:alpine

WORKDIR /app

COPY --from=builder /app .

CMD ["npm", "run", "dev"]