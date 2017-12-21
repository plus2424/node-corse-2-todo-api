//l'esempio sopra indica come è possibile riscrivere la chiamata a MongoClient
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connect to Mongodb server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    // findOneAndDelete (Come il deleteOne e restituisce tutti i dati del documento cancellato)
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result);
    // });

    //db.close();
});