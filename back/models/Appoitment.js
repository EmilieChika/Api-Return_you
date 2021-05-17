const mongoose = require('mongoose')
const Schema = mongoose.Schema;


//Synchro with columns
const AppointmentSchema = new mongoose.Schema({
    appointment: {
        date: String,
        //date: Date,
        //hours: int

    },
    clients:  {
        firstname: String,
        //lastname: String,
        //email: String,
        //comments: String,

    }

})


// Create Schema and access Appoitment objet
const Appointment = mongoose.model("Appointment", AppointmentSchema)
module.exports = Appointment;
