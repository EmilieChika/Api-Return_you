const mongoose = require('mongoose')
const Schema = mongoose.Schema;


//Synchro with columns
const AppointmentSchema = new mongoose.Schema({
    date: {
        type: String,
        required : false
        //date: Date,
        //hours: int

    },
    hours:  {
        type: String,
        required : true
        //lastname: String,
        //email: String,
        //comments: String,

    }

})


// Create Schema and access Appoitment objet
const AppointmentData = mongoose.model("AppointmentData", AppointmentSchema)
module.exports = AppointmentData;
