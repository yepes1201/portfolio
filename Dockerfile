# Create the production image
FROM node:18-alpine AS builder

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm i -g pnpm

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN --mount=type=cache,target=/app/.pnpm \
    pnpm set cache /app/.pnpm && \
    pnpm install && ls -la /app

COPY . .

RUN pnpm run build

# Create the production image
FROM caddy:2.8-alpine AS production

COPY --from=builder /app/dist/ /srv/
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80 443