"use client";

export default function VLSIWebsite() {
  return (
    <div style={styles.page}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <h1 style={styles.logo}>VLSI Career Boost</h1>
        <div>
          <a href="#services" style={styles.navLink}>Services</a>
          <a href="#pricing" style={styles.navLink}>Pricing</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </div>
      </div>

      {/* Hero Section */}
      <div style={styles.hero}>
        <h2 style={styles.heroTitle}>
          Grow Your Career with LinkedIn & VLSI Expertise
        </h2>
        <p style={styles.heroSubtitle}>
          Resume • LinkedIn Growth • Interview Prep • Projects
        </p>
        <a href="#contact" style={styles.primaryBtn}>Get Started</a>
      </div>

      {/* Services */}
      <div id="services" style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <div style={styles.grid}>
          {services.map((s, i) => (
            <div key={i} style={styles.card}>
              <h3 style={styles.cardTitle}>{s.title}</h3>
              <p style={styles.cardText}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div id="pricing" style={styles.section}>
        <h2 style={styles.sectionTitle}>Pricing</h2>
        <div style={styles.grid}>
          {pricing.map((p, i) => (
            <div key={i} style={styles.card}>
              <h3 style={styles.cardTitle}>{p.name}</h3>
              <p style={styles.price}>{p.price}</p>
              <p style={styles.cardText}>{p.desc}</p>
              <a href="#contact" style={styles.primaryBtn}>Choose Plan</a>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>What Clients Say</h2>
        <div style={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} style={styles.card}>
              <p style={styles.cardText}>"{t.text}"</p>
              <h4 style={styles.cardTitle}>- {t.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" style={styles.sectionCenter}>
        <h2 style={styles.sectionTitle}>Get In Touch</h2>
        <p style={styles.heroSubtitle}>Start your journey today</p>
        <a href="https://wa.me/+918266069329" style={styles.primaryBtn}>
          Contact on WhatsApp
        </a>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p>© 2026 VLSI Career Boost. All rights reserved.</p>
      </div>
    </div>
  );
}

const services = [
  { title: "LinkedIn Growth", desc: "Targeted networking with recruiters and engineers." },
  { title: "Content Management", desc: "Regular posts to build your personal brand." },
  { title: "Resume Creation", desc: "ATS-friendly resumes for VLSI roles." },
  { title: "VLSI Notes", desc: "Structured notes for interviews and concepts." },
  { title: "PPT & Assignments", desc: "Professional slides and academic support." },
  { title: "Projects & Scripts", desc: "Hands-on coding and project help." },
];

const pricing = [
  { name: "Starter", price: "₹499", desc: "Basic resume or notes" },
  { name: "Growth", price: "₹999", desc: "LinkedIn growth + content" },
  { name: "Pro", price: "₹1999", desc: "Complete career package" },
];

const testimonials = [
  { name: "Rahul", text: "Got interview calls within 2 weeks!" },
  { name: "Sneha", text: "Resume was perfect and professional." },
  { name: "Amit", text: "Great notes helped me crack interviews." },
];

const styles = {
  page: { background: "#020617", color: "white", fontFamily: "Arial", padding: "20px" },
  navbar: { display: "flex", justifyContent: "space-between", marginBottom: "40px" },
  logo: { fontSize: "20px", fontWeight: "bold" },
  navLink: { marginLeft: "20px", color: "#94a3b8", textDecoration: "none" },
  hero: { textAlign: "center", marginBottom: "60px" },
  heroTitle: { fontSize: "36px", fontWeight: "bold" },
  heroSubtitle: { color: "#94a3b8", marginBottom: "20px" },
  primaryBtn: { padding: "10px 20px", background: "#2563eb", borderRadius: "8px", color: "white", textDecoration: "none" },
  section: { marginBottom: "60px" },
  sectionCenter: { marginBottom: "60px", textAlign: "center" },
  sectionTitle: { fontSize: "28px", marginBottom: "20px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))", gap: "20px" },
  card: { background: "#0f172a", padding: "20px", borderRadius: "10px" },
  cardTitle: { marginBottom: "10px" },
  cardText: { color: "#94a3b8" },
  price: { fontSize: "24px", marginBottom: "10px" },
  footer: { textAlign: "center", marginTop: "40px", color: "#64748b" },
};