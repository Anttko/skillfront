FROM node:16.20
WORKDIR /usr/src/app
COPY . .
ENV VITE_REACT_APP_BACKEND_URL=http://localhost:8080/api/
RUN npm install
CMD ["npm", "run", "dev"]