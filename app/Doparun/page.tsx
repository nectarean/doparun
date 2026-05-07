import Link from "next/link";

export default function Home() {
  return (
    <main className="container">

      {/* NAVBAR */}
      <nav className="navbar">
        <Link href="/" className="logo">
          DOPAMINE
        </Link>

        <div className="nav-icons">
          <Link href="/search">🔍</Link>
          <Link href="/cart">🛍️</Link>
          <Link href="/profile">👤</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <img src="/images/hero.jpg" alt="hero" />
        <h1>DOPAMINE</h1>
      </section>

      {/* PRODUK BARU */}
      <section className="section">
        <div className="section-header">
          <h2>Produk Baru</h2>

          <div className="arrow-links">
            <Link href="/previous">←</Link>
            <Link href="/next">→</Link>
          </div>
        </div>

        <div className="products">
          <Link href="/produk/baju1">
            <img src="/images/baju1.png" alt="baju1" />
          </Link>

          <Link href="/produk/baju2">
            <img src="/images/baju2.png" alt="baju2" />
          </Link>

          <Link href="/produk/baju3">
            <img src="/images/baju3.png" alt="baju3" />
          </Link>
        </div>

        <Link href="/produk" className="more">
          Klik untuk lanjut
        </Link>
      </section>

      {/* BRAND MESSAGE */}
      <section className="brand">
        <Link href="/" className="brand-logo">
          DOPAMINE
        </Link>

        <h3>Because Feeling Good Matters.</h3>
        <p>Run with comfort, move with confidence.</p>

        <div className="categories">
          <Link href="/kategori/baju">Baju</Link>
          <Link href="/kategori/celana">Celana</Link>
          <Link href="/kategori/topi">Topi</Link>
          <Link href="/kategori/kaoskaki">Kaos Kaki</Link>
          <Link href="/kategori/runningbelt">Running Belt</Link>
          <Link href="/kategori/jersey">Jersey</Link>
        </div>
      </section>

      {/* KOLEKSI */}
      <section className="section">
        <h2>Koleksi</h2>

        <div className="grid">
          <Link href="/koleksi/run">
            <img src="/images/run.jpg" className="big" alt="run" />
          </Link>

          <Link href="/koleksi/detail">
            <img src="/images/detail.jpg" alt="detail" />
          </Link>

          <Link href="/koleksi/shorts">
            <img src="/images/shorts.png" alt="shorts" />
          </Link>

          <Link href="/koleksi/topi">
            <img src="/images/topi.jpg" alt="topi" />
          </Link>

          <Link href="/koleksi" className="overlay">
            Click for more
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="socials">
          <Link href="/shop">🛒</Link>
          <Link href="https://instagram.com">📸</Link>
          <Link href="https://tiktok.com">🎵</Link>
          <Link href="/featured">✳️</Link>
        </div>

        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="links">
          <Link href="/faq">FAQ</Link>
          <Link href="/lokasi">Lokasi</Link>
          <Link href="/hubungi-kami">Hubungi Kami</Link>
        </div>

        <Link href="/" className="logo-footer">
          DOPAMINE
        </Link>

      </footer>

    </main>
  );
}