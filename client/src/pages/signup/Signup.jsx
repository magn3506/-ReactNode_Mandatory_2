import React, { useState } from "react";
import { Link } from "react-router-dom";

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

        if (password !== repeatPassword) {
            setErrorMsg("PASSWORDS MUST MATCH");
            return false;
        }

        setErrorMsg("SUCCES");
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

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <input type="email" placeholder="email" onChange={handleSetEmail} />
                <input type="text" placeholder="password" onChange={handleSetPassword} />
                <input type="text" placeholder="repeat password" onChange={handleSetRepeatPassword} />
                <button type="submit" >Sign up</button>
                <div>{errorMsg}</div>
            </form>
            <Link to="/login">Log in</Link>

        </div>
    )
}

export default Signup
