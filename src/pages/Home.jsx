import React from "react";
import "../styles/Home.css";
import { motion } from "framer-motion";
import { useEffect,useState,useRef } from "react";
import heroImg from "../assets/hero-team.jpg"; // rename your image file
import Navbar from "../components/Navbar"; 
import webIcon from "../assets/web.png";
import mobileIcon from "../assets/mobile.png";
import Footer from "../components/Footer";
import LoginPopup from "../components/LoginPopup";

import uiuxIcon from "../assets/uiux.png";
import img3 from "../assets/img3.png";
import Training from "../assets/talent.png";
import HR1 from "../assets/hr1.png";
import Strategic from "../assets/startrgy.png";
import apiIcon from "../assets/api.png";
import supportIcon from "../assets/support.png";
import cloudIcon from "../assets/cloud.png";
import Lenis from "@studio-freight/lenis";
import react from "../assets/react.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
import flutter from "../assets/flutter.png";
import reactNative from "../assets/reactnative.png";
import aws from "../assets/aws.png";
import firebase from "../assets/firebase.png";
import mongo from "../assets/mongo.png";
import postgres from "../assets/postgres.png";
import docker from "../assets/docker.png";
import kubernetes from "../assets/kubernetes.png";
import { Star, Users, BadgeCheck,Eye, Clock, Headphones, Shield, BarChart2, RefreshCcw ,ShieldCheck, 
  Banknote, 
  UserPlus, 
  ClipboardList, 
  GraduationCap, 
  Briefcase} from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { ref, push, set, serverTimestamp } from "firebase/database";
import { database } from "../firebase";




const faqs = [
  {
    question: "What HR and Compliance services do you provide?",
    answer: "We offer end-to-end HR solutions including Labour Law compliance (PF, ESI, POSH), payroll processing, talent acquisition, and performance management frameworks.",
  },
  {
    question: "Can you help our company with statutory audits and legal compliance?",
    answer: "Yes, we specialize in Shops & Establishment Act, Factories Act, and Labour Law audits to ensure your business stays 100% compliant with the latest government regulations.",
  },
  {
    question: "Do you provide recruitment services for technical and non-technical roles?",
    answer: "Absolutely. We handle the entire recruitment lifecycle, from skill-based screening and campus hiring to onboarding and HR documentation.",
  },
  {
    question: "How do you handle payroll and statutory deductions?",
    answer: "We manage monthly payroll processing, including precise calculations for TDS, PF, ESI, and Professional Tax, ensuring timely disbursements and filings.",
  },
  {
    question: "Can you assist in drafting company policies and employee handbooks?",
    answer: "Yes, we create customized HR policies, offer letters, and employee handbooks tailored to your company culture and legal requirements.",
  },
  {
    question: "Do you offer HR support for startups and SMEs?",
    answer: "Yes, we provide scalable HR outsourcing specifically designed for startups and small businesses that need expert HR management without a full-time in-house team.",
  },
  {
    question: "What types of software development services do you offer?",
    answer: "We provide web apps, mobile apps, SaaS platforms, UI/UX design, and custom software solutions tailored to your business needs.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer: "Project timelines vary depending on complexity, but typically range from 1-6 months. We provide a detailed roadmap after understanding your requirements.",
  },
  {
    question: "What is your development process?",
    answer: "Our process includes requirement analysis, UI/UX design, development, QA testing, and deployment with continuous support and maintenance.",
  },
   {
    question: "How much does a software development project cost?",
    answer: "The cost depends on project scope, features, technology stack, and timeline. We provide a transparent and detailed quote after requirement analysis.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, we offer ongoing support, bug fixes, performance optimization, and feature enhancements after project launch.",
  },
  {
    question: "Can you work with existing software or legacy systems?",
    answer: "Absolutely. We can enhance, migrate, or integrate new features into existing or legacy systems with minimal disruption.",
  },
  {
    question: "How do you ensure the security of the application?",
    answer: "We follow industry best practices including secure coding, data encryption, access control, and regular security testing.",
  },
  {
    question: "Will I have ownership of the source code?",
    answer: "Yes, once the project is completed and delivered, you will have full ownership of the source code and related assets.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We work with modern technologies such as React, Angular, Node.js, Java, Spring Boot, Flutter, Firebase, AWS, and more.",
  },
  {
    question: "How do you communicate project progress?",
    answer: "We provide regular updates through meetings, emails, and project management tools to ensure complete transparency.",
  },
  {
    question: "Can you scale the application as our business grows?",
    answer: "Yes, we design scalable architectures that allow your application to grow smoothly with increasing users and data.",
  },
];

