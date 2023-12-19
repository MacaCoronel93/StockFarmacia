import { Navigate } from 'react-router-dom';

const isAuthenticated = false; // Simula el estado de autenticación

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    // Si no está autenticado, redirigir a la página de login
    return <Navigate to="/login" />;
  }

  // Si está autenticado, renderizar los hijos del componente
  return children;
};

export default ProtectedRoute;