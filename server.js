const http = require('http');
const fs = require('fs');

const mongodb = require('mongodb');
    //MongoClient is thing to connect to mongodb and be a "client"
const MongoClient = mongodb.MongoClient

const db_uri = 'mongodb://localhost:27017/mythical-animals';

MongoClient.connect(db_uri, function(err, db) {
    if(err) return console.log('FAIL!', err);

    console.log('Connected correctly to server');

    db.collection('unichr0ns').find().toArray()
        .then(unichr0ns => console.log(unichr0ns))
        .catch(err => console.log(err));
});



http.createServer((req, res) => {
    
    const stream = fs.createReadStream('index.html', { encoding: 'utf8' });

    // let contents = '';
    
    // stream.on('data', data => {
    //     res.write(data);
    // });

    // stream.on('end', () => {
    //     res.end(contents);
    // });

    //the above can all be written as short-hand:

    stream.pipe(res);
    


}).listen(3000);