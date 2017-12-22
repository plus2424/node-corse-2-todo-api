//l'esempio sopra indica come è possibile riscrivere la chiamata a MongoClient
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connect to Mongodb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a3bcc2d2f32f2363cdb577d')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false   // Se folse ritorna il documento modificato
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a3bcec8cc4f0a3b78e9e110')
    },{
        $set: {
            name: 'Giacomo'
        },
        $inc: { // per incrementare di 1 l'età
            age: 1
        }
    },{
        returnOriginal: false   // Se folse ritorna il documento modificato
    }).then((result)=>{
        console.log(result);
    });

    //db.close();
});