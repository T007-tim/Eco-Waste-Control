import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <div className="gradient-eco text-white rounded-full w-32 h-32 mx-auto flex items-center justify-center">
          <span className="text-6xl font-bold">404</span>
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Page Not Found</h1>
          <p className="text-xl text-muted-foreground">
            The page you're looking for doesn't exist in our waste management system.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button 
            onClick={() => window.history.back()} 
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
          <Button 
            onClick={() => window.location.href = '/'} 
            className="gradient-forest text-white flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
