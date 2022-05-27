import React, { ButtonHTMLAttributes, ReactElement } from "react";
import { Spinner } from "react-bootstrap";

interface Props {
    loading?: boolean;
    btnProps?: ButtonHTMLAttributes<HTMLButtonElement>;
    children: ReactElement | ReactElement[] | String;
}

export default function _Button({ loading, btnProps, children }: Props) {
    return (
        <button
            type="submit"
            className="btn rounded me-auto btn-lg"
            disabled={loading}
            {...btnProps}
        >
            {loading ? (
                <div style={{ marginLeft: '30px', marginRight: '30px'}}>
                    <Spinner animation="border" size={"sm"} />
                </div>
            ) : (
                children
            )}
        </button>
    );
}
