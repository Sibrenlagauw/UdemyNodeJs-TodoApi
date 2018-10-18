// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'andrew', age: 25};
// var {name} = user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Someting to do.',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo.', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   _id: 123,
  //   name: 'Sibren Lagauw',
  //   age: 19,
  //   location: 'Belgium'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert new user.', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });



  client.close();
});
