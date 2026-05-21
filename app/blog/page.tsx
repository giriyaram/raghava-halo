import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import Nav from '@/components/Nav'
import Modal from '@/components/Modal'
import FloatingButtons from '@/components/FloatingButtons'

export const metadata: Metadata = {
  title: 'Blog & Insights | Halo by Raghava',
  description:
    'Practical guides on buying premium apartments in Kondapur, Hyderabad — high-rise living, vastu, financial district proximity, and what to look for in a new launch project.',
  alternates: { canonical: 'https://halobyraghava.com/blog' },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Nav />
      <Modal />
      <header style={{ background: 'var(--dark)', paddingTop: 'calc(var(--nav-h) + 60px)', paddingBottom: '60px' }}>
        <div className="container">
          <div className="section-label" style={{ color: 'var(--stone)' }}>Insights</div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 500, color: 'var(--white)', marginBottom: '16px', lineHeight: 1.15 }}>
            Buying a Home in Hyderabad?<br /><em style={{ color: 'var(--stone)' }}>Read This First.</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.0625rem', maxWidth: '560px', lineHeight: 1.7 }}>
            Practical, grounded guides on Kondapur real estate, high-rise living, vastu, and what
            actually matters when choosing a premium apartment in Hyderabad.
          </p>
        </div>
      </header>

      <main style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
            {posts.map((post) => (
              <article
                key={post.slug}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
              >
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em',
                        textTransform: 'uppercase', color: 'var(--gold)',
                        background: 'rgba(184,149,106,0.1)', padding: '3px 8px', borderRadius: '2px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--dark)', lineHeight: 1.3 }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: 'inherit' }}>{post.title}</Link>
                </h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, flex: 1 }}>
                  {post.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>
                    {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                    {' · '}{post.readTime} min read
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--dark)', letterSpacing: '0.04em' }}
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: '60px', textAlign: 'center' }}>
            <Link href="/" className="btn-dark">← Back to Halo</Link>
          </div>
        </div>
      </main>
      <FloatingButtons />
    </>
  )
}
