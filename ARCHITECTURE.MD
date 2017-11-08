## Architecture
### Functional requirements
* User login, register and management
* Search for movie given title
* Filter movies by genre, year, popularity, etc
* MovieList for each users - add/remove

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

















