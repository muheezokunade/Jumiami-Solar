import { FileText, Scale, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif animate-fade-in">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Legal terms and conditions for using our services
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Last updated: January 15, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using the Jumiami Solar website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-600">
                These Terms of Service ("Terms") govern your use of our website, mobile applications, and services (collectively, the "Services") provided by Jumiami Solar ("we," "us," or "our").
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">2. Description of Services</h2>
              <p className="text-gray-600 mb-4">Jumiami Solar provides the following services:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Solar panel installation and maintenance</li>
                <li>Solar inverter and battery system installation</li>
                <li>Energy consultation and system design</li>
                <li>Website information and online consultation</li>
                <li>Customer support and technical assistance</li>
                <li>Warranty and after-sales services</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">3. User Accounts and Registration</h2>
              <p className="text-gray-600 mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
              <p className="text-gray-600 mb-4">
                You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account, whether or not you have authorized such activities or actions.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">4. Intellectual Property Rights</h2>
              <p className="text-gray-600 mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive property of Jumiami Solar and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
              <p className="text-gray-600 mb-4">
                Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">5. User Conduct</h2>
              <p className="text-gray-600 mb-4">You agree not to use the Service to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Use the Service for any commercial purpose without authorization</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">6. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                All payments for our services are due as specified in your service agreement. We accept payment through bank transfers, cash, and other approved payment methods.
              </p>
              <p className="text-gray-600 mb-4">
                Prices are subject to change without notice. We reserve the right to modify or discontinue any service at any time.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">7. Warranty and Service Guarantees</h2>
              <p className="text-gray-600 mb-4">
                We provide warranties on our products and services as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li><strong>Solar Panels:</strong> 5-year manufacturer warranty</li>
                <li><strong>Inverters:</strong> 10-15 year warranty</li>
                <li><strong>Batteries:</strong> 5-10 year warranty</li>
                <li><strong>Workmanship:</strong> 5-year installation warranty</li>
              </ul>
              <p className="text-gray-600">
                Warranty claims must be submitted in writing within the warranty period. We will repair or replace defective products at our discretion.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">8. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                In no event shall Jumiami Solar, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
              </p>
              <p className="text-gray-600">
                Our total liability to you for any claims arising from the use of our services shall not exceed the amount paid by you for the specific service in question.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">9. Indemnification</h2>
              <p className="text-gray-600 mb-4">
                You agree to defend, indemnify, and hold harmless Jumiami Solar and its affiliates from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the Service or violation of these Terms.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">10. Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices regarding the collection and use of your personal information.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">11. Termination</h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
              <p className="text-gray-600">
                If you wish to terminate your account, you may simply discontinue using the Service. All provisions of the Terms which by their nature should survive termination shall survive termination.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">12. Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These Terms shall be interpreted and governed by the laws of Nigeria, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">13. Dispute Resolution</h2>
              <p className="text-gray-600 mb-4">
                Any disputes arising from these Terms or your use of our services shall be resolved through good faith negotiations. If such negotiations fail, disputes shall be resolved through arbitration in accordance with Nigerian law.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">14. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p className="text-gray-600">
                What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">15. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-2"><strong>Jumiami Solar</strong></p>
                <p className="text-gray-600 mb-2">Email: legal@jumiamisolar.com</p>
                <p className="text-gray-600 mb-2">Phone: +234 811 888 7425</p>
                <p className="text-gray-600">Address: Ikota Shopping Complex, VGC Ajah, Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 