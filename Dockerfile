FROM node:16.20 as build
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build
FROM nginx
EXPOSE 80
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html