import React from 'react';
import Logo from "../../assets/logo/KiwiQuiz_logo_3.svg";
import "./Layout.css";

function Layout(props) {

    const baseClass = "layout";

    return (
        <div>
            <header>
                <nav className={`${baseClass}_nav`}>
                    <div className={`${baseClass}_user_container`}>
                        <div className={`${baseClass}_user_img_con`}>
                            <img className={`${baseClass}_user_img`} src="https://randomuser.me/api/portraits/lego/1.jpg" alt="userimage" />
                        </div>
                        <div className={`${baseClass}_user_email`}> user.name@email.com</div>
                    </div>
                    <div className={`${baseClass}_logo_container`}>
                        <img className={`${baseClass}_logo`} src={Logo} alt="userimage" />
                    </div>
                    <div className={`${baseClass}_button_container`}>
                        <button className={`${baseClass}_sign-out_btn`}>Sign Out</button>
                    </div>
                </nav>
            </header>
            {props.children}
        </div>
    )
}

export default Layout