const features = [
  {
    icon: <Eye />,
    title: "100% Project Transparency",
    desc: "Complete visibility into project progress and development",
  },
  {
    icon: <Clock />,
    title: "On-Time Delivery",
    desc: "Committed to meeting deadlines without compromising quality",
  },
  {
    icon: <Headphones />,
    title: "Dedicated Support Team",
    desc: "24/7 technical support and maintenance services",
  },
  {
    icon: <Shield />,
    title: "Secure Development",
    desc: "Industry-standard security practices and data protection",
  },
  {
    icon: <BarChart2 />,
    title: "Scalable Architecture",
    desc: "Future-proof solutions built to grow with your business",
  },
  {
    icon: <RefreshCcw />,
    title: "Agile Methodology",
    desc: "Flexible development process with continuous improvements",
  },
];
const techStack = [
  { icon: react, name: "React" },
  { icon: node, name: "Node.js" },
  { icon: python, name: "Python" },
  { icon: java, name: "Java" },
  { icon: flutter, name: "Flutter" },
  { icon: reactNative, name: "React Native" },
  { icon: aws, name: "AWS" },
  { icon: firebase, name: "Firebase" },
  { icon: mongo, name: "MongoDB" },
  { icon: postgres, name: "PostgreSQL" },
  { icon: docker, name: "Docker" },
  { icon: kubernetes, name: "Kubernetes" },
];

const services = [

  {
    icon: img3, // You can use a 'shield' or 'balance' icon
    title: "Statutory Compliance",
    desc: "Expert management of Labour Laws, POSH compliance, and licensing under the Shops & Establishments and Factories Acts.",
  },
  {
    //icon: <Banknote size={40} />, // You can use a 'wallet' or 'calculator' icon
    title: "Payroll & Benefits",
    desc: "Accurate monthly payroll processing including PF, ESI, Professional Tax, and TDS management with timely statutory filings.",
  },
  {
    //icon: <UserPlus size={40} />, // You can use a 'users' or 'search' icon
    title: "Talent Acquisition",
    desc: "End-to-end recruitment solutions from campus hiring to executive search, including skill-based screening and onboarding.",
  },
  {
    icon: HR1, // You can use a 'settings' or 'file-text' icon
    title: "HR Operations & Outsourcing",
    desc: "Complete HR support for startups and SMEs, covering policy drafting, employee handbooks, and performance management (KPI/OKR).",
  },
  {
    icon: Training, // You can use a 'book' or 'award' icon
    title: "Training & Development",
    desc: "Customized leadership programs, soft skills workshops, and compliance training to enhance your workforce's productivity.",
  },
  {
    icon: Strategic, // You can use a 'briefcase' or 'trending-up' icon
    title: "Strategic Advisory",
    desc: "Professional guidance on labour reforms, wage codes, and corporate governance to ensure your business stays ahead of legal changes.",
  },
  {
    icon: webIcon,
    title: "Web Development",
    desc: "Custom web applications built with modern frameworks and technologies for optimal performance and user experience.",
  },
  {
    icon: mobileIcon,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for iOS and Android with seamless functionality and design.",
  },
  {
    icon: uiuxIcon,
    title: "UI/UX Design",
    desc: "User-centered design solutions that create intuitive and engaging digital experiences for your customers.",
  },
   {
    icon: cloudIcon,
    title: "Cloud & DevOps",
    desc: "Scalable cloud infrastructure and DevOps Solution to ensure reilable, secure, and efficient operation.",
  },
  {
  icon: apiIcon,
  title: "API Integration",
  desc: "Seamless API integration to connect systems, enable smooth data flow, and enhance application functionality with secure and efficient communication."
},
{
  icon: supportIcon,
  title: "Maintenance & Support",
  desc: "Reliable maintenance and ongoing support services to ensure optimal performance, security updates, and uninterrupted application operations."
},

];

