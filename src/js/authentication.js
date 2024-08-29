
import { getAuth } from "firebase/auth";


export class Authentication
{
    constructor(app)
    {
        this.app = app;
        this.auth = getAuth(this.app);
    }


    login(email, password, remember)
    {
        console.log("LOGIN");
        console.log(email, password, remember);
    }

    signup(email, password)
    {
        console.log("SIGNUP");
        console.log(email, password);
    }
};