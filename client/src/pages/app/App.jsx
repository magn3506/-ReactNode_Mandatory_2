
import "./App.css";

function Home(props) {

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

    return (
        <div>
            <h1>Hello "INSERT EMAIL" YOU ARE NOW LOGGET IN</h1>
            <button onClick={handleLogout}>LOG OUT</button>
            <div>
                GAME
            </div>
        </div>
    )


}

export default Home
