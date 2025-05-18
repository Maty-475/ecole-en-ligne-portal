
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Check if the path contains /school/ to handle direct access to school pages
    if (location.pathname.includes('/school/')) {
      const schoolId = location.pathname.split('/school/')[1];
      // Redirect to the school page if there's an ID
      if (schoolId) {
        navigate(`/school/${schoolId}`);
      }
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page introuvable</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
