import { api } from "@/api/axios";
import { createContext, ReactNode, useEffect, useState } from "react";

interface IRegister {
    first_name: string;
    last_name: string;
    email: string;
    password: string
}

interface ILogin {
    email: string;
    password: string
}

interface AuthenticationContext {
    isAuthenticated: boolean;
    onSignup: (value: IRegister) => void;
    onLogin: (value: ILogin) => void;
}

interface AuthenticationProps {
    children: ReactNode;
}

export const AuthenticationContext = createContext<AuthenticationContext>({} as AuthenticationContext)

export const AuthenticationProvider = ({ children }: AuthenticationProps) => {

    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("accessToken"));

    useEffect(() => {
        setIsAuthenticated(!!localStorage.getItem("accessToken"));
    }, []);

    const onSignup = async (dataRegister: IRegister) => {
        try {
            await api.post('/users/signup', dataRegister);
        } catch (error: any) {
            if (error.response) {
                throw { message: error.response.data };
            }
            throw { message: error.message };
        }
    }

    const onLogin = async (dataLogin: ILogin) => {
        try {
            const response = await api.post('/auth/signin', dataLogin);
            const token = response.data.access_token;
            localStorage.setItem("accessToken", token);
            setIsAuthenticated(true);
        } catch (error: any) {
            if (error.response) {
                throw { message: error.response.data };
            }
            throw { message: error.message };
        }
    }

    return (
        <AuthenticationContext.Provider value= {{ isAuthenticated, onSignup, onLogin }
}> { children } </AuthenticationContext.Provider>
    )
}