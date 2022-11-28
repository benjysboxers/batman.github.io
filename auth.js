class Auth{
    constructor() {
        const auth = localStorage.getItem("auth");
        this.validateAuth(auth);
    }

    validateAuth(auth) {
        if (auth != 1) {
            windows.location.replace("/");
        } else {
        }
    }

    logout() {
        localStorage.removeItem("auth");
        windows.location.replace("/");
    }
}
