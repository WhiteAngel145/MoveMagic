import Movie from '../models/Movies.js';


export default {
	getAll() {
		return Movie.find();
	},
	getOne(movieId) {
		return Movie.findOne({_id: movieId});
	},
	create(data) {

		const movie = new Movie(data); // create a new instance of the Movie model with the provided data
		return movie.save(); // save the new movie and return the saved data
		
	}
}