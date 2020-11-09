


function Home(props) {

    const handleLogout = async event => {
        event.preventDefault();

        const payload = {};

        const response = await fetch("api/auth/logout", {
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(payload),

        });

        const result = await response;

        if (result.status === 200) {
            props.history.push("/login");
        }
    }
    return (
        <div>
            <h1>APP</h1>
            <button onClick={handleLogout}>LOG OUT</button>
        </div>
    )


}

export default Home
