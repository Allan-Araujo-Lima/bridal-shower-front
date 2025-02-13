import { useContext } from "react";
import { AuthenticationContext } from "../context/authentication";

const useAuth = () => {
    const context = useContext(AuthenticationContext);

    if (context === undefined)
        throw new Error("useAuth must be used within a AuthProvider");

    return context;
};

export default useAuth;