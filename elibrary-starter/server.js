var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var books = initBooks();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.listen(3000, function() {
	console.log('App listening on port 3000!');
});

app.get('/', (request, response) => {
	response.render('home', {
		title: 'Hello, World!',
		content: 'Hello, World!'
	});
});

app.get('/library', (request, response) => {
	response.render('library', {
		books: books
	});
});

app.get('/error', function(request, response) {
	response.send('The book is invalid.');
});

app.post('/books/add', function(request, response) {
	let title = request.body.title;
	let author = request.body.author;
	let isbn = request.body.isbn;
	let copies = parseInt(request.body.copies);

	if(title.length > 0 && author.length > 0 && isbn.length > 0 && copies > 0) {
		books.push({title, author, isbn, copies});
		response.redirect('/library');
	} else {
		console.log('You tried to add an invalid book into the elibrary.');
		response.redirect('/error');
	}
});

app.get('/books/delete/:isbn', function(request, response) {
	var isbn = request.params.isbn;
	for(var i = 0; i < books.length; i++) {
		if(books[i].isbn == isbn) {
			books.splice(i, 1);
			break;
		}
	}
	response.redirect('/library');
});



//////////////////////////////////////////////////////
// Helper Functions:                                //
// Functions after this point have been defined     //
// for you. You can see how they work, but put      //
// all code above this point, and don't modify      //
// or play around with it during the session. You   //
// are free to do that later, though!               //
//////////////////////////////////////////////////////

function initBooks() {
	var initialBooks = [
		{ 
			title: "The Three Musketeers", 
			author: "Alexandre Dumas", 
			copies: 7, 
			isbn: "978-1-56619-909-4" 
		},
		{ title: "Ivanhoe", author: "Sir Walter Scott", copies: 2, isbn: "978-1-46110-482-3" },
		{ title: "The Count of Monte Cristo", author: "Alexandre Dumas", copies: 3, isbn: "978-1-39912-897-1" },
		{ title: "Last of the Mohicans", author: "James Fenimore Cooper", copies: 2, isbn: "978-1-87140-981-4" },
		{ title: "Moby Dick", author: "Herman Melville", copies: 8, isbn: "978-1-09713-891-7" },
		{ title: "A Tale of Two Cities", author: "Charles Dickens", copies: 14, isbn: "978-1-67819-414-4" },
		{ title: "Robin Hood", author: "Howard Pyle", copies: 1, isbn: "978-1-18904-912-4" },
		{ title: "Arabian Nights", author: "Antony Galland", copies: 6, isbn: "978-1-89231-991-4" }
	];

	return initialBooks;
}