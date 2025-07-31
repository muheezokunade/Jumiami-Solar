import { Shield, Lock, Eye, Users, Database, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif animate-fade-in">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            How we protect and handle your personal information
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
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
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Jumiami Solar ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>
              <p className="text-gray-600">
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-[hsl(0,0%,10%)] mb-4">2.1 Personal Information</h3>
              <p className="text-gray-600 mb-4">We may collect the following personal information:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Property details and energy requirements</li>
                <li>Payment information and billing details</li>
                <li>Communication preferences and history</li>
                <li>Technical information about your device and usage</li>
              </ul>

              <h3 className="text-xl font-semibold text-[hsl(0,0%,10%)] mb-4">2.2 Automatically Collected Information</h3>
              <p className="text-gray-600 mb-4">When you visit our website, we automatically collect:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system information</li>
                <li>Pages visited and time spent</li>
                <li>Referral sources and search terms</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Provide and maintain our solar energy services</li>
                <li>Process orders and payments</li>
                <li>Communicate with you about services and updates</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li><strong>Service Providers:</strong> With trusted partners who help us deliver services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger or acquisition</li>
                <li><strong>Consent:</strong> When you explicitly authorize us to do so</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">5. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Secure data storage and transmission</li>
                <li>Employee training on data protection</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">6. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Objection:</strong> Object to processing of your data</li>
                <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">8. Third-Party Links</h2>
              <p className="text-gray-600 mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">9. Children's Privacy</h2>
              <p className="text-gray-600 mb-4">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">10. International Data Transfers</h2>
              <p className="text-gray-600 mb-4">
                Your information may be transferred to and processed in countries other than Nigeria. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">11. Changes to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">12. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-2"><strong>Jumiami Solar</strong></p>
                <p className="text-gray-600 mb-2">Email: privacy@jumiamisolar.com</p>
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