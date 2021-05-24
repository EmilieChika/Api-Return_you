const express = require("express");
const mongoose = require("mongoose");
//const cors = require('cors');
const path = require ('path');

//Initialize express application
const app = express();
const PORT = process.env.PORT || 8080;



const AppointmentModels  = require("./models/Appoitment");
const ClientModels = require("./models/client")

const DateNow = new Date()

//midlewares permit to allow and receive informations from front-end in json
app.use(express.json());
app.use(express.static(__dirname+'/front/build'));

//app.use(cors());

try{
    console.log("lalalala")
        mongoose.connect('mongodb+srv://calendar:calendarPassword@calendar.90j6m.mongodb.net/appointment?retryWrites=true&w=majority', {
            useNewUrlParser: true,

    })
} catch (e) {

    console.error(e);
}

app.post("/api/insert", async (req,res) =>{

    /*const clientsTitle = req.body.clientsTitle
    const clientsfirstName = req.body.clientsfirstName
    const clientsLastName = req.body.clientsLastName
    const clientsEmail = req.body.clientsEmail
    const appointmentClient = req.body.appointmentClient
    const clientsComments = req.body.clientsComments*/



const appointment = new AppointmentModels(
    {
        //date: DateNow.toLocaleDateString(undefined),
        hours : DateNow.toLocaleTimeString(undefined),
        date: appointmentClient,
        //hours: appointmentClients
    });

    try {
        await appointment.save();
        res.send("data good");
        console.log("oifoijij")
        console.log(DateNow.toLocaleDateString(undefined))

    } catch(err) {
        console.log(err)
    }
    await res.json(appointment);
const client = new ClientModels(
    {
        /*firstName: "Benoit",
        lastName: "tarentula",
        emailAdress: "benoit.tarentula@gmail.com"*/
        appointmentTitle : clientsTitle,
        firstName: clientsfirstName,
        lastName: clientsLastName,
        emailAddress: clientsEmail,
        appointmentComments : clientsComments,


    });

    try {
        await client.save();
    }catch(err) {
        console.log(err)
    }
    await res.json(client);
});

// Express Server
/*app.listen(3001,() => {
    console.log('Server running correctly')

});*/

app.listen(PORT, console.log('Server is running correctly'));





