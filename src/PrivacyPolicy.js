import React, { useEffect } from 'react';
import { setPageMeta } from './utils/seo'; 
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ArrowLeft, Shield, Lock, Mail, FileText, Globe, Clock, Users, Eye, Bell, Scale, MapPin, HelpCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  // Ensure page starts at top when visited
  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta({
      title: 'Privacy Policy | Derek Gembus',
      description: 'Privacy policy for DerekGembus.com covering contact/quote forms, payments, and data handling.',
      canonicalPath: '/privacy'
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="pt-24 p-6 md:p-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="mb-6 text-gray-400 text-lg">Last updated: January 10, 2026</p>

          {/* Introduction */}
          <div className="mb-10 text-gray-300 leading-relaxed">
            <p className="mb-4">
              This Privacy Notice for Derek Gembus ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Visit our website at <a href="https://www.derekgembus.com/" className="text-purple-400 hover:underline">https://www.derekgembus.com/</a> or any website of ours that links to this Privacy Notice</li>
              <li>Use Derek Gembus. I provide custom software development services, including website design, mobile app creation, data analytics, and IT automation consulting, alongside related hosting and maintenance support.</li>
              <li>Engage with us in other related ways, including any marketing or events</li>
            </ul>
            <p>
              <strong className="text-white">Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:support@derekgembus.com" className="text-purple-400 hover:underline">support@derekgembus.com</a>.
            </p>
          </div>

          {/* Summary of Key Points */}
          <section className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-purple-500" />
              Summary of Key Points
            </h2>
            <p className="text-gray-300 mb-4 italic">
              This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by reading the full sections below.
            </p>
            <div className="space-y-4 text-gray-300">
              <p><strong className="text-white">What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
              <p><strong className="text-white">Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</p>
              <p><strong className="text-white">Do we collect any information from third parties?</strong> We do not collect any information from third parties.</p>
              <p><strong className="text-white">How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
              <p><strong className="text-white">In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.</p>
              <p><strong className="text-white">How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>
              <p><strong className="text-white">What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>
              <p><strong className="text-white">How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2 text-purple-400">
              <li><a href="#section1" className="hover:underline">What Information Do We Collect?</a></li>
              <li><a href="#section2" className="hover:underline">How Do We Process Your Information?</a></li>
              <li><a href="#section3" className="hover:underline">What Legal Bases Do We Rely On To Process Your Personal Information?</a></li>
              <li><a href="#section4" className="hover:underline">When And With Whom Do We Share Your Personal Information?</a></li>
              <li><a href="#section5" className="hover:underline">Do We Use Cookies And Other Tracking Technologies?</a></li>
              <li><a href="#section6" className="hover:underline">How Long Do We Keep Your Information?</a></li>
              <li><a href="#section7" className="hover:underline">How Do We Keep Your Information Safe?</a></li>
              <li><a href="#section8" className="hover:underline">Do We Collect Information From Minors?</a></li>
              <li><a href="#section9" className="hover:underline">What Are Your Privacy Rights?</a></li>
              <li><a href="#section10" className="hover:underline">Controls For Do-Not-Track Features</a></li>
              <li><a href="#section11" className="hover:underline">Do United States Residents Have Specific Privacy Rights?</a></li>
              <li><a href="#section12" className="hover:underline">Do Other Regions Have Specific Privacy Rights?</a></li>
              <li><a href="#section13" className="hover:underline">Do We Make Updates To This Notice?</a></li>
              <li><a href="#section14" className="hover:underline">How Can You Contact Us About This Notice?</a></li>
              <li><a href="#section15" className="hover:underline">How Can You Review, Update, Or Delete The Data We Collect From You?</a></li>
            </ol>
          </section>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            
            {/* Section 1 */}
            <section id="section1">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-blue-400" />
                1. What Information Do We Collect?
              </h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">Personal information you disclose to us</h3>
              <p className="mb-4 italic text-gray-400">In Short: We collect personal information that you provide to us.</p>
              <p className="mb-4">
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>
              <p className="mb-4">
                <strong className="text-white">Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>names</li>
                <li>phone numbers</li>
                <li>email addresses</li>
              </ul>
              <p className="mb-4"><strong className="text-white">Sensitive Information.</strong> We do not process sensitive information.</p>
              <p className="mb-4">
                <strong className="text-white">Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by Stripe, PayPal, Venmo, Zelle, and Cash App. You may find their privacy notice links here:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><a href="https://stripe.com/privacy" target="_blank" rel="noreferrer" className="text-purple-400 hover:underline">Stripe Privacy Policy</a></li>
                <li><a href="https://www.paypal.com/us/legalhub/privacy-full" target="_blank" rel="noreferrer" className="text-purple-400 hover:underline">PayPal Privacy Policy</a></li>
                <li><a href="https://venmo.com/legal/us-privacy-policy/" target="_blank" rel="noreferrer" className="text-purple-400 hover:underline">Venmo Privacy Policy</a></li>
                <li><a href="https://www.zellepay.com/privacy-policy" target="_blank" rel="noreferrer" className="text-purple-400 hover:underline">Zelle Privacy Policy</a></li>
                <li><a href="https://cash.app/legal/us/en-us/privacy" target="_blank" rel="noreferrer" className="text-purple-400 hover:underline">Cash App Privacy Policy</a></li>
              </ul>
              <p className="mb-6">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

              <h3 className="text-xl font-semibold text-white mb-3">Information automatically collected</h3>
              <p className="mb-4 italic text-gray-400">In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
              <p className="mb-4">
                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
              </p>
              <p className="mb-4">
                Like many businesses, we also collect information through cookies and similar technologies. You can find out more about this in our Cookie Notice: <a href="https://www.derekgembus.com/cookie-policy" className="text-purple-400 hover:underline">https://www.derekgembus.com/cookie-policy</a>.
              </p>
              <p className="mb-2"><strong className="text-white">The information we collect includes:</strong></p>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li><strong className="text-white">Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services.</li>
                <li><strong className="text-white">Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
                <li><strong className="text-white">Location Data.</strong> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="section2">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-purple-400" />
                2. How Do We Process Your Information?
              </h2>
              <p className="mb-4 italic text-gray-400">In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
              <p className="mb-4"><strong className="text-white">We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong></p>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li><strong className="text-white">To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</li>
                <li><strong className="text-white">To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
                <li><strong className="text-white">To send administrative information to you.</strong> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
                <li><strong className="text-white">To fulfill and manage your orders.</strong> We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.</li>
                <li><strong className="text-white">To request feedback.</strong> We may process your information when necessary to request feedback and to contact you about your use of our Services.</li>
                <li><strong className="text-white">To send you marketing and promotional communications.</strong> We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time.</li>
                <li><strong className="text-white">To protect our Services.</strong> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</li>
                <li><strong className="text-white">To identify usage trends.</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.</li>
                <li><strong className="text-white">To determine the effectiveness of our marketing and promotional campaigns.</strong> We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.</li>
                <li><strong className="text-white">To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="section3">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Scale className="w-6 h-6 mr-3 text-green-400" />
                3. What Legal Bases Do We Rely On To Process Your Information?
              </h2>
              <p className="mb-4 italic text-gray-400">In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</p>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">If you are located in the EU or UK, this section applies to you.</h3>
              <p className="mb-4">The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>
              <ul className="list-disc list-inside space-y-3 ml-4 mb-6">
                <li><strong className="text-white">Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.</li>
                <li><strong className="text-white">Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li>
                <li><strong className="text-white">Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms.</li>
                <li><strong className="text-white">Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations.</li>
                <li><strong className="text-white">Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">If you are located in Canada, this section applies to you.</h3>
              <p className="mb-4">We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.</p>
              <p className="mb-4">In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
                <li>For investigations and fraud detection and prevention</li>
                <li>For business transactions provided certain conditions are met</li>
                <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
                <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
                <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
                <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
                <li>If the information is publicly available and is specified by the regulations</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="section4">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Users className="w-6 h-6 mr-3 text-blue-400" />
                4. When And With Whom Do We Share Your Personal Information?
              </h2>
              <p className="mb-4 italic text-gray-400">In Short: We may share information in specific situations described in this section and/or with the following third parties.</p>
              <p className="mb-4">
                <strong className="text-white">Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information.
              </p>
              
              <p className="mb-4"><strong className="text-white">The third parties we may share personal information with are as follows:</strong></p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Communicate and Chat with Users</h4>
                  <p className="text-sm">EmailJS</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Invoice and Billing</h4>
                  <p className="text-sm">Stripe and PayPal</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Web and Mobile Analytics</h4>
                  <p className="text-sm">Google Analytics and Google Analytics for Firebase</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Website Hosting</h4>
                  <p className="text-sm">Github Pages</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg md:col-span-2">
                  <h4 className="font-bold text-white mb-2">Payment Processing</h4>
                  <p className="text-sm">Venmo, Zelle, Cash App</p>
                </div>
              </div>

              <p className="mb-4"><strong className="text-white">We also may need to share your personal information in the following situations:</strong></p>
              <ul className="list-disc list-inside ml-4">
                <li><strong className="text-white">Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="section5">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-yellow-400" />
                5. Do We Use Cookies And Other Tracking Technologies?
              </h2>
              <p className="mb-4 italic text-gray-400">In Short: We may use cookies and other tracking technologies to collect and store your information.</p>
              <p className="mb-4">
                We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
              </p>
              <p className="mb-4">
                We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences).
              </p>
              <p className="mb-4">
                Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice: <a href="https://www.derekgembus.com/cookie-policy" className="text-purple-400 hover:underline">https://www.derekgembus.com/cookie-policy</a>.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">Google Analytics</h4>
                <p className="text-sm">We may share your information with Google Analytics to track and analyze the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer" className="text-purple-400 hover:underline">https://tools.google.com/dlpage/gaoptout</a>. For more information on the privacy practices of Google, please visit the <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-purple-400 hover:underline">Google Privacy & Terms page</a>.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-orange-400" />
                6. How Long Do We Keep Your Information?
              </h2>
              <p className="mb-4 italic text-gray-400">In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
              <p className="mb-4">
                We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
              </p>
              <p>
                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
              </p>
            </section>

            {/* Section 7 */}
            <section id="section7">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-pink-500" />
                7. How Do We Keep Your Information Safe?
              </h2>
              <p className="mb-4 italic text-gray-400">In Short: We aim to protect your personal information through a system of organizational and technical security measures.</p>
              <p>
                We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
              </p>
            </section>

            {/* Section 8 */}
            <section id="section8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Users className="w-6 h-6 mr-3 text-red-400" />
                8. Do We Collect Information From Minors?
              </h2>
              <p className="mb-4 italic text-gray-400">In Short: We do not knowingly collect data from or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction.</p>
              <p className="mb-4">
                We do not knowingly collect, solicit data from, or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services.
              </p>
              <p>
                If we learn that personal information from users less than 18 years of age or the equivalent age as specified by law in your jurisdiction has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18 or the equivalent age as specified by law in your jurisdiction, please contact us at <a href="mailto:privacy@derekgembus.com" className="text-purple-400 hover:underline">privacy@derekgembus.com</a>.
              </p>
            </section>

            {/* Section 9 */}
            <section id="section9">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-green-400" />
                9. What Are Your Privacy Rights?
              </h2>
              <p className="mb-4 italic text-gray-400">In Short: Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information.</p>
              <p className="mb-4">
                In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making.
              </p>
              <p className="mb-4">
                If a decision that produces legal or similarly significant effects is made solely by automated means, we will inform you, explain the main factors, and offer a simple way to request human review. In certain circumstances, you may also have the right to object to the processing of your personal information.
              </p>
              <p className="mb-4">
                <strong className="text-white">Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us using the contact details provided in the section "How Can You Contact Us About This Notice?" below.
              </p>
              <p className="mb-4">
                <strong className="text-white">Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. For further information, please see our Cookie Notice: <a href="https://www.derekgembus.com/cookie-policy" className="text-purple-400 hover:underline">https://www.derekgembus.com/cookie-policy</a>.
              </p>
              <p>
                If you have questions or comments about your privacy rights, you may email us at <a href="mailto:support@derekgembus.com" className="text-purple-400 hover:underline">support@derekgembus.com</a>.
              </p>
            </section>

            {/* Section 10 */}
            <section id="section10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Bell className="w-6 h-6 mr-3 text-gray-400" />
                10. Controls For Do-Not-Track Features
              </h2>
              <p className="mb-4">
                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
              </p>
              <p>
                California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.
              </p>
            </section>

            {/* Section 11 */}
            <section id="section11">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-blue-400" />
                11. Do United States Residents Have Specific Privacy Rights?
              </h2>
              <p className="mb-4 italic text-gray-400">In Short: If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information.</p>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Your Rights</h3>
              <p className="mb-4">You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Right to know whether or not we are processing your personal data</li>
                <li>Right to access your personal data</li>
                <li>Right to correct inaccuracies in your personal data</li>
                <li>Right to request the deletion of your personal data</li>
                <li>Right to obtain a copy of the personal data you previously shared with us</li>
                <li>Right to non-discrimination for exercising your rights</li>
                <li>Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">How to Exercise Your Rights</h3>
              <p className="mb-4">
                To exercise these rights, you can contact us by submitting a data subject access request, by visiting <a href="http://www.derekgembus.com" className="text-purple-400 hover:underline">http://www.derekgembus.com</a>, or by referring to the contact details at the bottom of this document.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Appeals</h3>
              <p>
                Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <a href="mailto:support@derekgembus.com" className="text-purple-400 hover:underline">support@derekgembus.com</a>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.
              </p>
            </section>

            {/* Section 12 */}
            <section id="section12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-teal-400" />
                12. Do Other Regions Have Specific Privacy Rights?
              </h2>
              <p className="mb-4 italic text-gray-400">In Short: You may have additional rights based on the country you reside in.</p>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Australia and New Zealand</h3>
              <p className="mb-4">
                We collect and process your personal information under the obligations and conditions set by Australia's Privacy Act 1988 and New Zealand's Privacy Act 2020 (Privacy Act).
              </p>
              <p className="mb-4">
                At any time, you have the right to request access to or correction of your personal information. If you believe we are unlawfully processing your personal information, you have the right to submit a complaint about a breach of the Australian Privacy Principles to the Office of the Australian Information Commissioner and a breach of New Zealand's Privacy Principles to the Office of New Zealand Privacy Commissioner.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Republic of South Africa</h3>
              <p className="mb-4">
                At any time, you have the right to request access to or correction of your personal information. If you are unsatisfied with the manner in which we address any complaint with regard to our processing of personal information, you can contact the office of the regulator, the details of which are:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="font-bold text-white mb-2">The Information Regulator (South Africa)</p>
                <p className="text-sm">General enquiries: <a href="mailto:enquiries@inforegulator.org.za" className="text-purple-400 hover:underline">enquiries@inforegulator.org.za</a></p>
                <p className="text-sm">Complaints (complete POPIA/PAIA form 5): <a href="mailto:PAIAComplaints@inforegulator.org.za" className="text-purple-400 hover:underline">PAIAComplaints@inforegulator.org.za</a> & <a href="mailto:POPIAComplaints@inforegulator.org.za" className="text-purple-400 hover:underline">POPIAComplaints@inforegulator.org.za</a></p>
              </div>
            </section>

            {/* Section 13 */}
            <section id="section13">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Bell className="w-6 h-6 mr-3 text-yellow-400" />
                13. Do We Make Updates To This Notice?
              </h2>
              <p className="mb-4 italic text-gray-400">In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
              <p>
                We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
              </p>
            </section>

            {/* Section 14 */}
            <section id="section14">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-purple-400" />
                14. How Can You Contact Us About This Notice?
              </h2>
              <p className="mb-4">
                If you have questions or comments about this notice, you may email us at <a href="mailto:privacy@derekgembus.com" className="text-purple-400 hover:underline">privacy@derekgembus.com</a> or contact us by post at:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="font-bold text-white">Derek Gembus</p>
              </div>
            </section>

            {/* Section 15 */}
            <section id="section15">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <HelpCircle className="w-6 h-6 mr-3 text-green-400" />
                15. How Can You Review, Update, Or Delete The Data We Collect From You?
              </h2>
              <p>
                Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.
              </p>
            </section>

            {/* Contact Section */}
            <section className="border-t border-gray-800 pt-8">
              <h2 className="text-xl font-bold text-white mb-2">Have Questions?</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact me directly through the <Link to="/" className="text-purple-400 hover:underline">Contact Form</Link> on the home page or email <a href="mailto:support@derekgembus.com" className="text-purple-400 hover:underline">support@derekgembus.com</a>.
              </p>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
