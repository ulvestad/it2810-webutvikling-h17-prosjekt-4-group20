# it2810-webutvikling-h17-prosjekt-4-group20

## Webpage

Link: https://agile-mesa-48209.herokuapp.com/

## Documentation

[Documentation.pdf](doc.pdf)

## Production setup

Required for getting started: `mongodb` running, `node` v8+, `npm` v5+ and `angular-cli`
<br>
Create .env file inside `/movies` folder

``` bash

# Clone repo
git clone https://github.com/IT2810/it2810-webutvikling-h17-prosjekt-4-group20.git

# Navigate to folder
cd it2810-webutvikling-h17-prosjekt-4-group20/movies

# Install dependencies
npm install

# Create dot environment file called ".env" contained
# TMDB_KEY is needed for getting movie data.
  NODE_ENV = dev
  SESSION_SECRET = s3cr3t-sup3r
  TOKEN_SECRET = sup3r-s3cr3t
  TMDB_KEY = <tmdb-api-key>
  DB_HOST = mongodb://localhost/
  DB_PORT = 27017
  DB_NAME = it2810-p4-movies
  PORT = 3000

# Start server
npm start

# Open website
Open browser at localhost:3000

# For testing
npm test
```

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

