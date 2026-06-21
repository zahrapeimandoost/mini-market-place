import { Navigate } from "react-router-dom";

interface Props {
    children : React.ReactNode;
}

function ProtectedRoute ({children}: Props) {
    if (!localStorage.getItem("IsLoggedIn")) 
        return <Navigate to="/login" />;
    return <>{children}</>
};
export default ProtectedRoute;