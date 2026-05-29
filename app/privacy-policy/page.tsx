import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Modal from '@/components/Modal'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Premium Residences, Kondapur',
  description: 'Privacy Policy for this upcoming residential project in Kondapur — how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://raghavakondapur.com/privacy-policy' },
  robots: { index: false, follow: false },
}

const sections = [
  {
    title: '1. Information We Collect',
    content: `When you submit an enquiry on our website, we collect the following information:

- **Full Name** — to address you personally in all communications.
- **Phone Number** — to call or message you regarding your enquiry.
- **Email Address** — to send project details, brochures, and follow-up information (optional).
- **Residence Interest** — the apartment type you are interested in, to provide relevant information.

We do not collect payment information, government IDs, or any sensitive personal data through this website.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `The information you provide is used solely for the following purposes:

- To respond to your enquiry about this residential project.
- To share project details, floor plans, pricing, and availability.
- To schedule site visits or virtual walkthroughs.
- To send relevant updates about project launch, possession timelines, and offers.
- To maintain a record of your interest for our sales and customer relationship management.

We will not use your information for any purpose unrelated to this project without your explicit consent.`,
  },
  {
    title: '3. How We Share Your Information',
    content: `We do not sell, rent, or trade your personal information to third parties.

Your information may be shared with:

- **Realvision Reality Consultancy's sales team** — our authorised consultants who handle enquiry follow-ups and site visits.
- **The Developer** — as the project developer, they may receive your enquiry details to coordinate site visits, pricing, and possession-related communications.
- **CRM and communication platforms** — we use a secure customer relationship management platform to manage enquiries and communications. Your data is stored securely on their platform subject to industry-standard privacy and security practices.
- **Legal requirements** — if required by law, regulation, or court order, we may disclose your information to the appropriate authorities.

We do not share your data with any unrelated third-party brokers, marketing agencies, or businesses outside the scope of this project.`,
  },
  {
    title: '4. WhatsApp & SMS Communication',
    content: `By submitting your phone number on this website, you consent to being contacted via WhatsApp and/or SMS for enquiry-related communications.

All communication will be strictly related to this residential project. You may opt out of further WhatsApp or SMS communications at any time by informing our team directly.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain your personal information for as long as necessary to manage your enquiry and provide relevant project updates. If the project is completed or you request deletion of your data, we will remove your information from our active systems within 30 days of such a request.`,
  },
  {
    title: '6. Data Security',
    content: `We take reasonable precautions to protect your personal information from unauthorised access, misuse, or disclosure. Our CRM platform (GoHighLevel) employs industry-standard security measures including encryption and access controls.

However, no method of data transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.`,
  },
  {
    title: '7. Cookies',
    content: `This website may use basic cookies to improve your browsing experience and analyse site traffic. We do not use cookies to track you across other websites or build advertising profiles.

You may disable cookies in your browser settings at any time. Disabling cookies will not affect your ability to submit an enquiry.`,
  },
  {
    title: '8. Your Rights',
    content: `You have the right to:

- **Access** — request a copy of the personal information we hold about you.
- **Correction** — request correction of inaccurate or incomplete information.
- **Deletion** — request deletion of your personal data from our systems.
- **Opt-out** — withdraw consent for communications at any time.

To exercise any of these rights, please contact us at the details provided below. We will respond to your request within 7 working days.`,
  },
  {
    title: '9. Third-Party Links',
    content: `This website may contain links to third-party websites, including Google Maps and WhatsApp. We are not responsible for the privacy practices or content of those sites. We encourage you to review their respective privacy policies before providing any personal information.`,
  },
  {
    title: '10. Children\'s Privacy',
    content: `This website is not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has submitted information through our website, please contact us and we will delete it promptly.`,
  },
  {
    title: '11. Governing Law',
    content: `This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023 (DPDP Act), as applicable. Any disputes arising from this policy shall be subject to the jurisdiction of courts in Hyderabad, Telangana.`,
  },
  {
    title: '12. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. The updated policy will be posted on this page with a revised effective date. We encourage you to review this page periodically.`,
  },
  {
    title: '13. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:

**Realvision Reality Consultancy**
Authorised Channel Partner — Upcoming Project, Kondapur
RERA Agent No: A01100003800
Hyderabad, Telangana
📞 +91 98490 19238
📧 office@realvision.team

You may also reach us via WhatsApp at the number above.`,
  },
]

function renderContent(text: string) {
  return text.split('\n').map((line, i) => {
    if (line.trim().startsWith('- ')) {
      return (
        <li key={i} style={{ marginBottom: '8px', paddingLeft: '4px' }}
          dangerouslySetInnerHTML={{
            __html: line.trim().slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
          }}
        />
      )
    }
    if (line.trim() === '') return <br key={i} />
    return (
      <p key={i} style={{ marginBottom: '10px' }}
        dangerouslySetInnerHTML={{
          __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
        }}
      />
    )
  })
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <Modal />

      <header style={{
        background: 'var(--dark)',
        paddingTop: 'calc(var(--nav-h) + 60px)',
        paddingBottom: '56px',
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-label" style={{ color: 'var(--stone)' }}>Legal</div>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 500,
            color: 'var(--white)',
            lineHeight: 1.15,
            marginBottom: '16px',
          }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9375rem' }}>
            Effective date: June 1, 2025 &nbsp;·&nbsp; Realvision Reality Consultancy, Hyderabad
          </p>
        </div>
      </header>

      <main style={{ background: 'var(--bg)', padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>

          {/* Intro */}
          <div style={{
            background: 'var(--white)',
            border: '1px solid var(--border)',
            borderLeft: '3px solid var(--gold)',
            borderRadius: '4px',
            padding: '28px 32px',
            marginBottom: '48px',
            fontSize: '0.9375rem',
            lineHeight: 1.8,
            color: 'var(--text)',
          }}>
            Realvision Reality Consultancy (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is an authorised channel
            partner firm operating this website on behalf of an upcoming residential project in Kondapur (&ldquo;the Project&rdquo;),
            developed by the project developer. This Privacy Policy explains how we collect, use, store, and
            protect the personal information you provide when enquiring about the project through
            this website. By submitting an enquiry, you agree to the terms of this policy.
          </div>

          {/* Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {sections.map((section) => (
              <div key={section.title}>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: 'var(--dark)',
                  marginBottom: '14px',
                  paddingBottom: '10px',
                  borderBottom: '1px solid var(--border)',
                }}>
                  {section.title}
                </h2>
                <div style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.8,
                  color: 'var(--text)',
                }}>
                  {section.content.includes('\n- ') ? (
                    <>
                      {section.content.split('\n').filter(l => !l.trim().startsWith('- ')).map((line, i) => (
                        line.trim() ? (
                          <p key={i} style={{ marginBottom: '12px' }}
                            dangerouslySetInnerHTML={{
                              __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                            }}
                          />
                        ) : null
                      ))}
                      <ul style={{ paddingLeft: '20px', margin: '4px 0 0' }}>
                        {section.content.split('\n').filter(l => l.trim().startsWith('- ')).map((line, i) => (
                          <li key={i} style={{ marginBottom: '8px' }}
                            dangerouslySetInnerHTML={{
                              __html: line.trim().slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                            }}
                          />
                        ))}
                      </ul>
                    </>
                  ) : (
                    <div>{renderContent(section.content)}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Back links */}
          <div style={{
            marginTop: '64px',
            paddingTop: '32px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
          }}>
            <Link href="/" style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>
              ← Back to Homepage
            </Link>
            <Link href="/#contact" style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>
              Enquire About the Project
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
