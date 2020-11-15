import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/KiwiQuiz_Logo_2.svg"
import "./Signup.css";
function Signup(props) {

    // STATE
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSetEmail = event => {
        setEmail(event.target.value);
    }

    const handleSetPassword = event => {
        setPassword(event.target.value);
    }

    const handleSetRepeatPassword = event => {
        setRepeatPassword(event.target.value);
    }

    const isPasswordsValidated = () => {

        if (password.length === 0 || repeatPassword.length === 0 || email.length === 0) {
            setErrorMsg("PLEASE FILL OUT THE WHOLE FORM !");
            return false;
        }

        if (password !== repeatPassword) {
            setErrorMsg("PASSWORDS MUST MATCH !!");
            return false;
        }

        setErrorMsg("");
        return true;
    };

    const handleSubmitForm = async event => {
        event.preventDefault();

        if (!isPasswordsValidated()) {
            console.log("ERROR");
            return;
        }


        const payload = {
            email: email,
            password: password
        };


        const response = await fetch("api/user/", {
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(payload),

        });

        const result = await response;


        if (result.status !== 200) {
            console.log(result);
            console.log("ERROR IN FRONT");
        }

        if (result.status === 200) {
            props.history.push("/login");
        }

    }


    const baseClass = "signup";

    return (
        <div className={`${baseClass}_content_wrapper`}>
            <div className={`${baseClass}_logo_container`}>
                <img className={`${baseClass}_logo`} src={Logo} alt="logo" />
            </div>
            <h1 className={`${baseClass}_title`} >SIGN UP</h1>
            <div className={`${baseClass}_line`} ></div>
            <form className={`${baseClass}_form`} onSubmit={handleSubmitForm}>
                <div className={`${baseClass}_error-msg`} >{errorMsg}</div>
                <input className={`${baseClass}_email ${baseClass}_input`} type="email" placeholder="Email" onChange={handleSetEmail} />
                <input className={`${baseClass}_password ${baseClass}_input`} type="text" placeholder="Password" onChange={handleSetPassword} />
                <input className={`${baseClass}_repeat_password ${baseClass}_input`} type="text" placeholder="Retype Password" onChange={handleSetRepeatPassword} />
                <button className={`${baseClass}_submit-button`} type="submit" >Sign up</button>
                <Link className={`${baseClass}_link`} to="/login">Log in</Link>
            </form>

        </div>
    )
}

export default Signup
