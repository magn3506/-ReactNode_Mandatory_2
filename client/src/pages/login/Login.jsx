import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/KiwiQuiz_Logo.svg"
import "./Login.css";


function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSetEmail = event => {
        setEmail(event.target.value);
    }

    const handleSetPassword = event => {
        setPassword(event.target.value);
    }


    const handleSubmitForm = async event => {
        event.preventDefault();


        const payload = {
            email: email,
            password: password
        };


        const response = await fetch("api/auth/login", {
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(payload),

        });

        const result = await response;

        if (result.status === 200) {
            props.history.push("/app");
        }

    }

    const baseClass = "login";

    return (
        <div className={`${baseClass}_content_wrapper`}>
            <div className={`${baseClass}_logo_container`}>
                <img className={`${baseClass}_logo`} src={Logo} alt="logo" />
            </div>
            <div className={`${baseClass}_line`}></div>
            <form className={`${baseClass}_form`} onSubmit={handleSubmitForm}>
                <input className={`${baseClass}_email input`} type="email" placeholder="Email" onChange={handleSetEmail} />
                <input className={`${baseClass}_password input`} type="text" placeholder="Password" onChange={handleSetPassword} />
                <Link className={`${baseClass}_link`} to="/forgot_password">Forgot Password?</Link>
                <button className={`${baseClass}_submit-button`} type="submit" >Login</button>
                <Link className={`${baseClass}_link`} to="/signup">Sign up</Link>

            </form>
        </div>
    )
}

export default Login;
