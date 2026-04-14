"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function VLSIWebsite() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EMAIL
    emailjs.send(
      "service_yzvwymr",
      "template_2wlnvun",
      {
        name: form.name,
        email: form.email,
        message: form.message
      },
      "xbsovO47KIQ2KDEVy"
    )
      .then((res) => {
        console.log("SUCCESS", res);
        setStatus("Enquiry sent successfully!");
      })
      .catch((err) => {
        console.log("FULL ERROR 👉", err);
        console.log("TEXT 👉", err.text);
        setStatus("Email failed!");
      });
    // WHATSAPP
    const msg = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
    );

    window.open(`https://wa.me/918266069329?text=${msg}`, "_blank");

    // RESET
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.page}>

      {/* NAVBAR */}
      <div style={styles.navbar}>
        <h1 style={styles.logo}>VLSI Career Boost</h1>
        <div>
          <a href="#services" style={styles.navLink}>Services</a>
          <a href="#pricing" style={styles.navLink}>Pricing</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </div>
      </div>

      {/* HERO */}
      <div style={styles.hero}>
        <h2 style={styles.heroTitle}>
          Grow Your Career with LinkedIn & VLSI Expertise
        </h2>
        <p style={styles.heroSubtitle}>

          Resume • LinkedIn Growth • Interview Prep • Projects
        
        </p>
        <a href="#contact" style={styles.primaryBtn}>Get Started</a>
      </div>

      {/* SERVICES */}
      <div id="services" style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <div style={styles.grid}>
          {services.map((s, i) => (
            <div key={i} style={styles.card}>
              <h3>{s.title}</h3>
              <p style={styles.cardText}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PRICING */}
      <div id="pricing" style={styles.section}>
        <h2 style={styles.sectionTitle}>Pricing</h2>
        <div style={styles.grid}>
          {pricing.map((p, i) => (
            <div key={i} style={styles.card}>
              <h3>{p.name}</h3>
              <p style={styles.price}>{p.price}</p>
              <p style={styles.cardText}>{p.desc}</p>
              <a href="#contact" style={styles.button}>Choose Plan</a>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT + FORM */}
      <div id="contact" style={styles.sectionCenter}>
        <h2 style={styles.sectionTitle}>Get In Touch</h2>

        <form onSubmit={handleSubmit} style={styles.form}>

          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <textarea
            name="message"
            placeholder="Your Requirement"
            value={form.message}
            onChange={handleChange}
            required
            style={styles.textarea}
          />

          <button type="submit" style={styles.primaryBtn}>
            Submit Enquiry
          </button>

          {status && <p style={{ color: "green" }}>{status}</p>}

        </form>

        <p style={{ marginTop: "20px" }}>OR</p>

        <p style={{ marginTop: "20px" }}>   </p>
        
        <a href="https://wa.me/918266069329" style={styles.primaryBtn}>
          Contact on WhatsApp
        </a>
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        <p>© 2026 VLSI Career Boost</p>
      </div>

    </div>
  );
}

// DATA
const services = [
  { title: "LinkedIn Growth", desc: "Targeted networking" },
  { title: "Resume Creation", desc: "ATS-friendly resumes" },
  { title: "VLSI Notes", desc: "Interview prep material" }
];

const pricing = [
  { name: "Starter", price: "₹499", desc: "Basic" },
  { name: "Growth", price: "₹999", desc: "Intermediate" },
  { name: "Pro", price: "₹1999", desc: "Complete" }
];

// STYLES
const styles = {
  page: { background: "#020617", color: "white", padding: "20px" },
  navbar: { display: "flex", justifyContent: "space-between" },
  logo: { fontWeight: "bold" },
  navLink: { marginLeft: "15px", color: "#94a3b8" },
  
  hero: {textAlign: "center", margin: "60px auto", maxWidth: "800px" },

  heroTitle: {fontSize: "36px", fontWeight: "bold", marginBottom: "15px", lineHeight: "1.3" },

  heroSubtitle: {color: "#94a3b8", marginBottom: "25px", lineHeight: "1.5" },

  primaryBtn: { background: "#2563eb", padding: "10px", borderRadius: "6px", color: "white", border: "none", cursor: "pointer" },
  section: { margin: "40px 0" },
  sectionCenter: { textAlign: "center", margin: "40px 0" },
  sectionTitle: { fontSize: "24px" },
  grid: { display: "grid", gap: "15px", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))" },
  card: { background: "#0f172a", padding: "15px", borderRadius: "8px" },
  cardText: { color: "#94a3b8" },
  price: { fontSize: "20px" },
  button: { display: "block", marginTop: "10px", background: "#2563eb", padding: "8px", borderRadius: "6px", textAlign: "center", color: "white" },
  form: { maxWidth: "400px", margin: "auto", display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "10px", borderRadius: "6px", border: "none" },
  textarea: { padding: "10px", borderRadius: "6px", border: "none" },
  footer: { textAlign: "center", marginTop: "40px" }
};