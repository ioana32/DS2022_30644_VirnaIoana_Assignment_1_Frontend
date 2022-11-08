#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/ds2022-30644-virna-ioana-assignment-1-frontend /usr/share/nginx/html

