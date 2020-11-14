import Cookies from "js-cookie";

const auth = {
    isAuthenticated: () => {
        const isUserAuth_cookie = Cookies.get("isUserAuth_kiwiQuiz");

        if (isUserAuth_cookie === "true") {
            return true;
        } else {
            return false;
        }
    },
    isResetPasswordAuthenticated: () => {
        const resetPasswordID = Cookies.get("resetPasswordID");
        if (resetPasswordID) {
            return true;
        } else {
            return false;
        }
    }

}

export default auth;