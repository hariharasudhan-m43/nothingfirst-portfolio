import React from "react";
import "./App.css";
import { useRef } from "react";

export default function App() {
 const sliderRef = useRef(null);

  const services = [
    { id: "app", img: "/appdev.jpg", head: "Application", con: "App description", btn: "Start" },
    { id: "web", img: "/webdev.jpg", head: "Website", con: "Web description", btn: "Create" },
    { id: "ecom", img: "/ecom.jpg", head: "E-commerce", con: "Ecom description", btn: "Build" },
    { id: "dig", img: "/digital marketing.jpg", head: "Marketing", con: "Marketing description", btn: "Boost" },
    { id: "uxui", img: "/ux&ui.jpg", head: "UX/UI", con: "Design description", btn: "Design" },
  ];

  const scrollToSlide = (index) => {
    const container = sliderRef.current;
    const slideWidth = container.children[0].offsetWidth + 20; // slide width + gap
    container.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
  };


  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <img src="/logo2.png" className="logo" alt="Logo" />
        <div id="nav">
          <ul id="nav-option">
            <li id="Discover"><a href="#home">Discover</a></li>
            <li id="About"><a href="#about1">About</a></li>
            <li id="Services"><a href="#amazing">Services</a></li>
            <li id="Courses"><a href="#courses">Courses</a></li>
            <li id="Reachout"><a href="#build">Reach Out</a></li>
          </ul>
          <span id="letstalk">Let's Talk</span>
        </div>
      </div>

      {/* Home */}
      <div className="home" id="home">
        <p className="home1">
          <i>
            Where We Partner With You To Turn Your Innovative Ideas Into
            Groundbreaking Technological Solution.
          </i>
        </p>
        <div className="home2">
          <h1>We Build Tomorrow, Today</h1>
          <div className="home22">
            <h3>
             Lets Our team of experts is ready to assist you every step of the way,
                from conceptualization to implementation. Let's create something extraordinary together!
            </h3>
            <p className="p2">Let's Talk</p>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="about1" id="about1">
        <p className="abouth">
          About <span>What We Do & Who We Are</span>
        </p>
        <div className="abindex">
          <div>
            <img className="abimg" src="/building.jpg" alt="Building" />
          </div>
          <div className="ab1">
            <p className="abhead">Welcome to NothingFirst</p>
            <p className="abtitle">
              where we breathe life into dreams and transform visions into
              reality. Here, we don't just build IT solutions—we craft
              extraordinary experiences from scratch. Partner with us, whether
              you're launching a daring startup or steering an established
              enterprise, and let's sculpt the future together. Your ideas fuel
              our passion, and from inception to realization, we've got your
              back. Let's create something remarkable.
            </p>
          </div>
        </div>

        <div className="abpart2">
          {[
            {
              title: "Achieve Seamless IT Success",
              desc: "Elevate your performance effortlessly with NothingFirst. Simplified IT solutions designed for streamlined success and growth.",
            },
            {
              title: "Top-Tier Security Solutions",
              desc: "Protect your business with advanced security solutions. NothingFirst ensures your data and operations remain secure and uncompromised.",
            },
            {
              title: "Trusted IT Solutions",
              desc: "Rely on NothingFirst for dependable, client-focused IT services. We deliver solutions you can trust for long-term success.",
            },
            {
              title: "IT Service",
              desc: "Rely on NothingFirst for dependable, client-focused IT services. We deliver solutions you can trust for long-term success.",
            },
            {
              title: "24/7 Support",
              desc: "Count on us around the clock for unwavering assistance and solution.",
            },
            {
              title: "Certified Company",
              desc: "Your Accredited Partner for Unmatched Quality and Professionalism",
            },
          ].map((item, i) => (
            <div className="col" key={i}>
              <div>{item.title}</div>
              <p className="colcontent">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Amazing Services */}
   <div className="amazing" id="amazing">
  <div className="amazh1">
    <p className="amazingh">
      Amazing <span>Service And Features For You</span>
    </p>
  </div>

  {/* Navigation Buttons */}
  <div className="amazbuttons">
    <div className="but"><a href="#app">Application Development</a></div>
    <div className="but"><a href="#web">Website Development</a></div>
    <div className="but"><a href="#ecom">E-commerce Development</a></div>
    <div className="but"><a href="#dig">Digital Marketing</a></div>
    <div className="but"><a href="#uxui">UX & UI Designing</a></div>
  </div>

  {/* Carousel Section */}
  <div className="carousel-container">
    <div className="carousel-wrapper">
      {[
        {
          id: "app",
          img: "/appdev.jpg",
          head: "Bring Your Application Ideas to Life",
          con: "Transform your vision into reality with our cross-platform app development. Using tools like Flutter, we create engaging, future-ready apps for Android and iOS.",
          btn: "Start Building Your App",
        },
        {
          id: "web",
          img: "/webdev.jpg",
          head: "Custom Web Development for Your Business",
          con: "We build responsive, user-friendly websites tailored to your needs. From design to launch, our team ensures a seamless experience for your customers.",
          btn: "Create Your Website Today",
        },
        {
          id: "ecom",
          img: "/ecom.jpg",
          head: "Expand Your Business with Mobile-Ready E-Commerce",
          con: "We create secure, sleek, and efficient e-commerce sites tailored to your needs. Enjoy easy product management, seamless payments, and enhanced SEO for higher rankings.",
          btn: "Let’s build your store today",
        },
        {
          id: "dig",
          img: "/digital marketing.jpg",
          head: "Grow Your Business with Digital Marketing",
          con: "Boost your online presence with our tailored digital marketing strategies. Drive traffic, increase engagement, and achieve measurable results.",
          btn: "Boost Your Business Now",
        },
        {
          id: "uxui",
          img: "/ux&ui.jpg",
          head: "Craft Exceptional User Experiences",
          con: "Our UX/UI design services create intuitive, visually appealing interfaces that engage users and enhance your brand.",
          btn: "Design Your Experience",
        },
      ].map((s) => (
        <div className="slide" id={s.id} key={s.id}>
          <img src={s.img} className="slide-img" alt={s.head} />
          <div className="slide-con">
            <p className="head">{s.head}</p>
            <p className="headcon">{s.con}</p>
            <button className="devbutton">{s.btn}</button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Courses */}
      <div className="courses" id="courses">
        <div className="corsh1">
          <p className="corsh">
            We offered Courses <span>You Can Get</span>
          </p>
        </div>
        <div className="corscon">
          {[
            {
              img: "/master mobile.jpg",
              title: "Master Mobile Application Development course",
              desc: "Build beautiful, functional apps with ease. Perfect for beginners and experienced developers looking to level up.",
            },
            {
              img: "/webdev.jpg",
              title: "Launch Your Web Development Journey course",
              desc: "Master the fundamentals of building modern websites with hands-on lessons in database setup and responsive layouts.",
            },
            {
              img: "/digital marketing.jpg",
              title: "Master Digital Marketing for Success course",
              desc: "Gain essential skills to grow your business with expert-led courses. Learn practical strategies and achieve real results.",
            },
          ].map((c, i) => (
            <div className="corscon1" key={i}>
              <img src={c.img} alt={c.title} />
              <div className="corscon2">
                <p className="corscon3">{c.title}</p>
                <div>{c.desc}</div>
                <button className="corsbtn"><p>Start Growing Today</p></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Build Section */}
      <div className="build" id="build">
        <div className="build1">
          <p className="buildh">
            Ready to Build Something <span>Great Together?</span>
          </p>
        </div>
        <center>
          <form className="login">
            <div className="log1">
              <div className="field">
                <label>Name <span>*</span></label>
                <input type="text" name="name" placeholder="e.g., John Doe" />
              </div>
              <div className="field">
                <label>Email id <span>*</span></label>
                <input type="email" name="email" placeholder="e.g., johndoe@example.com" />
              </div>
              <div className="field">
                <label>Subject <span>*</span></label>
                <input type="text" name="subject" placeholder="e.g., I’m Interested in Your Services" />
              </div>
              <div className="field">
                <label>Comment <span>*</span></label>
                <input type="text" name="comment" placeholder="e.g., I would like to know more about your services." />
              </div>
            </div>
            <div className="cta">
              <p>Submit Inquiry</p>
            </div>
          </form>
        </center>
      </div>

      {/* Footer */}
      <footer>
        <div className="footertop1">
          <div className="footertop1-1">
            <img src="/logo2.png" alt="Logo" />
            <p>
              Let's Our team of experts is ready to assist you every step of the way, from conceptualization to implementation. Let's create something extraordinary together!
            </p>
          </div>
          <div className="footertop1-2">
            <div>Company</div>
            <p>About us</p>
            <p>Service</p>
            <p>Term & Condition</p>
            <p>Refund Policy</p>
          </div>
          <div className="footertop1-3">
            <div className="contact">Contact Us</div>
            <p>+91 9092859208</p>
            <p>contact@nothingfirst.in</p>
            <div className="footimg">
              <img src="/instagram.png" alt="Instagram" />
              <img src="/facebook.png" alt="Facebook" />
              <img src="/twitter.png" alt="Twitter" />
              <img src="/linkedin.png" alt="LinkedIn" />
            </div>
          </div>
        </div>
        <p>Copyright © 2024. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
