const mongoose = require('mongoose')

//Synchro with columns
const ClientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required : true
        //date: Date,
        //hours: int

    },
    lastName:  {
        type: String,
        required : true

    },
    email:  {
        type: String,
        required : true

    },
    



})


// Create Schema and access Appoitment objet
const ClientData = mongoose.model("ClientData", ClientSchema)
module.exports = ClientData;
