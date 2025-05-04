
import React from "react";
import Layout from "@/components/layout/Layout";
import { LockIcon } from "lucide-react";

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="flex justify-center mb-4">
                <LockIcon className="h-10 w-10 text-walker-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-walker-primary mb-4">Privacy Policy</h1>
            </div>
            
            <div className="space-y-6 text-gray-800">
              <p className="text-lg">
                Everything you share with us — from conversations to documents — is treated with absolute confidentiality.
              </p>
              
              <p className="text-lg font-semibold text-walker-primary">
                We do not sell or share your data. Ever.
              </p>
              
              <p className="text-lg">
                All digital files are stored in secure environments with full encryption and activity logs.
                We follow best practices for Canadian insurance compliance, document handling, and privacy law.
              </p>
              
              <p className="text-lg">
                We understand the trust that clients and professionals place in us, and we work every day to earn and maintain it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
