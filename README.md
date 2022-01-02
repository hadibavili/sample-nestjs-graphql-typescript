# Nest.js-GraphQL-Typescript

Simple Graphql example with Node.js using Express (Nestjs), Apollo and Mongoose in TypeScript

## Technologies Used
`GraphQL`,`Nest.js`,`Mongoose`,`typescript`,`Apollo-server`

## Installation

```bash
$ npm install
```
Create `.env` file in root directory set `MONGO_CONNECTION` varable to connect DB.
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```
## Client test GraphQL
`http://localhost:3000/GraphQL`

## Project structure
Resolver: For handle grapql query and call services

Service: Handle logic of queries and db integration

Model: Feild of GraplQL queries for each module

Module: provides metadata that Nest makes use of to organize the application structure

Schema: Database field for mongoose schema

Dto: Acceptable field for mutation GraphQL query (Validation)
