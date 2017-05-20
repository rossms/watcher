//app/user/user.js

var template = require('../web/views/template-user');
var test_data = require('../models/user-data');
var globalUserSearchPrefs = "";

exports.get = function(req, res) {
  var userList = test_data.userList;
  var userName = userList.userName;
  var searchPrefs = userList.searchPrefs.sources;
  globalUserSearchPrefs = searchPrefs;

  var userSearchPrefsSet = globalUserSearchPrefs;
  global.userSearchPrefs = userSearchPrefsSet;

  var mainNavLinks = "";
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write(template.build("WCIWT?", "User Profile", "<p>Welcome:</p>" + userName + "</br> <p> Your search preferences are: " +searchPrefs ));
  res.end();
};

