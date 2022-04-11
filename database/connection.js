
var MongoClient = require('mongodb').MongoClient;
function connectionDatabase() {
    return new Promise((resolve, reject) => {
        var url = 'mongodb+srv://developer:UwfBIpiSnJR26wdd@cluster0.q7vm8.mongodb.net/liberty-wallet?retryWrites=true&w=majority';
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async(err, client) => {
            if (err) {
                reject(err);
            } else {
                console.log('Mongo is conected!!');
                const db = client.db('liberty-wallet');
                resolve(db);
            }
        });
    });
}

module.exports = connectionDatabase();