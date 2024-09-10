FROM node:lts-alpine AS nickelmattera_build
COPY . /app
WORKDIR /app
RUN npm ci
RUN npm run build

FROM nginx:stable-alpine AS nickelmattera_production
COPY --from=nickelmattera_build /app/dist /usr/share/nginx/html
