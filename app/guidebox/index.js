// app/index.js

const guidebox = require('./guidebox')


//const result = guidebox.shows
//console.log(`The shows available are: ${result}`)


//replace these with function calls from the ui
//guidebox.getShows('free,netflix,hbo', 'children', 'Genre')
//guidebox.getShowsByGenre('free,netflix,hbo', 'children')


//guidebox.getShowsByType('free,netflix,hbo', 'title', 'game of thrones')

//guidebox.getPersonDetails('free,netflix,hbo', 'Harrison Ford')

//guidebox.getMoviesByGenre('free,netflix,hbo', 'Action')

//guidebox.getMoviesByType('free,netflix,hbo', 'title', 'Shawshank Redemption')

guidebox.getRelatedShows(6959)