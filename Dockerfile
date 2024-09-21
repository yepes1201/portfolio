FROM node:18-alpine

RUN mkdir /app

WORKDIR /app

COPY package*.json .

RUN npm i -g pnpm

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN --mount=type=cache,target=/app/.pnpm \
    pnpm set cache /app/.pnpm && \
    pnpm install

COPY . .

EXPOSE 4321

CMD ["pnpm", "run", "dev", "--host"]