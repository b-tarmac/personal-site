import Link from 'next/link';

export default function NotFound() {
  return <main style={{ padding: '12vh 8vw', color: '#20231F', fontFamily: 'Arial, sans-serif' }}>
    <p style={{ color: '#F04B23' }}>404 / PAGE NOT FOUND</p>
    <h1 style={{ fontSize: 'clamp(40px, 7vw, 80px)', letterSpacing: '-0.06em' }}>Let’s get back on track.</h1>
    <Link href="/" style={{ color: '#F04B23' }}>Return to the homepage →</Link>
  </main>;
}
