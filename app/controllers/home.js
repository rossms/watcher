var template = require('../web/views/template-login');
var test_data = require('../models/test-data');
exports.get = function(req, res) {
/*  var teamlist = test_data.teamlist;
  var strTeam = "",
    i = 0;
  for (i = 0; i < teamlist.count;) {
    strTeam = strTeam + "<li>" + teamlist.teams[i].country + "</li>";
    i = i + 1;
  }
  strTeam = "<ul>" + strTeam + "</ul>";*/
  var mainNavLinks = "";
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write(template.build("WCIWT?", "What Can I Watch Tonight?", "<p>Please Log In:</p>" + mainNavLinks));
  res.end();
};

