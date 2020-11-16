import React from 'react';
import Logo from "../../assets/logo/KiwiQuiz_logo_3.svg";
import "./Layout.css";

function Layout(props) {


    const handleLogout = async event => {
        event.preventDefault();

        const response = await fetch("api/auth/logout", {
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({}),

        });

        const result = await response;

        if (result.status === 200) {
            props.history.push("/login");
        }
    }



    const baseClass = "layout";

    const { userEmail } = props;

    return (
        <div>
            <div className={`${baseClass}_nav_wrapper`}>
                <div className={`${baseClass}_nav_container`}>
                    <div className={`${baseClass}_user_container`}>
                        <div className={`${baseClass}_user_img_con`}>
                            <img className={`${baseClass}_user_img`} src="https://randomuser.me/api/portraits/lego/1.jpg" alt="userimage" />
                        </div>
                        <div className={`${baseClass}_user_email`}> *{userEmail && userEmail}</div>
                    </div>
                    <div className={`${baseClass}_logo_container`}>
                        <img className={`${baseClass}_logo`} src={Logo} alt="userimage" />
                    </div>
                    <div className={`${baseClass}_button_container`}>
                        <button className={`${baseClass}_sign-out_btn`} onClick={handleLogout} >Sign Out</button>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default Layout
