import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/shared/Section";

export const metadata: Metadata = {
  title: "Privacy Policy | EDYM Herbal Hub",
  description: "Privacy policy for EDYM Herbal Hub. How we collect, use, and protect your personal information when you use our website and services.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | EDYM Herbal Hub",
    description: "How we collect, use, and protect your personal information.",
    url: "https://edymvillageenterprise.com/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: March 2025"
        description="How EDYM Herbal Hub collects, uses, and protects your personal information."
      />
      <Section className="bg-background">
        <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#0F6131] mt-8 mb-4">1. Introduction</h2>
            <p>
              EDYM Herbal Hub (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at edymvillageenterprise.com or use our services. Please read this policy carefully.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F6131] mt-8 mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal identification information:</strong> Name, email address, phone number, and other contact details when you fill out forms (e.g. contact, partnership, or training inquiries).</li>
              <li><strong>Usage data:</strong> Information about how you use our website, including IP address, browser type, pages visited, and time spent on the site.</li>
              <li><strong>Communications:</strong> Records of correspondence when you contact us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F6131] mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide requested information.</li>
              <li>Process partnership, training, or investment inquiries.</li>
              <li>Send you updates about our programmes and initiatives (only if you have agreed).</li>
              <li>Improve our website and user experience.</li>
              <li>Comply with applicable laws and protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F6131] mt-8 mb-4">4. Sharing and Disclosure</h2>
            <p>
              We do not sell your personal information. We may share your information only with trusted service providers who assist our operations (e.g. hosting, email) or when required by law. We may also share information with government or partner organisations in connection with programmes such as the 24-Hour Economy or Ministry of Food and Agriculture initiatives, where relevant and with appropriate safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F6131] mt-8 mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F6131] mt-8 mb-4">6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F6131] mt-8 mb-4">7. Your Rights</h2>
            <p>
              Depending on applicable law, you may have the right to access, correct, or delete your personal data, or to object to or restrict certain processing. To exercise these rights, please contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F6131] mt-8 mb-4">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites (e.g. 24hplus.gov.gh, mofa.gov.gh). We are not responsible for the privacy practices of those sites. We encourage you to read their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F6131] mt-8 mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top will reflect any changes. Continued use of our website after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F6131] mt-8 mb-4">10. Contact Us</h2>
            <p>
              For questions about this Privacy Policy or your personal data, contact us at:
            </p>
            <p className="mt-2">
              <strong>EDYM Herbal Hub</strong><br />
              EDYM Herbal Hub Company Limited, No. 55 Apple Street, Adjiringano, East Legon, Accra, Ghana<br />
              Email: Edymherbalhub@gmail.com<br />
              Phone: +233 24 489 5520
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
