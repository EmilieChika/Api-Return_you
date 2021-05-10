const express = require("express");
const mongoose = require("mongoose");
const app = express();

//midlewares permit to allow and receive informations from front-end in json
app.use(express.json())

try{
    console.log("lalalala")
    mongoose.connect('mongodb+srv://calendar:calendarPassword@calendar.90j6m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,

    })
} catch (e) {

    console.error(e);
}


// Express Server
app.listen(3001,() => {
    console.log('Server running correctly')

    });

