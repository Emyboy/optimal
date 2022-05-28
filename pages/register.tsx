import React from "react";
import Link from "next/link";
import RegisterForm from "@components/Auth/RegisterForm";
import { User } from "interfaces/auth.interface";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ReduxStore } from "interfaces/redux.interface";

type Props = {};

export default function register({}: Props) {
    const router = useRouter();
    const { user } = useSelector((state:ReduxStore) => state.auth)
    const dispatch = useDispatch();

    if(user){
        router.push('/')
        return <></>
    }

    return (
        <div>
            <div className="collection-header">
                <div className="collection-hero">
                    <div className="collection-hero__image"></div>
                    <div className="collection-hero__title-wrapper container">
                        {/* <h1 className="collection-hero__title">Login</h1>
                      <div className="breadcrumbs text-uppercase mt-1 mt-lg-2">
                          <a href="index.html" title="Back to the home page">
                              Home
                          </a>
                          <span>|</span>
                          <span className="fw-bold">Login</span>
                      </div> */}
                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <div className="login-register pt-2 pt-lg-5">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 mb-md-0">
                            <div className="inner">
                                <RegisterForm
                                    done={(e) => {
                                        dispatch({
                                            type: "SET_AUTH_STATE",
                                            payload: {
                                                user: e,
                                            },
                                        });
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="inner">
                                <h3 className="h4 text-uppercase">
                                    OLD CUSTOMER?
                                </h3>
                                <p>
                                    Registering for this site allows you to
                                    access your order status and history. We’ll
                                    get a new account set up for you in no time.
                                    For this will only ask you for information
                                    necessary to make the purchase process
                                    faster and easier
                                </p>
                                <Link href={`/register`}>
                                    <a className="btn rounded">Login Here</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
