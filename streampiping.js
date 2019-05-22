var fs = require('fs');

var readstream = fs.createReadStream('package.json');
var writestream = fs.createWriteStream('output.txt');

readstream.pipe(writestream);

console.log("file writtem successfully");