import { Cookie, Settings, Shield, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CookiePolicy() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif animate-fade-in">
            Cookie Policy
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            How we use cookies to improve your experience
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <Cookie className="h-5 w-5" />
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
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">1. What Are Cookies?</h2>
              <p className="text-gray-600 mb-4">
                Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
              </p>
              <p className="text-gray-600">
                Cookies do not contain any personal information that can identify you individually, but they may contain information that allows us to recognize your device and remember certain information about your visit.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">2. How We Use Cookies</h2>
              <p className="text-gray-600 mb-4">We use cookies for the following purposes:</p>
              
              <h3 className="text-xl font-semibold text-[hsl(0,0%,10%)] mb-4">2.1 Essential Cookies</h3>
              <p className="text-gray-600 mb-4">These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Session management and security</li>
                <li>Load balancing and performance</li>
                <li>Basic website functionality</li>
              </ul>

              <h3 className="text-xl font-semibold text-[hsl(0,0%,10%)] mb-4">2.2 Analytics Cookies</h3>
              <p className="text-gray-600 mb-4">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Page views and time spent on site</li>
                <li>Traffic sources and user behavior</li>
                <li>Website performance and errors</li>
              </ul>

              <h3 className="text-xl font-semibold text-[hsl(0,0%,10%)] mb-4">2.3 Functional Cookies</h3>
              <p className="text-gray-600 mb-4">These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Language and region preferences</li>
                <li>Form data and user inputs</li>
                <li>Personalized content and recommendations</li>
              </ul>

              <h3 className="text-xl font-semibold text-[hsl(0,0%,10%)] mb-4">2.4 Marketing Cookies</h3>
              <p className="text-gray-600 mb-4">These cookies are used to track visitors across websites to display relevant advertisements.</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Social media integration</li>
                <li>Advertising and retargeting</li>
                <li>Campaign effectiveness tracking</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">3. Types of Cookies We Use</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-l-4 border-[hsl(19,100%,58%)]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-[hsl(0,0%,10%)] mb-2">Session Cookies</h4>
                    <p className="text-gray-600 text-sm">Temporary cookies that are deleted when you close your browser. They help maintain your session and security while browsing our site.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-[hsl(47,100%,63%)]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-[hsl(0,0%,10%)] mb-2">Persistent Cookies</h4>
                    <p className="text-gray-600 text-sm">Cookies that remain on your device for a set period or until you delete them. They remember your preferences and settings.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-[hsl(19,100%,58%)]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-[hsl(0,0%,10%)] mb-2">First-Party Cookies</h4>
                    <p className="text-gray-600 text-sm">Cookies set by our website directly. They help us provide core functionality and improve user experience.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-[hsl(47,100%,63%)]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-[hsl(0,0%,10%)] mb-2">Third-Party Cookies</h4>
                    <p className="text-gray-600 text-sm">Cookies set by external services we use, such as Google Analytics, social media platforms, and advertising networks.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">4. Third-Party Cookies</h2>
              <p className="text-gray-600 mb-4">We use the following third-party services that may set cookies:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                <li><strong>Advertising Networks:</strong> For relevant advertising and marketing campaigns</li>
                <li><strong>Payment Processors:</strong> For secure payment processing (if applicable)</li>
              </ul>
              <p className="text-gray-600">
                These third-party services have their own privacy policies and cookie practices. We encourage you to review their policies for more information.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">5. Managing Your Cookie Preferences</h2>
              <p className="text-gray-600 mb-4">You have several options for managing cookies:</p>
              
              <h3 className="text-xl font-semibold text-[hsl(0,0%,10%)] mb-4">5.1 Browser Settings</h3>
              <p className="text-gray-600 mb-4">Most web browsers allow you to control cookies through their settings. You can:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Block all cookies</li>
                <li>Allow only first-party cookies</li>
                <li>Delete existing cookies</li>
                <li>Set preferences for specific websites</li>
              </ul>

              <h3 className="text-xl font-semibold text-[hsl(0,0%,10%)] mb-4">5.2 Cookie Consent</h3>
              <p className="text-gray-600 mb-4">
                When you first visit our website, you'll see a cookie consent banner. You can choose which types of cookies you want to accept or reject.
              </p>

              <h3 className="text-xl font-semibold text-[hsl(0,0%,10%)] mb-4">5.3 Opt-Out Links</h3>
              <p className="text-gray-600 mb-4">
                For third-party cookies, you can often opt out directly through the service provider's website or through industry opt-out programs.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">6. Impact of Disabling Cookies</h2>
              <p className="text-gray-600 mb-4">
                While you can disable cookies, doing so may affect your experience on our website:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Some features may not work properly</li>
                <li>You may need to re-enter information repeatedly</li>
                <li>Personalized content may not be available</li>
                <li>Website performance may be affected</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">7. Cookie Retention Period</h2>
              <p className="text-gray-600 mb-4">Different types of cookies are stored for different periods:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Typically stored for 1-2 years</li>
                <li><strong>Analytics Cookies:</strong> Usually stored for 1-2 years</li>
                <li><strong>Marketing Cookies:</strong> May be stored for up to 2 years</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">8. Updates to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[hsl(0,0%,10%)] mb-6">9. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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