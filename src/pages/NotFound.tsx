
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-walker-accent px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-walker-primary mb-4">404</h1>
          <p className="text-xl text-gray-700 mb-8">
            Sorry, the page you're looking for cannot be found.
          </p>
          <Button 
            asChild 
            className="bg-walker-primary hover:bg-walker-primary/90"
          >
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
