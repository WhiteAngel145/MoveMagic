import { v4 as uuid } from 'uuid';

const movies = [
    {
      _id: "a3682672-0ee4-1284-8759-35ee253329zv",
      title: "Jungle Cuise",
      genre: "Adventure",
      description: "Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff, to guide them through the serpentine Amazon River in La Quila, his swift wooden boat. Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable green maze, searching for something that cannot be found, a centuries-old curse and the ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans.",
      imageUrl: "/img/jungle-cruise.jpeg",
      director: "Jaume Collet-Serra",
      year: "2021",
      rating: 6.6,
      category: "movie"
    },
    {      
      _id: "z2682672-0ee4-1534-8759-35ee253329ty",
      title: "Man of Steel",
      genre: "Superhero",
      description: "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade Earth.",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_FMjpg_UX1000_.jpg",
      director: "Zack Snyder",
      year: "2013",
      rating: 7.1,
      category: "movie"
    },
    {
      _id: "81313c94-08e0-40bf-85bc-1e7cdeebbef9",
      title: "Avengers: Endgame",
      category: "movie",
      genre: "Superhero",
      director: "Anthony Russo",
      year: "2019",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      rating: 8.4,
      description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe."
    }
  ]

export default class Movie {
  constructor(data) {
    Object.assign(this, data); // assign all properties from data to the instance
    this._id = uuid(); // generate a unique identifier for the movie

  }

	static find(filter = {}){
    let result = movies.slice(); // create a shallow copy of the movies array

        if (filter._id) {
      result = movies.filter(movie => movie._id === filter._id); // filter movies by _id if provided
    }

    return result; // return the filtered list of movies
	}

  get id() {
    return this._id; // return the unique identifier of the movie
  }

  static findOne(filter = {}) { // static method to find a single movie based on a filter object
    let result = movies[0]; // start with the first movie in the array

    if (filter._id) {
      result = movies.find(movie => movie._id === filter._id); // filter movies by _id if provided
    }

    return result; // return the first matching movie or null if none found
  }

  save() {
    movies.push(this); // add the new movie to the movies array

    return this; // return the newly created movie data
  }

}