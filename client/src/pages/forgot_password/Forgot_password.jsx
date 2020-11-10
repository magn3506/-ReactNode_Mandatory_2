import React, { useState } from 'react';



function Reset_password(props) {


    const [email, setEmail] = useState("");
    const [isSucces, setIsSucces] = useState(false);

    const handleSetEmail = event => {
        setEmail(event.target.value);
    }

    const handleSubmitForm = async event => {
        event.preventDefault();

        const payload = {
            email: email,
        };


        const response = await fetch("api/mailer/resetUserPassword", {
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(payload),

        });

        const result = await response;

        if (result.status === 200) {
            setIsSucces(true);
        }

    }

    const isSucceded = isSucces ?
        (
            <div>
                <h1>SUCCES!</h1>
                <p>We have send an email to {email}</p>
                <p>Rember to tjek your spam folder</p>
            </div>
        ) :
        (
            <div>
                <h1>Forgot your password?</h1>
                <p>Enter your email address and we will email you a link to reset your password.</p>
                <hr />
                <form onSubmit={handleSubmitForm}>
                    <label htmlFor="email">* Your Email</label>
                    <input name="email" type="email" placeholder="email" onChange={handleSetEmail} />
                    <button type="submit" >Reset my password</button>
                </form>
            </div>
        );


    return (
        <div>

            {isSucceded}
        </div>
    )
}

export default Reset_password
