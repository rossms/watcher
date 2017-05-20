var url = require('url');
var fs = require('fs');

exports.get = function(req, res) {
  req.requrl = url.parse(req.url, true);
  var path = req.requrl.pathname;
  if (/.(css)$/.test(path)) {
    res.writeHead(200, {
      'Content-Type': 'text/css'
    });
    fs.readFile(__dirname + '/web'+ path, 'utf8', function(err, data) {
      if (err) throw err;
      res.write(data, 'utf8');
      res.end();
    });
  } else {
    if (path === '/' || path === '/home') {
      require('../app/controllers/home').get(req, res);
    } else if (path === '/search') {
      var userSearchPrefSources = userSearchPrefs;
      require('../app/guidebox/index').get(req,res,userSearchPrefSources);
    } else if (path === '/results') {
      var criteria = searchParams;
      require('../app/guidebox/guidebox').get(req,res,criteria);
    }else if (path === '/user') {
     require('../app/user/user').get(req,res);
    } else {
      require('../app/controllers/404').get(req, res);
    }
  }
};