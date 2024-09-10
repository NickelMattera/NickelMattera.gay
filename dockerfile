FROM node:lts-alpine AS nickelmattera_build

WORKDIR /app
COPY . /app

RUN npm ci
RUN npm run build


FROM nginx:stable-alpine AS nickelmattera_production

COPY scripts/nginx.config /etc/nginx/conf.d/default.conf
COPY --from=nickelmattera_build /app/dist /usr/share/nginx/html
