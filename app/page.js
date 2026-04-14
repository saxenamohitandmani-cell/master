"use client";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function VLSIWebsite() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EMAIL
    emailjs.send(
      "service_yzvwymr",
      "template_2wlnvun",
      form,
      "xbsovO47KIQ2KDEVy"
    )
      .then(() => setStatus("Enquiry sent successfully!"))
      .catch(() => setStatus("Email failed!"));

    // GOOGLE SHEETS
    fetch("YOUR_GOOGLE_SCRIPT_URL", {
      method: "POST",
      body: JSON.stringify(form)
    });

    // WHATSAPP
    const msg = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/918266069329?text=${msg}`, "_blank");

    setForm({ name: "", email: "", message: "" });
  };

  const handlePayment = (amount) => {
    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: parseInt(amount.replace("₹", "")) * 100,
      currency: "INR",
      name: "VLSI Career Boost",
      description: "Service Payment",
      handler: function () {
        alert("Payment Successful!");
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div style={styles.page}>

      <div style={styles.glow}></div>

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
      <motion.div style={styles.hero} initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}>
        <h2 style={styles.heroTitle}>Build Your VLSI Career Faster</h2>
        <p style={styles.heroSubtitle}>
          LinkedIn Growth • Resume • Interview Prep • Projects
        </p>
        <motion.a href="#contact" style={styles.primaryBtn} whileHover={{ scale: 1.08 }}>
          Get Started
        </motion.a>
      </motion.div>

      {/* SERVICES */}
      <div id="services" style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <div style={styles.grid}>
          {services.map((s, i) => (
            <motion.div key={i} style={styles.card} whileHover={{ scale: 1.05 }}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PRICING */}
      <div id="pricing" style={styles.section}>
        <h2 style={styles.sectionTitle}>Pricing</h2>
        <div style={styles.grid}>
          {pricing.map((p, i) => (
            <motion.div key={i} style={styles.card}>
              <h3>{p.name}</h3>
              <p style={styles.price}>{p.price}</p>
              <p>{p.desc}</p>
              <button onClick={() => handlePayment(p.price)} style={styles.primaryBtn}>
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>What Clients Say</h2>
        <div style={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.div key={i} style={styles.card}>
              <p>"{t.text}"</p>
              <h4 style={{ marginTop: "10px", color: "#22c55e" }}>— {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TRUST BADGES */}
      <div style={styles.sectionCenter}>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <span style={styles.badge}>✔ 100+ Students</span>
          <span style={styles.badge}>✔ Interview Ready</span>
          <span style={styles.badge}>✔ Industry Mentorship</span>
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" style={styles.sectionCenter}>
        <h2 style={styles.sectionTitle}>Get In Touch</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required style={styles.input}/>
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required style={styles.input}/>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required style={styles.textarea}/>

          <button type="submit" style={styles.primaryBtn}>Submit</button>
          <p> </p>
          {status && <p style={{ color: "#847ed4" }}>{status}</p>}
        </form>

        <motion.a href="https://wa.me/918266069329" style={styles.whatsappBtn} whileHover={{ scale: 1.1 }}>
          💬 Chat on WhatsApp
        </motion.a>
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
  { title: "LinkedIn Growth", desc: "Grow network & reach recruiters." },
  { title: "Resume Creation", desc: "ATS optimized VLSI resumes." },
  { title: "VLSI Notes", desc: "Interview-focused preparation material." }
];

const pricing = [
  { name: "Starter", price: "₹499", desc: "Basic resume or notes" },
  { name: "Growth", price: "₹999", desc: "LinkedIn + content" },
  { name: "Pro", price: "₹1999", desc: "Complete package" }
];

const testimonials = [
  { name: "Rahul", text: "Got interview calls quickly!" },
  { name: "Sneha", text: "Resume was perfect!" },
  { name: "Amit", text: "Best notes ever!" }
];

// STYLES
const styles = {
  page: { background: "#020617", color: "white", padding: "20px" },
  glow: { position: "absolute", width: "500px", height: "500px", background: "radial-gradient(circle,#3b82f6,transparent)", filter: "blur(120px)", opacity: 0.3 },
  navbar: { display: "flex", justifyContent: "space-between" },
  logo: { fontWeight: "bold" },
  navLink: { marginLeft: "20px", color: "#94a3b8", textDecoration: "none" },

  hero: { textAlign: "center", margin: "120px auto", maxWidth: "700px" },
  heroTitle: { fontSize: "40px", fontWeight: "bold" },
  heroSubtitle: { color: "#94a3b8" },

  primaryBtn: { padding: "12px 20px", borderRadius: "10px", background: "#2563eb", color: "white", border: "none", cursor: "pointer" },

  whatsappBtn: {
    marginTop: "25px",
    padding: "14px 22px",
    borderRadius: "12px",
    background: "linear-gradient(90deg,#25D366,#16a34a)",
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",
    boxShadow: "0 0 20px rgba(37,211,102,0.5)"
  },

  section: { margin: "100px 0" },
  sectionCenter: { textAlign: "center", margin: "100px 0" },
  sectionTitle: { fontSize: "30px" },

  grid: { display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" },

  card: { background: "rgba(255,255,255,0.05)", padding: "25px", borderRadius: "15px" },

  badge: { padding: "10px 15px", borderRadius: "20px", background: "rgba(255,255,255,0.05)" },

  price: { fontSize: "22px" },

  form: { maxWidth: "400px", margin: "auto", display: "flex", flexDirection: "column", gap: "15px" },

  input: { padding: "10px", borderRadius: "8px", background: "#111", color: "white" },
  textarea: { padding: "10px", borderRadius: "8px", background: "#111", color: "white" },

  footer: { textAlign: "center", marginTop: "40px" }
};