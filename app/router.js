var url = require('url');
var fs = require('fs');

exports.get = function(req, res) {
  req.requrl = url.parse(req.url, true);
  var path = req.requrl.pathname;
  if (/.(css)$/.test(path)) {
    res.writeHead(200, {
      'Content-Type': 'text/css'
    });
    fs.readFile(__dirname + '/web/assets/css/style.css', 'utf8', function(err, data) {
      if (err) throw err;
      res.write(data, 'utf8');
      res.end();
    });
  } else if (/.(js)$/.test(path)){
     res.writeHead(200, {
       'Content-Type': 'text/javascript'
     });
     fs.readFile(__dirname + '/web/assets/js/search-helper.js', 'utf8', function(err, data) {
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
    } else if (path.includes('/results')) {
       var criteria = path.split("%")[1];
       console.log("** " + path);
      //var criteria = searchParams;
      require('../app/guidebox/guidebox').get(req,res,criteria);
    }else if (path.includes('/user')) {
      var userName = path.split("=")[1];
     require('../app/user/user').get(req,res,userName);
    } else {
      require('../app/controllers/404').get(req, res);
    }
  }
};