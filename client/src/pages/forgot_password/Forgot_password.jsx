import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Forgot_password.css";


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

    const baseClass = "forgot_password";


    const isSucceded = isSucces ?
        (
            <div className={`${baseClass}_content_wrapper`}>
                <h1 className={`${baseClass}_title`} >SUCCES!</h1>
                <p className={`${baseClass}_text`}  >We have send an email to {email}</p>
                <p className={`${baseClass}_text`} >Rember to tjek your spam folder</p>
            </div>
        ) :
        (
            <div className={`${baseClass}_content_wrapper`}>
                <h1 className={`${baseClass}_title`} >Forgot your password?</h1>
                <p className={`${baseClass}_text`}  >Enter your email address and we will email you a link to reset your password.</p>
                <div className={`${baseClass}_line`} ></div>
                <form className={`${baseClass}_form`} onSubmit={handleSubmitForm}>
                    <input className={`${baseClass}_email ${baseClass}_input `} name="email" type="email" placeholder="Your Email" onChange={handleSetEmail} />
                    <button className={`${baseClass}_submit-button`} type="submit" >Reset</button>
                </form>
                <div className={`${baseClass}_link_container`}>
                    <Link className={`${baseClass}_link`} to="/login">Login</Link>
                    <Link className={`${baseClass}_link`} to="/signup">Sign up</Link>
                </div>

            </div>
        );


    return (
        <div>
            {isSucceded}
        </div>
    )
}

export default Reset_password



