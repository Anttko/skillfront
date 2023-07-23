FROM node:16.20 AS build-stage
WORKDIR /usr/src/app
RUN chown -R node:node /usr/src/app
USER node
COPY --chown=node:node . /usr/src/app
RUN npm ci 
ENV VITE_REACT_APP_BACKEND_URL=https://skillback.fly.dev/
RUN npm run build

FROM nginx:1.22.1
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
