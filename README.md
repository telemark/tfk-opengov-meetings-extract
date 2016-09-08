[![Build Status](https://travis-ci.org/telemark/tfk-opengov-meetings-extract.svg?branch=master)](https://travis-ci.org/telemark/tfk-opengov-meetings-extract)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-opengov-meetings-extract
Modul for å hente ut alle møter og linker til dokumenter fra opengov. 
Lager jsonfiler med resultatet.

# Bruk CLI

Sett opp nødvendige parameter i [config-filen](config/index.js) eller environment

Avslutt med å kjøre modulen fra kommandolinjen

```sh
$ npm start
```

# Bruk Docker
Bygg

```
$ docker build -t tfk-opengov-meetings-extract .
```

kjør containeren

```
$ docker run --env-file=docker.env --rm -v data/meetings:/src/meetings tfk-opengov-meetings-extract 
```

Eller bruk det ferdig bygde imaget fra [dockerhub](https://hub.docker.com/r/telemark/tfk-opengov-meetings-extract)

```
$ docker run --env-file=docker.env --rm -v data/meetings:/src/meetings telemark/tfk-opengov-meetings-extract 
```

Dette vil spinne igang en container. Gjøre jobben og slette containeren.

# Lisens
[MIT](LICENSE)
