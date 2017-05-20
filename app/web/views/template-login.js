exports.build = function(title, pagetitle, content) {
  return ['<!doctype html>',
  '<html lang="en">\n<meta charset="utf-8">\n<title>{title}</title>',
  '<link rel="stylesheet" href="/assets/style.css" />\n',
  '<script>var logIn = function(){'+
               'var userName = document.getElementById("userName").value;'+
               'var password = document.getElementById("password").value;'+
               'console.log("** " + userName);'+
               'window.location = "/user"'+
          '}</script>\n',
  '<h1>{pagetitle}</h1>',
  '<div id="content">{content}</div>\n',
  'Username:<input id="userName" type="text"></input>',
  '</br>',
  'Password:<input id="password" type="password"></input>',
  '</br>',
  '<button onclick="logIn()">Log In</button>']
  .join('\n')
  .replace(/{title}/g, title)
  .replace(/{pagetitle}/g, pagetitle)
  .replace(/{content}/g, content);
};