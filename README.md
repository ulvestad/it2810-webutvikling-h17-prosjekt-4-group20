# it2810-webutvikling-h17-prosjekt-4-group20

## Webpage

Link to webpage: http://UPDATETHIS.no


## Instructions

1. Install mongodb [mac](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) [win](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
2. Install node v8+ and npm v5+
3. Start mongodb: `mongod`
4. Install modules: `cd ..` -> `cd movies` -> `npm install`
5. Start server: `node server` (can change to npm start if wanted)
6. Start client build: `ng serve`
7. Open browser at localhost:4200, server runs at localhost:3000, both steps 5 and 6 must run together in different terminals
8. Run server and angular tests: `npm test`

<br>

* If doing changes in server files it need to restart.
* Frontend files is automatic.
* Dropping database: `mongo` -> `use dev` -> `db.dropDatabase()`

<br>

## Screenshots

Homepage            |  Search result          |  Userpage
:-------------------------:|:-------------------------:|:-------------------------:
<img src="http://folk.ntnu.no/simenul/screen/front.png" width="400" alt="homepage">  |  <img src="http://folk.ntnu.no/simenul/screen/search.png" width="400" alt="search"> | <img src="http://folk.ntnu.no/simenul/screen/userpage.png" width="400" alt="userpage">

<br>


## Architecture

### Functional requirements
* User login, register and management (token based session)
* Search for movie given title (Autocomplete suggestions in search field, lazy load of content)
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

### Data Models
* User (userid, email, passwordhash, movielist)
* Movie (title, overview, popularity, poster_path, backdrop_path, genre_ids, release_date, runtime, tagline, vote_average, vote_count, tag)

