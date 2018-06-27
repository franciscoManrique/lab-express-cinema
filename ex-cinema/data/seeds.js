require('../configs/db.config');

const Movie = require('../models/movie.model');
const movies = require('../data/movies.data');

Movie.create(movies)
.then(movie => console.log(`${movies.length} movies inserted`))
.catch(err => next(err));

