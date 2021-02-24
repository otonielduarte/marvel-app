# Marvel App

> This is a SPA created from CRA, with the minimal external libraries; you can see this application in live [here](https://marvel-app-725314.netlify.app)

## Setup

After you clone this project, the requirements to run this application is:

- [`Docker`](https://docs.docker.com/engine/install/ubuntu/) and [`Docker compose`](https://docs.docker.com/compose/install/):

```sh
docker-compose run --rm install
docker-compose up app
```

or can you use without docker, with `npm` or `yarn`:

```sh
npm install
npm start
```

or

```sh
yarn install
yarn start
```

> Important, to run in local mode, you need to get `PUBLIC_KEY` and `PRIVATE_KEY` in [Marvel Developers](https://www.marvel.com/signin?referer=https%3A%2F%2Fdeveloper.marvel.com%2Faccount),  and after rename `.env-example` to `.env` e insert the keys into file.

## API

- [Marvel API](https://developer.marvel.com/);

## Functionalities

- Show characters list (10 characters per page)
- Search characters by start name:
- And you can view small character details

## Tecnologies

- Language: Typescript
- SASS;

## Ideia and ideal

- Use the best practices;
- Clean code;
- Easy legibility;
