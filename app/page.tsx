export default function Home() {
  return (
    <main className="container">
      
      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">DOPAMINE</h1>
        <div className="nav-icons">
          <span>🔍</span>
          <span>🛍️</span>
          <span>👤</span>
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
          <div>← →</div>
        </div>

        <div className="products">
          <img src="/images/baju1.png" />
          <img src="/images/baju2.png" />
          <img src="/images/baju3.png" />
        </div>

        <p className="more">Klik untuk lanjut</p>
      </section>

      {/* BRAND MESSAGE */}
      <section className="brand">
        <h2>DOPAMINE</h2>
        <h3>Because Feeling Good Matters.</h3>
        <p>Run with comfort, move with confidence.</p>

        <div className="categories">
          <span>Baju</span>
          <span>Celana</span>
          <span>Topi</span>
          <span>Kaos Kaki</span>
          <span>Running Belt</span>
          <span>Jersey</span>
        </div>
      </section>

      {/* KOLEKSI */}
      <section className="section">
        <h2>Koleksi</h2>
        <div className="grid">
          <img src="/images/run.jpg" className="big" />
          <img src="/images/detail.jpg" />
          <img src="/images/shorts.png" />
          <img src="/images/topi.jpg" />
          <div className="overlay">Click for more</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="socials">
          <span>🛒</span>
          <span>📸</span>
          <span>🎵</span>
          <span>✳️</span>
        </div>

        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="links">
          <span>FAQ</span>
          <span>Lokasi</span>
          <span>Hubungi Kami</span>
        </div>

        <h1 className="logo-footer">DOPAMINE</h1>
      </footer>

    </main>
  );
}