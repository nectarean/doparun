// app/faq/page.jsx

import { Search, ShoppingBag, User } from "lucide-react";
import "../faq/style.css";

export default function FAQPage() {
  return (
    <main className="faq-page">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-wrap">
          <img src="/logo.png" alt="logo" className="logo-icon" />
          <h1>DOPAMINE</h1>
        </div>

        <div className="nav-icons">
          <Search strokeWidth={2.2} />
          <ShoppingBag strokeWidth={2.2} />
          <User strokeWidth={2.2} />
        </div>
      </nav>

      {/* Content */}
      <section className="hero">

        <div className="left-text">
          <h2>
            Ada yang ingin di
            <br />
            tanyakan?
          </h2>
        </div>

        <div className="big-logo">
          <img src="/logo-white.png" alt="dopamine" />
        </div>

      </section>

    </main>
  );
}