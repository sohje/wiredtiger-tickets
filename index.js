'use strict'
const MongoClient = require('mongodb').MongoClient;

module.exports = (url, cb) => {
    if (typeof url !== 'string') {
        throw new Error('Provide correct mongodb:// URI')
    }

    MongoClient.connect(url, (err, db) => {
        if (err !== null) {
            cb(err, null);
            return;
        }
        let adminDb = db.admin();

        adminDb.serverStatus((err, info) => {
            if (err !== null) {
                cb(err, null);
            }
            else if (info.storageEngine && info.storageEngine.name === 'wiredTiger') {
                let tickets = {}
                let transactions = info.wiredTiger.concurrentTransactions
                tickets.read = transactions.read.available
                tickets.write = transactions.write.available
                cb(err, tickets)
            } else {
                cb(new Error('Check your mongodb instance'), null)
            }
            db.close();
        });
    });
}