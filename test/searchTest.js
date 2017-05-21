const guidebox = require('../app/guidebox/guidebox')
var chai = require('chai');
var assert = chai.assert;

describe("getShowsByGenre",function(){
    it("should return a list of tv shows by genre",function(){
        var sources = 'free,netflix,hbo';
        var genre = 'comedy';
        var expectedTitleStr = "Scorpion,It's Always Sunny in Philadelphia,Parks and Recreation,Mom,2 Broke Girls,";
        var resultsString = "";
        var response = guidebox.getShowsByGenre(sources, genre).then((response) => {
                    resultsObj = response.results
                    console.log(resultsObj.length)

                    for(var i = 0; i<resultsObj.length; i++){
                    resultsString = resultsString + resultsObj[i].title + ",";
                    }
                    assert.equal(expectedTitleStr,resultsString);
                }, (response) => {
                    console.error(response.data.error )
                    resultsString = response.data.error
                    });
        //assert(true);
    });
});
describe("getShowsByTitle",function(){
    it("should return a list of tv shows by Title",function(){
        var sources = 'free,netflix,hbo';
        var query = 'Game of Thrones';
        var type = 'title';
        var expectedTitleStr = "Game of Thrones";
        var resultsString = "";
        var response = guidebox.getShowsByType(sources, type, query.toLowerCase()).then((response) => {
                    resultsObj = response.results
                    console.log(resultsObj.length)

                    for(var i = 0; i<resultsObj.length; i++){
                    resultsString = resultsString + resultsObj[i].title + ",";
                    }
                    assert.equal(expectedTitleStr,resultsString);
                }, (response) => {
                    console.error(response.data.error )
                    resultsString = response.data.error
                    });
        //assert(true);
    });
});
describe("getPersonDetails",function(){
    it("should return person details based on name search",function(){
        var sources = 'free,netflix,hbo';
        var query = 'Harrison Ford';
        var expectedTitleStr = "Harrison Ford";
        var resultsString = "";
        var response = guidebox.getPersonDetails(sources, query.toLowerCase()).then((response) => {
                    resultsObj = response.results
                    console.log(resultsObj.length)

                    for(var i = 0; i<resultsObj.length; i++){
                    resultsString = resultsString + resultsObj[i].name + ",";
                    }
                    assert.equal(expectedTitleStr,resultsString);
                }, (response) => {
                    console.error(response.data.error )
                    resultsString = response.data.error
                    });
        //assert(true);
    });
});
describe("getMoviesByTitle",function(){
    it("should return a list movies by Title",function(){
        var sources = 'free,netflix,hbo';
        var query = 'Shawshank Redemption';
        var type = 'title';
        var expectedTitleStr = "Shawshank Redemption";
        var resultsString = "";
        var response = guidebox.getMoviesByType(sources, type, query.toLowerCase()).then((response) => {
                    resultsObj = response.results
                    console.log(resultsObj.length)

                    for(var i = 0; i<resultsObj.length; i++){
                    resultsString = resultsString + resultsObj[i].title + ",";
                    }
                    assert.equal(expectedTitleStr,resultsString);
                }, (response) => {
                    console.error(response.data.error )
                    resultsString = response.data.error
                    });
        //assert(true);
    });
});
describe("getRelatedShows",function(){
    it("should return a list of related tv shows by Title",function(){
        var sources = 'free,netflix,hbo';
        var query = 'Simpsons';
        var type = 'title';
        var expectedTitleStr = "Modern Family,Friends,Archer,How I Met Your Mother,Bob's Burgers, South Park,";
        var resultsString = "";
        var response = guidebox.getShowsByType(sources, type, query.toLowerCase()).then((response) => {
                    resultsObj = response.results
                    console.log(resultsObj.length)

                   var showId = resultsObj[0].id;

                             var results = exports.getRelatedShows(showId)
                             .then((response) => {
                                 resultsObj = response.results
                                 for(var i = 0; i<resultsObj.length; i++){
                                 resultsString = resultsString + resultsObj[i].title + ",";
                                 }
                                 assert.equal(expectedTitleStr,resultsString);
                             }, (response) => {
                                 console.error(response.data.error )
                                 resultsString = response.data.error
                              });
                }, (response) => {
                    console.error(response.data.error )
                    resultsString = response.data.error
                    });
        //assert(true);
    });
});