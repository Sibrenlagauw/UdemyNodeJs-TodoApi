// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');
  const db = client.db('TodoApp');

  // deleteMany
  db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    consol.log(result);
  });

  // deleteOne


  // findOneAndDelete
  db.collections('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });


  //client.close();
});
