"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

const PrivacyPolicy = () => {
  const router = useRouter();

  useEffect(() => {
    // Scroll to top on page load or route change
    window.scrollTo(0, 0);
  }, [router.pathname]); // Dependency ensures scroll on route change

  return (
    <main style={{backgroundColor:'white',padding:'10px'}}>
      <Head>
        <title>Privacy Policy | Capital Investments Trading Fund</title>
        <meta
          name="description"
          content="Learn how Capital Investments Trading Fund collects, uses, discloses, and safeguards your information in our Privacy Policy."
        />
        <meta
          property="og:title"
          content="Privacy Policy | Capital Investments Trading Fund"
        />
        <meta
          property="og:description"
          content="Learn how Capital Investments Trading Fund collects, uses, discloses, and safeguards your information in our Privacy Policy."
        />
        <meta
          property="og:url"
          content="https://yourdomain.com/privacy-policy"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="bg-gray-50 min-h-screen" style={{maxWidth:'xl'}}>
        {/* Main Content */}
        <main className="max-w-5xl mx-auto bg-white  my-8 overflow-hidden" style={{ padding: "50px",maxWidth:'80%' }}>
          {/* Last Updated Section */}
          <div className="bg-blue-50 p-6 border-b border-blue-100">
            <p className="text-sm text-blue-800">Last Updated: April 4, 2025</p>
          </div>

          {/* Introduction */}
          <div className="p-6 sm:p-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">Introduction</h2>
              <p className="mb-6 text-gray-700">
              Capital Investments Trading Fund (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you engage with our trading fund services, website, and mobile application.
              </p>
              <p className="mb-6 text-gray-700">
                Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>

              {/* Information We Collect */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Information We Collect</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                  <h4 className="font-medium text-gray-900 mb-2">Personal Information</h4>
                  <p className="text-gray-700">We may collect personal information that you voluntarily provide when opening an account, including but not limited to your name, email address, phone number, postal address, date of birth, social security number, tax identification number, bank account information, and government-issued identification.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                  <h4 className="font-medium text-gray-900 mb-2">Financial Information</h4>
                  <p className="text-gray-700">We collect information about your financial status, investment experience, investment objectives, and transaction history to comply with regulatory requirements and to provide appropriate investment recommendations.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-medium text-gray-900 mb-2">Automatically Collected Information</h4>
                  <p className="text-gray-700">When you access our platform, we automatically collect device information, log data, and usage information through cookies and similar technologies.</p>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">How We Use Your Information</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Process and manage your investment account</li>
                  <li>Comply with legal and regulatory obligations</li>
                  <li>Assess your financial needs and provide appropriate investment recommendations</li>
                  <li>Communicate with you about your account, transactions, and our services</li>
                  <li>Improve our platform and develop new features</li>
                  <li>Detect and prevent fraud, unauthorized activities, and illegal behavior</li>
                </ul>
              </div>

              {/* Disclosure of Your Information */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Disclosure of Your Information</h3>
                <p className="mb-4 text-gray-700">
                  We may share your information with:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Service Providers</h4>
                    <p className="text-gray-700 text-sm">Third-party vendors who perform services on our behalf</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Financial Partners</h4>
                    <p className="text-gray-700 text-sm">Custodians, brokers, and other financial institutions</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Regulatory Authorities</h4>
                    <p className="text-gray-700 text-sm">Government and regulatory bodies as required by law</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Legal Situations</h4>
                    <p className="text-gray-700 text-sm">In response to a legal process or request</p>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Data Security</h3>
                <p className="mb-4 text-gray-700">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, accidental loss, damage, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="text-green-800 font-medium">
                    We maintain strict security standards and procedures with respect to your information, including:
                  </p>
                  <ul className="mt-2 list-disc pl-6 text-gray-700 space-y-1">
                    <li>Advanced encryption for data in transit and at rest</li>
                    <li>Regular security assessments and penetration testing</li>
                    <li>Employee training on data privacy and security practices</li>
                    <li>Access controls to limit data access to authorized personnel</li>
                  </ul>
                </div>
              </div>

              {/* Your Rights */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Your Rights</h3>
                <p className="mb-4 text-gray-700">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead>
                      <tr className="bg-gray-600">
                        <th className="py-2 px-4 border-b text-left">Right</th>
                        <th className="py-2 px-4 border-b text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-400">
                        <td className="py-2 px-4 border-b font-medium">Access</td>
                        <td className="py-2 px-4 border-b">Request a copy of your personal information</td>
                      </tr>
                      <tr className="bg-gray-400">
                        <td className="py-2 px-4 border-b font-medium">Correction</td>
                        <td className="py-2 px-4 border-b">Request correction of inaccurate information</td>
                      </tr>
                      <tr className="bg-gray-400">
                        <td className="py-2 px-4 border-b font-medium">Deletion</td>
                        <td className="py-2 px-4 border-b">Request deletion of your information</td>
                      </tr>
                      <tr className="bg-gray-400">
                        <td className="py-2 px-4 border-b font-medium">Restriction</td>
                        <td className="py-2 px-4 border-b">Request restriction of processing</td>
                      </tr>
                      <tr className="bg-gray-400">
                        <td className="py-2 px-4 border-b font-medium">Portability</td>
                        <td className="py-2 px-4 border-b">Request transfer of your information</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Contact Us */}
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Contact Us</h3>
                <div className="bg-blue-900 text-black p-6 rounded-lg">
                  <p className="mb-4">
                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-blue-200 mb-1">Email</h4>
                      <p>info@DeepanIndia.com</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-200 mb-1">Phone</h4>
                      <p>04448680075</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-200 mb-1">Address</h4>
                      <p>No 145, 102, Gollavar Agraharam Rd, above ICICI bank, Kanniyappan Colony, Sanjeevarayanpet, Washermanpet, Chennai, Tamil Nadu 600021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
};

export default PrivacyPolicy;