import express from 'express';
import handlebars from 'express-handlebars';

const app = express();
const PORT = 5000;

// Set up Handlebars as the view engine
app.engine('hbs', handlebars.engine({
	extname: 'hbs',
}));

app.set('view engine', 'hbs');

app.set('views', 'src/views');

// Set up middleware to serve static files

app.use(express.static('src/static'));

// Routes
app.get('/', (req, res) => {
	res.render('home');
});

app.get('/about', (req, res) => {
	res.render('about');
});
// Start the Server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});