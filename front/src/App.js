
import './App.css';
//import React, {useState} from 'react';
import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars";
import  React from 'react';

//Permit to create Http request and them to a back end to front
import Axios from 'axios';

class App extends React.Component {



//function App() {



    /*const [clientsfirstName, setClientsFirstName] = useState('');
    const [clientsLastName, setClientsLastName] = useState('');
    const [clientsEmail, setClientsEmail] = useState('');
    const [appointmentClient, setAppointmentClient] = useState('');
    const [clientsComments, setClientsComments] = useState('');
    const [clientsTitle, setClientsTitle] = useState('');


    const addAppointment =() => {
        //Insert information

        Axios.post("http://localhost:3001/api/insert",{
            clientsfirstName : clientsfirstName,
            clientsLastName : clientsLastName,
            clientsEmail : clientsEmail,
            appointmentClient : appointmentClient,
            clientsComments : clientsComments,
            clientsTitle : clientsTitle,


        });


    };

*/



    state = {
        clientsfirstName: '',
        clientsLastName: '',
        clientsEmail: '',
        //appointmentClient: '',
        clientsComments: '',
        clientsTitle: '',
        //hoursDate: '',
        goods: []

    };

    //call a,d execute the function
    componentDidMount() {
        this.getAppointmentPost();
    }

    //function state data to the server
    getAppointmentPost = () => {
        Axios.get('/api/insert')
        .then((response) => {
            const data = response.data;
            this.setState(({ goods: data}));
            console.log("this is good ")
        })
            .catch(() => {
                console.log("This is not good ")
            })

    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value

        });


    }


    //Send data to the server
    submit = (event) => {
    event.preventDefault();

    //Data which will be send to the data

        const playload = {
            clientsfirstName: this.state.clientsfirstName,
            clientsLastName: this.state.clientsLastName,
            clientsEmail: this.state.clientsEmail,
            //appointmentClient: '',
            clientsComments: this.state.clientsComments,
            clientsTitle: this.state.clientsTitle
            //hoursDate: ''

        };

        //Post Request
        Axios({
            url: 'http://localhost:8080/api/insert',
            method: 'POST',
            data: playload
        })
            .then(() =>{
                console.log('Data send correctly to the server')
        })
            .catch(() =>{
                console.log('Data has been not send correctly to the server')
            });;
    };

    render() {

        console.log('State : ', this.state);

  return (
    <div className="App">
        <h1> Prise de rendez-vous </h1>

        <DateTimePickerComponent placeholder="Selectionnez l'heure et date du rendez-vous" onChange={this.handleChange}
            /*{(event)=>{s
            setAppointmentClient(event.target.value);
        }}*/></DateTimePickerComponent>


        <form onSubmit={this.submit}>

         <div className="form-input">
            <label htmlFor = 'clientsfirstName' > Prénom </label>
            <input type = "text"
                   name = "clientsfirstName"
                   //firstname = 'firstname'
                   placeholder="Entrer votre prénom"
                   value={this.state.clientsfirstName}
                   onChange={this.handleChange}
                       /*{(event)=>{
                setClientsFirstName(event.target.value);
            }}*//>
         </div>

            <div className="form-input">
            <label htmlFor = 'clientsLastName' > Nom </label>
            <input type = "text"
                   name = "clientsLastName"
                   //lastname = 'lastname'
                   value={this.state.clientsLastName}
                   placeholder="Entrer votre nom"
                   onChange={this.handleChange}
                       /*{(event)=>{
                setClientsLastName(event.target.value);
            }}*//>
    </div>

            <div className="form-input">
        <label htmlFor = 'clientsEmail' > Email </label>
            <input type = "text"
                   name = "clientsEmail"
                   //email = 'email'
                   value={this.state.clientsEmail}
                   placeholder="Entrer votre email"
                   onChange= {this.handleChange}
                       /*{(event)=>{
                setClientsEmail(event.target.value);
            }}*//>
    </div>

            <div className="form-input">
    <label htmlFor = 'clientsTitle' > Titre rendez-vous </label>
            <input type = "text"
                   name = "clientsTitle"
                   //appointment = 'appointment'
                   placeholder="Entrez l'intitulé"
                   value={this.state.clientsTitle}
                   onChange={this.handleChange}
                       /*{(event)=>{
                setClientsTitle(event.target.value);
            }} *//>
            </div>

            <div className="comments">
            <label htmlFor = 'clientsComments' > Commentaires </label>
            <input
                id="comments"
                type = "text"
                   name = "clientsComments"
                   //comments = 'comments'
                   value={this.state.clientsComments}
                   placeholder="Ajouter un commentaire"
                   onChange={this.handleChange}
                       /*{(event)=>{
                setClientsComments(event.target.value);
            }} *//>
            </div>

            <button type="submit" /*onClick={addAppointment}*/> Envoyer le rendez - vous </button>

        </form>

    </div>
  );
}
}


export default App;
