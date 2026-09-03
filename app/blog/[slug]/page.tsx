import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPost, getAllSlugs } from '@/lib/blog'
import Nav from '@/components/Nav'
import Modal from '@/components/Modal'
import FloatingButtons from '@/components/FloatingButtons'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `https://raghavakondapur.com/blog/${post.slug}`,
    },
    alternates: { canonical: `https://raghavakondapur.com/blog/${post.slug}` },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Raghava Group' },
    publisher: { '@type': 'Organization', name: 'Raghava Halo', url: 'https://raghavakondapur.com' },
    keywords: post.tags.join(', '),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <Modal />
      <header style={{ background: 'var(--dark)', paddingTop: 'calc(var(--nav-h) + 60px)', paddingBottom: '60px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)', background: 'rgba(200,184,154,0.12)', padding: '4px 10px', borderRadius: '2px' }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 500, color: 'var(--white)', lineHeight: 1.2, marginBottom: '20px' }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', gap: '20px', color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem' }}>
            <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </header>

      <main style={{ background: 'var(--white)', padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: 'var(--text)' }}
          />

          {/* CTA */}
          <div style={{ marginTop: '64px', background: 'var(--dark)', borderRadius: '4px', padding: '40px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--white)', marginBottom: '12px' }}>
              Interested in Raghava Halo?
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '24px', fontSize: '0.9375rem' }}>
              RERA-approved 52-floor high-rise in Kondapur, near HCU. 3 BHK from ₹1.7 Cr, with over 3 lakh sft of community amenities.
            </p>
            <Link href="/#contact" className="btn-primary">
              Enquire Now
            </Link>
          </div>

          <div style={{ marginTop: '48px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/blog" style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>← All Articles</Link>
            <Link href="/" style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Raghava Halo Homepage →</Link>
          </div>
        </div>
      </main>
      <FloatingButtons />
    </>
  )
}
