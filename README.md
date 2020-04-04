# covid-diary
Symptom tracker app for COVID-19


## Docker

Docker enables to define your server configs in code, makes pulling up a full stack a single step.

Install [Docker & Docker Compose](https://docs.docker.com/compose/install/).

Run `docker-compose up`.

You see the stdout from all boxes in the output.

Use `http://localhost:4200/` to access the frontend server.

If you want to ssh into the box, run `docker-compose exec node bash`. Exec is the command `node` is the name of the server `bash` is bash.

A typical reason for loggin in into a server is e.g.: installing packages for node/python/ruby etc.
