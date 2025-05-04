
import React from "react";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/contact/ContactForm";
import { LockIcon } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="bg-walker-accent py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-walker-primary mb-4">Let's Talk</h1>
              <p className="text-lg text-gray-700">
                Have questions or want to explore how we can help? Send us a message or book a free consultation.
                If you're a fellow advisor looking to collaborate, we'd love to connect.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex items-center justify-center mb-6">
                <LockIcon className="h-5 w-5 text-walker-primary mr-2" />
                <span className="text-sm text-gray-500">Your information is secure with us</span>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
