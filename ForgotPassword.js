import React from 'react'
import Inputfield from './Inputfield';
import Paragraph from './Paragraph';
import '../styles/button.css'

export default function ForgotPassword({placeholder}){
    return(
        <div>
            <h2>Forgot password</h2>
            <p>
                Make sure you have entered the correct email
            </p>
        <Inputfield placeholder = {placeholder} > </Inputfield>
        <br/>
        <button className='forgotSubmit'>SUBMIT</button>
        </div>
    );

}