
const request = require('request');
const fs = require('fs');

let url = process.argv[2];
//let url = 'https://example.edu'
let filePath = process.argv[3];
//let filePath = "./index.html";

request(url, function(error, response, body) {
  console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  fs.appendFile(filePath, body, function(err) {
    if (err) throw err;
  });
});