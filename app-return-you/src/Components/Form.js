import React from 'react';


function Form() {
    return (
        <div >
            <form >
                <label htmlFor = 'firstname' > Prénom < /label>
                    <input type = 'text' id = 'firstname' firstname = 'firstname' placeholder="Entrer votre prénom"/>

                    <label htmlFor = 'lastname' > Nom < /label>
                        <input type = 'text' id = 'lastname' lastname = 'lastname' placeholder="Entrer votre nom"/>

                        <label htmlFor = 'email' > Email < /label>
                            <input type = 'text' id = 'email' email = 'email'placeholder="Entrer votre email" />

                            <label htmlFor = 'appointment' > Titre rendez-vous < /label>
                                <input type = 'text' id = 'appointment' appointment = 'appointment'placeholder="Entrez l'intitulé" />

                                     <label htmlFor = 'comments' > Commentaires < /label>
                                         <input type = 'text' id = 'comments'comments = 'comments'placeholder="Ajouter un commentaire" />

                            <button > Envoyer le rendez - vous </button>

            </form>

        </div>

)
}

export default Form
