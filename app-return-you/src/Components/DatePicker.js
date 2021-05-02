
import React from 'react';
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";
import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars";


function DatePicker() {
    return (
        <div >
            <h1> Prise de rendez-vous </h1>

            <DateTimePickerComponent placeholder="Selectionnez l'heure et date du rendez-vous"></DateTimePickerComponent>
        </div>





    )
}

export default DatePicker
