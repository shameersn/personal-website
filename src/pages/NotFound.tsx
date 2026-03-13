import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-xl text-muted-foreground mb-2">This page doesn't exist or may have been moved.</p>
        <p className="text-muted-foreground mb-6">You can head back to the homepage or use the link below.</p>
        <a href="/" className="text-primary hover:text-primary/80 underline underline-offset-4 font-medium">
          Back to homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
