import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/shared/Section";

export const metadata: Metadata = {
  title: "Terms of Service | EDYM Herbal Hub",
  description: "Terms of service for using EDYM Herbal Hub website and services. Please read these terms before using our site.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | EDYM Herbal Hub",
    description: "Terms of service for using our website and services.",
    url: "https://edymvillageenterprise.com/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        subtitle="Last updated: March 2025"
        description="Please read these terms carefully before using the EDYM Herbal Hub website."
      />
      <Section className="bg-background">
        <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#0F6131] mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the EDYM Herbal Hub website (edymvillageenterprise.com), you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F6131] mt-8 mb-4">2. Use of the Website</h2>
            <p>You agree to use this website only for lawful purposes and in a way that does not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Infringe the rights of others.</li>
              <li>Transmit harmful, offensive, or illegal content.</li>
              <li>Attempt to gain unauthorised access to our systems or data.</li>
              <li>Interfere with the proper functioning of the website.</li>
            </ul>
            <p className="mt-4">
              We reserve the right to suspend or terminate access for any user who violates these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F6131] mt-8 mb-4">3. Intellectual Property</h2>
            <p>
              All content on this website—including text, images, logos, and design—is owned by EDYM Herbal Hub or its licensors and is protected by copyright and other intellectual property laws. You may not copy, reproduce, or use our content for commercial purposes without our prior written consent. Educational or personal reference use may be permitted with appropriate attribution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F6131] mt-8 mb-4">4. Information and Services</h2>
            <p>
              Information on this website is provided for general information only. We strive to keep it accurate but do not guarantee completeness or suitability for any particular purpose. Our training, partnership, and project programmes are subject to their own eligibility criteria and terms, which will be communicated separately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F6131] mt-8 mb-4">5. Links to Third-Party Sites</h2>
            <p>
              Our website may link to external sites such as the 24-Hour Economy (24hplus.gov.gh) and the Ministry of Food and Agriculture (mofa.gov.gh). We are not responsible for the content or practices of third-party websites. Your use of those sites is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F6131] mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, EDYM Herbal Hub shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on its content. This includes but is not limited to loss of data, business, or profits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F6131] mt-8 mb-4">7. Governing Law</h2>
            <p>
              These terms are governed by the laws of Ghana. Any disputes shall be subject to the exclusive jurisdiction of the courts of Ghana.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F6131] mt-8 mb-4">8. Changes to Terms</h2>
            <p>
              We may update these Terms of Service from time to time. The &quot;Last updated&quot; date at the top will reflect changes. Continued use of the website after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F6131] mt-8 mb-4">9. Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us:
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
