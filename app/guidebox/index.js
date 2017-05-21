// app/index.js

//requires
var searchTemplate = require('../web/views/template-search');
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

//guidebox.getRelatedShows(6959)

var sources = "";
exports.get = function(req, res, userSearchPrefs) {

  sources = userSearchPrefs;

  var searchCriteria = "";
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write(searchTemplate.build("Search Page", "Search...", sources));
  res.end();
/*
  var searchObj = {sources: sources, genre:'comedy', searchQuery: '', searchType: 'genre'}

  global.searchParams = searchObj;*/
};




