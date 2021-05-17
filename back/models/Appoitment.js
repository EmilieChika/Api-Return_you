const mongoose = require('mongoose')

//Synchro with columns
const AppointmentSchema = new mongoose.Schema({
    appointment: {
        type: String,
        required : true
        //date: Date,
        //hours: int

    },
    clients:  {
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
