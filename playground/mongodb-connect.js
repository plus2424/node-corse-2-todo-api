//const MongoClient = require('mongodb').MongoClient;

// esempio di utilizzo delle variabili in ES6
// var user = {name: 'Giacomo', age: 30};
// var {name} = user;
// console.log(name);

//l'esempio sopra indica come è possibile riscrivere la chiamata a MongoClient
const {MongoClient, ObjectID} = require('mongodb');

// Metodo per creare un id dinamicamente
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connect to Mongodb server');

    // Inserimento sul db di un documento di una collezione
    // var col = db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false,
    // },(err, result)=>{
    //     if (err) {
    //         return console.log('Unabled to insert todo', err);
    //     }
    //     // ops contiene tutti i dati inseriti nel db
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // var col = db.collection('Users').insertOne({
    //     name: 'Giacomo Fraccaro',
    //     age: 30,
    //     lacation: 'Noale'
    // },(err, result)=>{
    //     if (err) {
    //         return console.log('Unabled to insert todo', err);
    //     }
    //     // ops contiene tutti i dati inseriti nel db
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    db.close();
});