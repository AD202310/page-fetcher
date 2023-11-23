
const request = require('request');
const fetcher = (url) => {
  request(url, function (error, response,body) {
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log(body)
  })
}

fetcher('https://example.edu')


 const fs = require('fs');     
 fs.appendFile("./index.html", "text", function (err) {
      if(err) throw err;
      console.log("Updated!")
    })