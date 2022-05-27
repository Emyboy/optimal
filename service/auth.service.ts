import axios from "axios";
import { User } from "interfaces/auth.interface";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default class AuthService {
    static async registerUser(authData: User) {
        const res = await axios(API_URL + `/auth/local/register`, {
            method: "POST",
            data: authData,
        });
        return res;
    }
}
