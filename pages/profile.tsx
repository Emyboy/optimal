import { ReduxStore } from "interfaces/redux.interface";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

type Props = {};

export default function profile({}: Props) {
    const { user } = useSelector((state: ReduxStore) => state.auth);
    const router = useRouter();

    useEffect(() => {
        if(!user){
            router.push("/login");
        }
    },[router])

    if (!user) {
        return <></>;
    }
    return <div>profile</div>;
}
