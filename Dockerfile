FROM node:14-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
ARG REACT_APP_SERVER_ADDRESS;
ENV REACT_APP_SERVER_ADDRESS=
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]