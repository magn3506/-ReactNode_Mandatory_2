import Cookies from "js-cookie";

const auth = {
    isAuthenticated: () => {
        const userID = Cookies.get("userID");
        if (userID) {
            return true;
        } else {
            return false;
        }
    }
}

export default auth;