const Home = () => {


  
const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  company: "",
  phone: "",
  projectType: "",
  budget: "",
  timeline: "",
  description: ""
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const projectRef = ref(database, "project_requests");
    const newProjectRef = push(projectRef);

    await set(newProjectRef, {
      ...formData,
      createdAt: serverTimestamp(),
      status: "new"
    });

    alert("✅ Project request submitted!");

    setFormData({
      fullName: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: ""
    });

  } catch (error) {
    console.error(error);
    alert("❌ Failed to submit");
  }

  setLoading(false);
};





  const [activeIndex, setActiveIndex] = useState(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);


  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);


 useEffect(() => {
  let popupInterval;

  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (!user) {
      // User NOT logged in → show popup every 10 sec
      popupInterval = setInterval(() => {
        setShowLoginPopup(true);
      }, 10000);
    } else {
      // User logged in → never show popup
      setShowLoginPopup(false);
      localStorage.setItem("loginPopupShown", "true");
    }
  });

  return () => {
    clearInterval(popupInterval);
    unsubscribe();
  };
}, []);

const videos = [
  "/videos/video.mp4",
  "/videos/techvideo.mp4",
  "/videos/lastvideo.mp4"
];


  const videoRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  video.src = videos[index];

  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch((err) => {
      console.log("Autoplay blocked:", err);
    });
  }

  const handleEnd = () => {
    setIndex((prev) => (prev + 1) % videos.length);
  };

  video.addEventListener("ended", handleEnd);

  return () => {
    video.removeEventListener("ended", handleEnd);
  };
}, [index]);


  return (
    <>
    <Navbar/>
    {showLoginPopup && (
  <LoginPopup onClose={() => setShowLoginPopup(false)} />
)}

    
    <section className="home-section">
      <div className="home-container">

        {/* LEFT CONTENT */}
        <div className="home-left">
          <p className="trust-badge">🔰 Trusted by 200+ Companies Worldwide</p>

          <h1 className="hero-title">
            Build Custom <br />
            <span>Software Solutions</span> <br />
            That Drive Success
          </h1>

          <p className="hero-subtitle">
            We transform groundbreaking ideas into scalable, secure and
            high-performance digital products tailored to your business needs.
          </p>

          <div className="hero-buttons">
            <button className="btn primary">🚀 Start Your Project</button>
            <button className="btn secondary">📅 Book Free Consultation</button>
          </div>

          <div className="hero-stats">
            ⭐ 5-Star Rated | 🛡 ISO Certified | 👍 98% Client Satisfaction
          </div>
        </div>

        {/* RIGHT CONTENT (VIDEO) */}
        <div className="home-right">
          <video
            ref={videoRef}
            className="hero-video"
            autoPlay
            muted
            playsInline
          />
        </div>

      </div>
    </section>

     {/* SERVICES SECTION */}
      <section id="services" className="services-section">
        <p className="section-tag">OUR CORE SERVICES</p>
        <h2 className="section-title">Comprehensive Software Development Services</h2>
        <p className="section-desc">
          From concept to deployment, we provide end-to-end software development solutions that drive business growth and digital transformation.
        </p>

        <div className="services-cards">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon-box">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href="#" className="know-more">Know More →</a>
            </div>
          ))}
        </div>
      </section>



        <section id="technologie" className="tech-section">
      {/* Main Heading */}
      <h1 className="tech-main-title">Technologies Stack</h1>

      {/* Sub Heading */}
      <h2 className="tech-sub-title">
        Cutting-edge tech stack for modern solutions
      </h2>
      <p className="tech-desc">
        Scalable, secure, and high-performance technologies tailored to your business needs.
      </p>

      <div className="tech-grid">
  {techStack.map((tech, index) => (
    <motion.div
      key={index}
      className="tech-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <img src={tech.icon} alt={tech.name} />
      <span>{tech.name}</span>
    </motion.div>
  ))}
