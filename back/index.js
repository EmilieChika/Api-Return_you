const express = require("express");
const mongoose = require("mongoose");
const app = express();

const AppointmentModels  = require("./models/Appoitment");
const ClientModels = require("./models/client")

const DateNow = new Date()

//midlewares permit to allow and receive informations from front-end in json
app.use(express.json());

try{
    console.log("lalalala")
        mongoose.connect('mongodb+srv://calendar:calendarPassword@calendar.90j6m.mongodb.net/appointment?retryWrites=true&w=majority', {
            useNewUrlParser: true,

    })
} catch (e) {

    console.error(e);
}

app.get("/", async (req,res) =>{

const appointment = new AppointmentModels(
    {
        date: DateNow.toLocaleDateString(undefined), 
        hours : DateNow.toLocaleTimeString(undefined)
    });

    try {
        await appointment.save();
        res.send("data good");
        console.log("oifoijij")
        console.log(DateNow.toLocaleDateString(undefined))

    } catch(err) {
        console.log(err)
    }

const client = new ClientModels(
    {
        firstName: "Benoit",
        lastName: "tarentula",
        emailAdress: "benoit.tarentula@gmail.com" 
    });

    try {
        await client.save();
    }catch(err) {
        console.log(err)
    }
});





// Express Server
app.listen(3001,() => {
    console.log('Server running correctly')

    });

