
export interface User {
    id?: number;
    first_name: string;
    last_name: string;
    username: string;
    password?: string;
    blocked?: boolean;
    confirmed?: boolean;
    createdAt?: string;
    email: string;
    updatedAt?: string;
}

export interface AuthState {
    user: User | null;
}

export interface AuthDispatch {
    type: string;
    payload: AuthState;
}

