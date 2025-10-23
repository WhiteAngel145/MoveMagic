import Movie from '../models/Movies.js';


export default {
	getAll() {
		return Movie.find();
	}
	
}