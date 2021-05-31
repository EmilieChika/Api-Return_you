require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
//const cors = require('cors');
const path = require ('path');
const cors = require ('cors');


//Initialize express application
const app = express();
const AppointmentModels  = require("./models/Appoitment");
const ClientModels = require("./models/client")

const DateNow = new Date()

//midlewares permit to allow and receive informations from front-end in json
app.use(express.json());
app.use(express.static(__dirname+'/front/build'));
app.use(cors());

try{
    console.log("lalalala")
        mongoose.connect(process.env.DB_PASSWORD, {
            useNewUrlParser: true,

    })
} catch (e) {

    console.error(e);
}

app.post("/insert", async (req,res) =>{

    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.emailAddress
    const date = req.body.date
    const appointmentTitle= req.body.appointmentTitle
    const appointmentComments = req.body.appointmentComments
    console.log("DATE:"+date)


    const appointment = new AppointmentModels(
        {   
            dateAndHours : date,
            appointmentTitle :appointmentTitle,
            appointmentComments : appointmentComments

            /*date: DateNow.toLocaleDateString(undefined),
            hours : DateNow.toLocaleTimeString(undefined),*/
            //date: appointmentClient,
            //hours: appointmentClients
        });

        try {
            await appointment.save();
            console.log("oifoijij")
            console.log(DateNow.toLocaleDateString(undefined))

        } catch(err) {
            console.log(err)
        }

        
    const client = new ClientModels(
        {
            firstName: firstName,
            lastName: lastName,
            email: email

        });

        try {
            await client.save();
        }catch(err) {
            console.log(err)
        }
        await res.json(client);
    });


app.post("/insert", async (req,res) =>{
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    console.log(accountSid)
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);
    const date = req.body.date
    
    client.messages.create({
        body: 'Hello, Vous-avez une demande de rendez-vous le '+ date,
        from: '+12098178148',
        to: '+33695273882'
        })
        .then((message) => console.log(message))
        .catch((err) => console.log(err)); 
})    

//READ : in that method i made a read in bdd, it's either global data or detailed with find{$where : { firstName: "Benoit" }} 
app.get('/read', async (req,res) => {
    ClientModels.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result)
    })
})  

app.listen(3001, () =>{
    console.log("server on port 3001..");
});





