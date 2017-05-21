//app//guidebox/guidebox.js

/*Start guidebox config section*/
var resultsTemplate = require('../web/views/template-results');
var client = require('guidebox')
var GuideboxAPI = new client('43f0aa6f1845fa3c37bee5c9dc58fd5d6b84731c')
/*End guidebox config section*/
/*helper methods start */
exports.get = function(req, res, criteria) {
  var searchPage = "";
  var searchParams = "";
  var resultsString = "";
  var resultsObj = "";
  //sources='free,netflix,hbo'&searchQuery=Comedy&searchType=Genre&movieOrShow=show
  var searchStringArray = criteria.split("&");
  var searchObj = {
            sources: searchStringArray[0].split("=")[1],
            movieOrShow: searchStringArray[3].split("=")[1],
            searchQuery: searchStringArray[1].split("=")[1],
            searchType: searchStringArray[2].split("=")[1]
            }
  if (searchObj.sources == "" || searchObj == null) {
    res.write(resultsTemplate.build("Results Page", "Results...", "<p>Oops! You seems to have landed here without specifying " +
    "any search criteria. Please follow the below link to search again.</p>" + searchPage));
  }else {
  //console.log(criteria.sources)
      if(searchObj.searchType == 'Genre'){
        var results = exports.getShowsByGenre(searchObj.sources, searchObj.searchQuery)
        .then((response) => {
            resultsObj = response.results
            //console.log(resultsObj.length)

            for(var i = 0; i<resultsObj.length; i++){
            resultsString = resultsString + "<li>" + resultsObj[i].title + "</li>";
            }
            resultsString = "<ul>" + resultsString + "</ul>"
            res.writeHead(200, {
                   'Content-Type': 'text/html'
             });
            res.write(resultsTemplate.build("Results Page", "Results...", "<p>We found the following content based on your search criteria:</p>" + resultsString));
            res.end();
        }, (response) => {
            console.error(response.data.error )
            resultsString = response.data.error
         });
      } else {

            res.writeHead(200, {
                   'Content-Type': 'text/html'
             });
             res.write(resultsTemplate.build("Results Page", "Results...", "<p>We found the following content based on your search criteria:</p>" + resultsString));
             res.end();
      }
     }
};
/*helper methods end */
/*public methods start */


    /*
     * type: show
     * this function searches for tv shows based on the genre params passed in
     * @param:sources -> string of subscription based content providers
     * @param:genre ->
     */
    exports.getShowsByGenre = function(sources, genre) {
          var limit = 5;
          var options = {
           limit: limit,
           sources: sources,
           tags: genre
          }
          /*var shows = GuideboxAPI.shows.list(options)
          .then((response) => {
           console.log(response.results)
          }, (response) => {
          console.error(response.data.error )
          });*/
          return GuideboxAPI.shows.list(options);
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
        /*var shows = GuideboxAPI.search.shows(options)
        .then((response) => {
         console.log(response.results)
        }, (response) => {
        console.error(response.data.error )
        });*/
        return GuideboxAPI.search.shows(options);
    };
  /*
   * type: show
   * this function searches for related tv shows based on the given show
   * @param:sources -> string of subscription based content providers
   * @param:type ->
   * @param:searchQuery ->
   */
    exports.getRelatedShows = function(showId) {
        /*var shows = GuideboxAPI.shows.related(showId)
        .then((response) => {
         console.log(response.results)
        }, (response) => {
        console.error(response.data.error )
        });*/
        return GuideboxAPI.shows.related(showId);
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
        /*var shows = GuideboxAPI.search.person(options)
        .then((response) => {
         console.log(response.results)
        }, (response) => {
        console.error(response.data.error )
        });*/
        return GuideboxAPI.search.person(options);
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
          /*var shows = GuideboxAPI.movies.list(options)
          .then((response) => {
           console.log(response.results)
          }, (response) => {
          console.error(response.data.error )
          });*/
          return GuideboxAPI.movies.list(options);
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
            /*var shows = GuideboxAPI.search.movies(options)
            .then((response) => {
             console.log(response.results)
            }, (response) => {
            console.error(response.data.error )
            });*/
            return GuideboxAPI.search.movies(options);
        };


/*public methods end */
