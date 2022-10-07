async function entry() {
    const data = document.getElementById('given').value;
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    const database = 'primary';
    
    await client.connect();
    console.log('connected!');
    const db = client.db(database);
    const collection = db.collection('users');
    collection.insertOne({ name : data });
    db.close();
}

entry()
    .then(console.log)
    .catch(console.error)