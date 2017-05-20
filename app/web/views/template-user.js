exports.build = function(title, pagetitle, content) {
  return ['<!doctype html>',
  '<html lang="en">\n<meta charset="utf-8">\n<title>{title}</title>',
  '<link rel="stylesheet" href="/assets/style.css" />\n',
  '<script>var search = function(){' +
                'window.location = "/search";'+
  '}</script>' +
  '<h1>{pagetitle}</h1>',
  '<div id="content">{content}</div>\n',
  '</br>',
  '<button onclick="search()">Search:</button>']
  .join('\n')
  .replace(/{title}/g, title)
  .replace(/{pagetitle}/g, pagetitle)
  .replace(/{content}/g, content);
};