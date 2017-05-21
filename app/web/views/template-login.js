exports.build = function(title, pagetitle, content) {
  return ['<!doctype html>',
  '<html lang="en">\n<meta charset="utf-8">\n<title>{title}</title>',
  '<link rel="stylesheet" href="/assets/style.css" />\n',
  '  <script src="search-helper.js"></script>',
  '<script>var logIn = function(){'+
               'var userName = document.getElementById("userName").value;'+
               'var password = document.getElementById("password").value;'+
               'var userNamePath = "/user="+userName;'+
               'getUser(userNamePath);'+
          '};'+
          'var getUser = function(userNamePath){'+
          'console.log("** " + window.loggedInUser);'+
          'window.location = userNamePath;'+
          '}</script>\n',
  '<body onload="setDynamicBackground()">',
  '<center>',
  '<div class="SearchSection">',
  '<h1>{pagetitle}</h1>',
  '<div id="content">{content}</div>\n',
  'Username:<input id="userName" type="text"></input>',
  '</br>',
  'Password:<input id="password" type="password"></input>',
  '</br>',
  '<button onclick="logIn()">Log In</button>',
  '</div>',
  '</center>',
  '</body>']
  .join('\n')
  .replace(/{title}/g, title)
  .replace(/{pagetitle}/g, pagetitle)
  .replace(/{content}/g, content);
};