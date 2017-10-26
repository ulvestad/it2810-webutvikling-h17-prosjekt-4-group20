mongoimport -d dev -c movies --type csv --file movies.csv --fields movieId,title,genres
mongoimport -d dev -c links --type csv --file links.csv --fields movieId,imdbId,tmdbId

mongo && use movies