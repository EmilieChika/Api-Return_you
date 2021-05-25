const mongoose = require('mongoose')
const Schema = mongoose.Schema;


//Synchro with columns
const AppointmentSchema = new mongoose.Schema({
    dateAndHours: {
        type: String,
        required : true

    },
    
    appointmentTitle :  {
        type: String,
        required : true

    },
    appointmentComments :  {
        type: String,
        required : true

    },

})


// Create Schema and access Appointment object
const AppointmentData = mongoose.model("AppointmentData", AppointmentSchema)
module.exports = AppointmentData;
