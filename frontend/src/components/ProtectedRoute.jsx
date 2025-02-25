// components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const token = localStorage.getItem('authToken');
    return token ? children : <Navigate to="/Login" />;
}

export default ProtectedRoute;