
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="bg-walker-accent py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-walker-primary mb-6">
              Your Partner in Insurance Protection
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Walker Insurance provides professional insurance services tailored to your specific needs.
              Our experienced team is here to help you navigate the complexities of insurance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-walker-primary hover:bg-walker-primary/90 text-white font-medium px-8 py-3"
              >
                <Link to="/contact">Get a Consultation</Link>
              </Button>
              <Button 
                variant="outline"
                asChild
                className="border-walker-primary text-walker-primary hover:bg-walker-accent font-medium px-8 py-3"
              >
                <Link to="/privacy-policy">Learn About Our Privacy</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-walker-primary mb-12">
              Why Choose Walker Insurance
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-walker-accent p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-walker-primary mb-3">Experienced Team</h3>
                <p className="text-gray-700">With years of industry experience, we provide expert guidance and solutions.</p>
              </div>
              
              <div className="bg-walker-accent p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-walker-primary mb-3">Personalized Service</h3>
                <p className="text-gray-700">We take time to understand your unique needs and craft tailored solutions.</p>
              </div>
              
              <div className="bg-walker-accent p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-walker-primary mb-3">Total Privacy</h3>
                <p className="text-gray-700">Your information is always handled with the utmost care and confidentiality.</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                asChild
                className="bg-walker-primary hover:bg-walker-primary/90 text-white font-medium px-8 py-3"
              >
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
