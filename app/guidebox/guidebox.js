//app//guidebox/guidebox.js

/*Start guidebox config section*/
var client = require('guidebox')
var Guidebox = new client('43f0aa6f1845fa3c37bee5c9dc58fd5d6b84731c')
/*End guidebox config section*/


/*var options = {
    limit: 2,
    sources: 'free,netflix,hbo'
}*/
/*helper methods start */

/*helper methods end */
/*public methods start */


    /*
     * type: show
     * this function searches for tv shows based on the genre params passed in
     * @param:sources -> string of subscription based content providers
     * @param:genre ->
     */
    exports.getShowsByGenre = function(sources, genre) {
          var limit = 2;
          var options = {
           limit: limit,
           sources: sources,
           tags: genre
          }
          var shows = Guidebox.shows.list(options)
          .then((response) => {
           console.log(response.results)
          }, (response) => {
          console.error(response.data.error )
          });
    };
  /*
   * type: show
   * this function searches for tv shows based on the genre params passed in
   * @param:sources -> string of subscription based content providers
   * @param:type ->
   * @param:searchQuery ->
   */
    exports.getShowsByType = function(sources, type, searchQuery) {
        var limit = 0;
        if(type === 'title'){limit = 1} else {limit = 2}
        var options = {
         limit: limit,
         sources: sources,
         type: type,
         field: type,
         query: searchQuery
        }
        var shows = Guidebox.search.shows(options)
        .then((response) => {
         console.log(response.results)
        }, (response) => {
        console.error(response.data.error )
        });
    };
  /*
   * type: show
   * this function searches for related tv shows based on the given show
   * @param:sources -> string of subscription based content providers
   * @param:type ->
   * @param:searchQuery ->
   */
    exports.getRelatedShows = function(showId) {
        var shows = Guidebox.shows.related(showId)
        .then((response) => {
         console.log(response.results)
        }, (response) => {
        console.error(response.data.error )
        });
    };

  /*
   * type: person
   * this function searches for content based on the person name params passed in
   * @param:sources -> string of subscription based content providers
   * @param:searchQuery ->
   */
    exports.getPersonDetails = function(sources, searchQuery) {
        var limit = 1;
        var options = {
         limit: limit,
         sources: sources,
         query: searchQuery
        }
        var shows = Guidebox.search.person(options)
        .then((response) => {
         console.log(response.results)
        }, (response) => {
        console.error(response.data.error )
        });
    };

    /*
     * type: movie
     * this function searches for movies based on the genre params passed in
     * @param:sources -> string of subscription based content providers
     * @param:genre ->
     */
    exports.getMoviesByGenre = function(sources, genre) {
          var limit = 2;
          var options = {
           limit: limit,
           sources: sources,
           tags: genre
          }
          var shows = Guidebox.movies.list(options)
          .then((response) => {
           console.log(response.results)
          }, (response) => {
          console.error(response.data.error )
          });
    };
      /*
       * type: movie
       * this function searches for movies based on the genre params passed in
       * @param:sources -> string of subscription based content providers
       * @param:type ->
       * @param:searchQuery ->
       */
        exports.getMoviesByType = function(sources, type, searchQuery) {
            var limit = 0;
            if(type === 'title'){limit = 1} else {limit = 2}
            var options = {
             limit: limit,
             sources: sources,
             type: type,
             field: type,
             query: searchQuery
            }
            var shows = Guidebox.search.movies(options)
            .then((response) => {
             console.log(response.results)
            }, (response) => {
            console.error(response.data.error )
            });
        };


/*public methods end */
