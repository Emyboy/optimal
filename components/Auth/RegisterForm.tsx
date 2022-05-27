import { User } from "interfaces/auth.interface";
import React, { FormEvent, useEffect, useState } from "react";
import _Button from "@components/Button";
import AuthService from "service/auth.service";
import { setAuthState } from "@redux/actions/auth.action";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

type Props = {
    done: (e: User) => void;
};

export default function RegisterForm({}: Props) {
    const defaultErrorTypes = {
        email: "",
        user: "",
        password: "",
        first_name: "",
        last_name: "",
    };
    const [first_name, setFirstName] = useState<string>("");
    const [last_name, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const [errorType, setErrorType] = useState(defaultErrorTypes);

    const dispatch = useDispatch();

    const validated = () => {
        if (!first_name) {
            setErrorType({
                ...errorType,
                first_name: "First Name is required",
            });
            return false;
        }
        if (!last_name) {
            setErrorType({ ...errorType, last_name: "Last Name is required" });
            return false;
        }
        if (!email) {
            setErrorType({ ...errorType, email: "Email is required" });
            return false;
        }
        if (!password) {
            setErrorType({ ...errorType, password: "Password is required" });
            return false;
        }

        return true;
    };

    const registerUser = async (e: FormEvent<HTMLElement>) => {
        try {
            e.preventDefault();
            setLoading(true);
            if (!validated()) {
                return;
            }
            const data = {
                first_name,
                last_name,
                email,
                username: String(Date.now()),
                password,
            };
            const res = await AuthService.registerUser(data);
            dispatch({
                type: "SET_AUTH_STATE",
                payload: {
                    user: res.data?.user,
                },
            });
            Cookies.set("token", res.data?.jwt);
            toast.success("Welcome to Optimal")
        } catch (error: any) {
            if (error?.response?.data?.error?.message) {
                toast.error(error.response.data.error.message);
            }
            return Promise.reject(error);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setErrorType(defaultErrorTypes);
        }, 17000);
    }, [defaultErrorTypes]);

    return (
        <form onSubmit={registerUser} className="customer-form">
            <h3 className="h4 text-uppercase">REGISTERED CUSTOMERS</h3>
            <p>If you have an account with us, please log in.</p>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                        <label htmlFor="FirstName">
                            First Name <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            id="FirstName"
                            className={
                                errorType.first_name ? `border-danger` : ``
                            }
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <small className="text-danger fw-bold">
                            {errorType.first_name}
                        </small>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                        <label htmlFor="LastName">
                            Last Name <span className="required">*</span>
                        </label>
                        <input
                            type="name"
                            name="last_name"
                            placeholder="Last Name"
                            id="LastName"
                            className={
                                errorType.last_name ? `border-danger` : ``
                            }
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <small className="text-danger fw-bold">
                            {errorType.last_name}
                        </small>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                        <label htmlFor="CustomerEmail">
                            Email <span className="required">*</span>
                        </label>
                        <input
                            type="email"
                            name="customer[email]"
                            placeholder="Email"
                            id="CustomerEmail"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                        <label htmlFor="CustomerPassword">
                            Password <span className="required">*</span>
                        </label>
                        <input
                            type="password"
                            name="customer[password]"
                            placeholder="Password"
                            id="CustomerPassword"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="text-left col-12 col-sm-12 col-md-12 col-lg-12">
                    <p className="d-flex-center">
                        <_Button
                            btnProps={{
                                type: "submit",
                            }}
                            // loading={true}
                        >
                            {"Register"}
                        </_Button>
                        <a href="forgot-password.html">Forgot your password?</a>
                    </p>
                </div>
            </div>
        </form>
    );
}
