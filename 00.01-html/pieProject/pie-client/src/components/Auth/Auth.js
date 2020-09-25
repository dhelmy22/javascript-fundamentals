import React, { useState } from 'react';
import './Auth.css';

const Auth = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);

    const title = () => {  //^^^ set to true, it will say login on the page   set to false, it will say signup on the page.

        return login ? 'Login' : 'Signup'

    }

    const loginToggle = (event) => { // All this clears the form for everyone else

        event.preventDefault();

        setLogin(!login);

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');


    }
    // Signup Ternary Function
    const signupFields = () => !login ? (

        <div>

            <label htmlFor="firstName">First Name:</label>
            <br />
            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <br />
            <label htmlFor="lastName">Last Name:</label>
            <br />
            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>

    ) : null; // <-- ^^ this is a ternary. that is why the semicolon is all that is needed.
    // End signup function

    const handleSubmit = (e) => {
// build url based off true or false
        e.preventDefault();
        const url = login ? 'http://localhost:3008/auth/signin' :
            'http://localhost:3008/auth/signup'

        const bodyObj = login ? {
            email: email,
            password: password
        } : {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
            }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(bodyObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => props.updateToken(json.sessionToken))

    }


    return (

        <div>
            <form>
                <h1>{title()}</h1>
                <br />
                {signupFields()}
                <label htmlFor="email">Email</label>
                <br />
                <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button onClick={loginToggle}>Login/Signup Toggle</button>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>


    );

}

export default Auth;