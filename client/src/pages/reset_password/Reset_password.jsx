import React, { useState } from 'react';
import { useParams } from "react-router-dom";

function Reset_password(props) {

    // STATE
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    // GET PARAMS
    const { resetToken } = useParams();

    // HANDLERS
    const handleSetPassword = event => {
        setPassword(event.target.value);
    }

    const handleSetRepeatPassword = event => {
        setRepeatPassword(event.target.value);
    }

    const handleSubmitForm = async event => {
        event.preventDefault();

        if (!isPasswordsValidated()) {
            console.log("ERRO");
            return;
        }


        const payload = {
            newPassword: repeatPassword,
            resetToken: resetToken
        };

        const response = await fetch("/api/user/resetUserpassword", {
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: "PATCH",
            body: JSON.stringify(payload),

        });

        const result = await response;

        if (result.status === 200) {
            props.history.push("/login");
        }

    }

    const isPasswordsValidated = () => {

        if (password !== repeatPassword) {
            setErrorMsg("PASSWORDS MUST MATCH");
            return false;
        }

        setErrorMsg("SUCCES");
        return true;
    };


    return (
        <div>
            <h1>RESET PASSWORD</h1>
            <form onSubmit={handleSubmitForm}>
                <input type="text" placeholder="password" onChange={handleSetPassword} />
                <input type="text" placeholder="repeat password" onChange={handleSetRepeatPassword} />
                {errorMsg && <div>{errorMsg}</div>}
                <button type="submit">RESET</button>
            </form>
        </div>
    )
}

export default Reset_password
