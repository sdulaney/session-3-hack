var express = require('express');

var app = express();

app.set('view engine', 'hbs');

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

});

// 6) TODO: Add book input by the form to our list of books on the server.

// 7) TODO: Delete book specified by the client.




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