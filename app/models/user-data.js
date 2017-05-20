var thelist = function() {
  var objJson = {
         "profiles": [
            {"username": "Ross", "userPrefs": {
                    "sources": "free,netflix,hbo"
                }
            },
            {"username": "Nai", "userPrefs": {
                                "sources": "free,hulu"
                }
            },
            {"username": "Scott", "userPrefs": {
                                "sources": "free,amazon_prime"
                }
            }
         ]
  };
  return objJson;
};
exports.userList = thelist();