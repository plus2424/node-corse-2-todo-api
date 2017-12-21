//l'esempio sopra indica come è possibile riscrivere la chiamata a MongoClient
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connect to Mongodb server');

    //Cercare un documento e inserirlo in un array
    // db.collection('Todos').find({
    //     _id: new ObjectID('5a3bcc2d2f32f2363cdb577d')   //Sintassi per cercare un id
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch Todos.', err);
    // });

    // Utilizzo del count
    db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos count: ${count}`);
    }, (err)=>{
        console.log('Unable to fetch Todos.', err);
    });
    

    //db.close();
});