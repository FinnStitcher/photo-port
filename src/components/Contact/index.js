import React, {useState} from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const {name, email, message} = formState;

    function handleChange(e) {
        // using the spread operator to pull in the other extant values
        setFormState({...formState, [e.target.name]: e.target.value});
        // e has a name property, which is the name="whatever" property of the input field being modified
        // this syntax means we only need one function and one setFormState call
    };
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <section>
            <h1>Contact me</h1>

            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange} />                
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} />                
                </div>

                <div>
                    <label htmlFor="message">Your message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />               
                </div>

                <button type="submit" onSubmit={handleSubmit}>Submit</button>
            </form>
        </section>        
    )
};

export default ContactForm;