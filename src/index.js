import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js';

const app = express();
const PORT = 5000;

// Set up Handlebars as the view engine
app.engine('hbs', handlebars.engine({
	extname: 'hbs',
}));

app.set('view engine', 'hbs');

app.set('views', 'src/views');

// Set up middleware to serve static files

app.use(express.static('src/static')); // Setup static files middleware
app.use(express.urlencoded()); // Parse from data forms requests

// Routes

app.use(routes);

// Start the Server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});