import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import { ReactNode, useEffect } from "react";

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    console.log(isAuthenticated, "token")

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    if (!isAuthenticated) {
        return null;
    }

    return <>{children}</>;
};

export default PrivateRoute;
