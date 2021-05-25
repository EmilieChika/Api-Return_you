
import './App.css';
//import React, {useState} from 'react';
import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars";
import  React, { useState } from 'react';

//Permit to create Http request and them to a back end to front
import Axios from 'axios';

function App1() {
        //console.log('States : ', this.state);
        const [firstName, setFirstName] = useState("");
        const [lastname, setLastname] = useState("");
        const [email, setEmail] = useState("");
        const [appointmentTitle, setRdv] = useState("");
        const [appointmentComments, setComments] = useState("");
        const [date, setDate] = useState(new Date());

        const addToList = () => {
            console.log(firstName + lastname + email + appointmentTitle + appointmentComments + date)
            Axios.post("http://localhost:3001/insert", {
                firstName : firstName,
                lastName : lastname,
                emailAddress : email,
                appointmentTitle : appointmentTitle,
                appointmentComments: appointmentComments,
                date : date
                
            })
        }

        return (
            <div className="App">
                <h1> Prise de rendez-vous </h1>

                <DateTimePickerComponent placeholder="Selectionnez l'heure et date du rendez-vous" 
                    onChange={(event) =>{
                        setDate(event.target.value)
                    }}
               ></DateTimePickerComponent>


                

                    <div className="form-input">
                        <label htmlFor = 'clientsfirstName' > Prénom </label>
                        <input type = "text"
                            placeholder="Entrer votre prénom"
                            //onChange={this.handleChange}
                            onChange={(event) =>{
                                setFirstName(event.target.value)
                            }}
                        />
                    </div>

                    <div className="form-input">
                        <label htmlFor = 'clientsLastName' > Nom </label>
                        <input type = "text"
                            placeholder="Entrer votre nom"
                            //onChange={this.handleChange}
                            onChange={(event) =>{
                                setLastname(event.target.value)
                            }}
                         />
                    </div>

                    <div className="form-input">
                        <label htmlFor = 'clientsEmail' > Email </label>
                        <input type = "text"
                            placeholder="Entrer votre email"
                            //onChange= {this.handleChange}
                            onChange={(event) =>{
                                setEmail(event.target.value)
                            }}
                        />
                    </div>

                    <div className="form-input">
                        <label htmlFor = 'clientsTitle' > Titre rendez-vous </label>
                        <input type = "text"
                            placeholder="Entrez l'intitulé"
                            //onChange={this.handleChange}
                            onChange={(event) =>{
                                setRdv(event.target.value)
                            }}
                        />
                    </div>

                    <div className="comments">
                        <label htmlFor = 'clientsComments' > Commentaires </label>
                        <input
                            id="comments"
                            type = "text"
                            placeholder="Ajouter un commentaire"
                            //onChange={this.handleChange}
                            onChange={(event) =>{
                                setComments(event.target.value)
                            }}
                        />
                    </div>

                    <button onClick={addToList}> Envoyer le rendez - vous </button>

                

            </div>
        );
    
}


export default App1;
