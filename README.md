# it2810-webutvikling-h17-prosjekt-4-group20

## Architecture

### Functional requirements
* User login, register and management
* Search for movie given title
* Filter movies by genre, year, popularity, etc
* MovieList for each users - add/remove

### Quality requirements
* Modifiability (loose coupling, high cohesion) 
* Security (token based auth with middleware)
* Usability (Support user initiative and feedback)

### COTS, frameworks and services
* MongoDB - A document-oriented database program.
* Mongoose - A straightforward, schema-based solution to model your data.
* NodeJS - A JavaScript runtime built on Chrome's V8 JavaScript engine.
* Express - Fast, unopinionated, minimalist web framework for Node.js
* Angular 4 - A structural framework for dynamic web apps.
* Bootstrap 4 - A front-end component library.
* themoviedb.org - A user editable database for movies and TV shows.

### Architecture tactics
* Server - Client
* Multitier architecture (mongodb (data) - express (logic) - api (presentation))
* Module architecture (angular4s way)

### Design patterns
* Templates (angular4 views)
* Dependency Injection (angular4 controllers/services)
* Observer (angular4 async handler get/post requests)
* Module pattern (express controller split up)
* Pipes and Filters pattern (search functionality, angular4s pipes)


## Instructions
1. Install mongodb [mac](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) [win](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
2. Install node v8+ and npm v5+
3. Start mongodb: `mongod`
4. (SKIP THAT PART, OPTIONAL) Import movies: `cd ml-latest-small` -> `sh import.sh`
    1. If Windows!: `cd C:\Program Files\MongoDB\Server\3.4\bin`
    2. Copy `importWindows.sh, movies.csv and links.csv` to the `bin` directory.
    3. Open a new termial and run `sh importWindows.sh`
5. Install modules: `cd ..` -> `cd movies` -> `npm install`
6. Start server: `node server` (can change to npm start if wanted)
7. Start client build: `ng serve`
8. Open browser at localhost:4200, server runs at localhost:3000, both steps 6 and 7 must run together in different terminals
9. Run server tests: `npm test`
10. Todo add angular tests.

* If doing changes in server files it need to restart.
* Frontend files is automatic.
* Dropping database: `mongo` -> `use dev` -> `db.dropDatabase()`
