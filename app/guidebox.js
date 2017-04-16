//app/guidebox.js

var client = require('guidebox')

var Guidebox = new client('43f0aa6f1845fa3c37bee5c9dc58fd5d6b84731c')


var shows = Guidebox.shows.list({limit: 2})
.then((response) => {
 console.log(response.results)
}, (response) => {
console.error(response.data.error )
});


//module.exports.shows = shows