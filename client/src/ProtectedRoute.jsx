import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children, isAuthRoute}) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    // If the user is authenticated and this is an auth route, redirect to /user
    if (isAuthenticated && isAuthRoute) {
        return <Navigate to="/user" />;
    }

    // If the user is not authenticated and this is a protected route, redirect to /login
    if (!isAuthenticated && !isAuthRoute) {
        return <Navigate to="/login" />;
    }

    // Otherwise, render the children components
    return children;
}
