function dbconnect (){
    let mysql = require('mysql');
    let connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : ''
    });
    connection.connect();

    return connection
}


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

