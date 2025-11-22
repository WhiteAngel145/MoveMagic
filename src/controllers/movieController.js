import { Router } from "express";
import movieServices from "../services/movieServices.js";

const movieController = Router();

movieController.get('/create', (req, res) => {
	
	res.render('create')
});

movieController.post('/create', (req, res) => {
	const movieData = req.body
	movieServices.create(movieData);
	
	res.redirect('/');
});

movieController.get('/:movieId/details', (req, res) => { 
	const movieId = req.params.movieId;
	const movie = movieServices.getOne(movieId);
	
	res.render('details', {movie});
});


export default movieController;
