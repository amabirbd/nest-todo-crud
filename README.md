<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Installation

`bash
$ npm install
`

## Running the app

`bash

# watch mode

$ npm run start:dev
`

## Endpoints

# Get all todos

$ GET

`http://localhost:3000/todos

`

# Create todo

$ POST

http://localhost:3000/todos

`

body

`{ "title": "some title", "description": "some description" }

`

# Update todo

$ PUT

`http://localhost:3000/todos/:id

`

body

`{ "title": "some title", "description": "some description" }

`

# Delete todo

$ DELETE

`http://localhost:3000/todos/:id

`