</div>
    </section>

      <section id ="about" className="achievements-section">
      <div className="achievements-container">

        {/* LEFT SIDE */}
        <div className="achievements-left">
          <h1 className="big-number">500+</h1>
          <h2 className="achievements-title">Projects Delivered Successfully</h2>
          <p className="achievements-desc">
            Trusted by startups to enterprise companies worldwide for their digital transformation journey.
          </p>

          {/* STATS BAR */}
          <div className="stats-bar">
            <div className="stat-item">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#facc15" color="#facc15" />
                ))}
              </div>
              <span>4.9/5 Rating</span>
            </div>

            <div className="divider" />

            <div className="stat-item">
              <Users size={18} className="icon blue" />
              <span>200+ Happy Clients</span>
            </div>

            <div className="divider" />

            <div className="stat-item">
              <BadgeCheck size={18} className="icon green" />
              <span>ISO Certified</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="achievements-right">
          {features.map((item, index) => (
            <div className="achievement-card" key={index}>
              {item.icon && <div className="icon-box">{item.icon}</div>}
              <h4>{item.title}</h4>
              {item.desc && <p>{item.desc}</p>}
            </div>
          ))}
        </div>

      </div>
    </section>


      <section id="pricing" className="pricing-section">

      <div className="pricing-header fade-down">
        <h1>Flexible Pricing Plans</h1>
        <p>Choose the perfect plan for your project needs and budget requirements</p>
      </div>

      <div className="pricing-container">

        {/* Basic */}
        <div className="pricing-card fade-up delay-1">
          <h3>Basic</h3>
          <h2><span>$5,000</span> <small>/project</small></h2>
          <p className="desc">Perfect for startups and small businesses</p>
          <ul>
            <li>Custom Web Application</li>
            <li>Responsive Design</li>
            <li>Basic SEO Optimization</li>
            <li>Contact Form Integration</li>
            <li>3 Months Support</li>
            <li>Source Code Delivery</li>
            <li>Basic Documentation</li>
            <li>Email Support</li>
          </ul>
          <button className="btn-outline">Get Proposal</button>
        </div>

        {/* Standard */}
        <div className="pricing-card popular fade-up delay-2">
          <div className="badge">Most Popular</div>
          <h3>Standard</h3>
          <h2><span>$15,000</span> <small>/project</small></h2>
          <p className="desc">Ideal for growing businesses</p>
          <ul>
            <li>Everything in Basic</li>
            <li>Mobile App Development</li>
            <li>API Development</li>
            <li>Database Integration</li>
            <li>Payment Gateway</li>
            <li>6 Months Support</li>
            <li>Advanced Analytics</li>
            <li>Priority Support</li>
            <li>Performance Optimization</li>
            <li>Security Audit</li>
          </ul>
          <button className="btn-primary">Get Proposal</button>
        </div>

        {/* Enterprise */}
        <div className="pricing-card fade-up delay-3">
          <h3>Enterprise</h3>
          <h2><span>Custom</span> <small>/quote</small></h2>
          <p className="desc">For large organizations</p>
          <ul>
            <li>Everything in Standard</li>
            <li>Custom Architecture</li>
            <li>Microservices Design</li>
            <li>Cloud Infrastructure</li>
            <li>DevOps Setup</li>
            <li>12 Months Support</li>
            <li>Dedicated Team</li>
            <li>24/7 Support</li>
            <li>Training & Consultation</li>
            <li>Scalability Planning</li>
          </ul>
          <button className="btn-outline">Get Proposal</button>
        </div>

      </div>
    </section>



     <section className="testimonial-section">
      <div className="testimonial-header fade-down">
        <h2>What Our Clients Say</h2>
        <div className="rating">
          ★★★★★ <span>4.9/5 based on 200+ reviews</span>
        </div>
      </div>

      <div className="testimonial-card fade-up delay-2">
        <span className="arrow left">‹</span>

        <div className="stars">★★★★★</div>

        <p className="testimonial-text">
          “TechSolutions Pro's cloud architecture and DevOps expertise helped us scale our platform to handle millions of users. Their technical knowledge and problem-solving skills are top-notch.”
        </p>

        <div className="author">
          <img src="https://i.pravatar.cc/80" alt="user" />
          <div>
            <h4>David Park</h4>
            <small>VP Engineering, DataFlow</small>
          </div>
        </div>

        <span className="arrow right">›</span>
      </div>

      <div className="dots">
        <span></span><span></span><span className="active"></span>
      </div>
    </section>


     <section id="requestproject" className="pc-section">
  {/* LEFT CONTENT */}
  <div className="pc-left fade-up">
    <div className="pc-icon">🚀</div>

    <h2>Ready to Build Something Powerful?</h2>

    <p>
      Share your idea with us and get expert guidance, a clear technical roadmap,
      and a transparent cost estimate — completely free.
    </p>

    <div className="pc-points">
      <span>✔ No commitment required</span>
      <span>✔ NDA & data protection</span>
      <span>✔ 24-hour response time</span>
      <span>✔ Senior-level engineers</span>
    </div>

    <div className="pc-trust">
      <strong>Trusted by 200+ companies worldwide</strong>
      <small>⭐ 4.9/5 average client rating</small>
    </div>
  </div>

 <form className="pc-form fade-up delay-2" onSubmit={handleSubmit}>
  <h3 className="pc-form-title">Project Details</h3>
  <p className="pc-form-sub">
    Fill out the form and our team will contact you shortly.
  </p>

  <div className="pc-grid">
    <input
      type="text"
      name="fullName"
      placeholder="Full Name *"
      required
      value={formData.fullName}
      onChange={handleChange}
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address *"
      required
      value={formData.email}
      onChange={handleChange}
    />

    <input
      type="text"
      name="company"
      placeholder="Company / Startup"
      value={formData.company}
      onChange={handleChange}
    />

    <input
      type="tel"
      name="phone"
      placeholder="Phone Number"
      value={formData.phone}
      onChange={handleChange}
    />

    <select
      name="projectType"
      required
      value={formData.projectType}
      onChange={handleChange}
    >
      <option value="">Project Type *</option>
      <option>Web Application</option>
      <option>Mobile App</option>
      <option>SaaS Platform</option>
      <option>UI/UX Design</option>
    </select>

    <select
      name="budget"
      value={formData.budget}
      onChange={handleChange}
    >
      <option value="">Budget Range</option>
      <option>$5k – $10k</option>
      <option>$10k – $25k</option>
      <option>$25k+</option>
    </select>
  </div>

  <select
    className="full"
    name="timeline"
    value={formData.timeline}
    onChange={handleChange}
  >
    <option value="">Expected Timeline</option>
    <option>Less than 1 month</option>
    <option>1–3 months</option>
    <option>3–6 months</option>
  </select>

  <textarea
    name="description"
    placeholder="Describe your project goals, features, and expectations..."
    required
    value={formData.description}
    onChange={handleChange}
  />

  <div className="pc-footer">
    <span className="pc-note">
      🔒 We respect your privacy. No spam. NDA available.
    </span>

    <button type="submit" disabled={loading}>
      {loading ? "Submitting..." : "Get Free Consultation"}
    </button>
  </div>
</form>


</section>


<section className="faq-section">
  <h2>Frequently Asked Questions</h2>
  <p>
    Find answers to common questions about our software development services and process
  </p>

  <div className="faq-container">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className={`faq-item ${activeIndex === index ? "active" : ""}`}
        onClick={() => toggleFAQ(index)}
      >
        <div className="faq-question">
          {faq.question}
          <span className="faq-arrow">
            {activeIndex === index ? "▲" : "▼"}
          </span>
        </div>

        <div className="faq-answer">
          {faq.answer}
        </div>
      </div>
    ))}
  </div>
</section>



<Footer/>

  
    </>
  );
};

export default Home;
