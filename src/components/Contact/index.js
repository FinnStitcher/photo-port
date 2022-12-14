import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const {name, email, message} = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        // validation stuff
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            // make sure a name and message are included
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        };

        // only update state if theres no errors
        if (!errorMessage) {
            // using the spread operator to pull in the other extant values
            setFormState({...formState, [e.target.name]: e.target.value});
            // e has a name property, which is the name="whatever" property of the input field being modified
            // this syntax means we only need one function and one setFormState call            
        };
    };
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <section>
            <h1 data-testid="contact-h1">Contact me</h1>

            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />                
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />                
                </div>

                <div>
                    <label htmlFor="message">Your message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />               
                </div>

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                <button data-testid="submit" type="submit">Submit</button>
            </form>
        </section>        
    )
};

export default ContactForm;