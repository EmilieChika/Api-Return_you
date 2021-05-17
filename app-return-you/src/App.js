
import './App.css';
import React, {useState} from 'react';
import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars";

//Permit to create Http request and them to a back end to front
import Axios from 'axios';


function App() {


    const [clientsfirstName, setClientsFirstName] = useState("");
    const [clientsLastName, setClientsLastName] = useState("");
    const [clientsEmail, setClientsEmail] = useState("");
    const [appointment, setAppointment] = useState("");
    const [clientsComments, setClientsComments] = useState("");
    const [clientsTitle, setClientsTitle] = useState("");


    const addAppointment =() => {
        //Insert information
        Axios.post('http//localhost:3001/insert',{
            clientsfirstName : clientsfirstName,
            clientsLastName : clientsLastName,
            clientsEmail : clientsEmail,
            appointment : appointment,
            clientsComments : clientsComments,
            clientsTitle : clientsTitle,

        });
    };
  return (
    <div className="App">
        <h1> Prise de rendez-vous </h1>

        <DateTimePickerComponent placeholder="Selectionnez l'heure et date du rendez-vous" onChange={(event)=>{
            setAppointment(event.target.value);
        }}></DateTimePickerComponent>


        //Appointment form

        <form >
            <label htmlFor = 'firstname' > Prénom </label>
            <input type = 'text' id = 'firstname' firstname = 'firstname' placeholder="Entrer votre prénom" onChange={(event)=>{
                setClientsFirstName(event.target.value);
            }}/>

            <label htmlFor = 'lastname' > Nom </label>
            <input type = 'text' id = 'lastname' lastname = 'lastname' placeholder="Entrer votre nom" onChange={(event)=>{
                setClientsLastName(event.target.value);
            }}/>

            <label htmlFor = 'email' > Email </label>
            <input type = 'text' id = 'email' email = 'email'placeholder="Entrer votre email" onChange={(event)=>{
                setClientsEmail(event.target.value);
            }}/>

            <label htmlFor = 'appointment' > Titre rendez-vous </label>
            <input type = 'text' id = 'appointment' appointment = 'appointment'placeholder="Entrez l'intitulé" onChange={(event)=>{
                setClientsTitle(event.target.value);
            }} />

            <label htmlFor = 'comments' > Commentaires </label>
            <input type = 'text' id = 'comments'comments = 'comments'placeholder="Ajouter un commentaire" onChange={(event)=>{
                setClientsComments(event.target.value);
            }} />

            <button onClick={addAppointment}> Envoyer le rendez - vous </button>

        </form>

    </div>
  );
}

export default App;
