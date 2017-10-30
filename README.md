# it2810-webutvikling-h17-prosjekt-4-group20
Intro

## Instructions
1. Install mongodb [mac](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) [win](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
2. Install node v8+ and npm v5+
3. Start mongodb: `mongod`
4. Import movies: `cd ml-latest-small` -> `sh import.sh`
    1. If Windows!: `cd C:\Program Files\MongoDB\Server\3.4\bin`
    2. Copy `importWindows.sh, movies.csv and links.csv` to the `bin` directory.
    3. Open a new termial and run `sh importWindows.sh`
5. Install modules: `cd ..` -> `cd movies` -> `npm install`
6. Set environment variables:
    1. `export API_KEY='*replace with api key*'`
7. Start server: `node server` (can change to npm start if wanted)
8. Start client build: `ng serve`
9. Open browser at localhost:4200, server runs at localhost:3000, both steps 6 and 7 must run together in different terminals
10. Run server tests: `npm test`
11. Todo add angular tests.

* If doing changes in server files it need to restart.
* Frontend files is automatic.
* Dropping database: `mongo` -> `use dev` -> `db.dropDatabase()`
