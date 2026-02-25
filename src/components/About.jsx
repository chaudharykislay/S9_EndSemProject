function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About ShopSphere</h1>
        <p>
          We are building a modern, API-driven product catalog platform
          focused on performance, scalability, and clean user experience.
        </p>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to simplify product discovery using intelligent
          filtering, seamless navigation, and high-performance front-end
          architecture powered by modern React technologies.
        </p>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <div className="feature-card">
          <h3>⚡ Fast & Optimized</h3>
          <p>Built using Vite + React 19 for blazing-fast performance.</p>
        </div>

        <div className="feature-card">
          <h3>🎯 User Focused</h3>
          <p>Clean UI with intuitive filtering and category browsing.</p>
        </div>

        <div className="feature-card">
          <h3>🔒 Scalable</h3>
          <p>Component-based architecture ready for backend integration.</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div>
          <h2>10K+</h2>
          <p>Products Listed</p>
        </div>
        <div>
          <h2>5K+</h2>
          <p>Happy Users</p>
        </div>
        <div>
          <h2>99%</h2>
          <p>Performance Score</p>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Explore Our Catalog Today</h2>
        <p>Discover high-quality products with a modern browsing experience.</p>
      </section>

    </div>
  );
}

export default About;