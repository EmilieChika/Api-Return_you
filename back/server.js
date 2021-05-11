const { MongoClient } = require('mongodb');

async function main (){
    const uri = "mongodb+srv://calendar:calendarPassword@calendar.90j6m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
       await client.connect(); 
    } catch (e) {
        console.error(e);
    } finally{
        await client.close();
    }
    
}

main().catch(console.error);

//------------CRUD-----------


//this function send appointements data in the dataBase 
function InsertAppointement(){
    let db = dbconnect()   

    let data = []

    db.query(/* INSERT INTO ...*/) 
}

//this function allows to recover appointements 
function getAppointement(){
    let db = dbconnect()
    db.query(/* SELECT * FROM ...*/) 

}

//this function allows to update an appointement
function updateAppointement(){
    let db = dbconnect()
    
    let data = []

    db.query(/* UPDATE ...*/) 

}

//this function allows to delete an appointement 
function deleteAppointement(){
    let db = dbconnect()

    let data = []

    db.query(/* DELETE FROM  ...*/) 

}

