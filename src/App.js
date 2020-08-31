import React, { useEffect, useState } from "react";
import "./styles.css";
import { MailIcon, LinkedInIcon } from "./Icons";
import { GuestBook } from "./GuestBook";

export default function App() {
  const [scrollOffSet, setScrollOffSet] = useState(0);

  useEffect(() => {
    let handler = (e) => setScrollOffSet(window.scrollY);
    window.addEventListener("scroll", handler, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  let headerAlpha = Math.min(0.5, scrollOffSet / 300);
  let menuBrightness = Math.min(255, scrollOffSet);

  return (
    <div className="App">
      <a id="top" />
      <header
        className="main-header"
        style={{ background: `rgba(0,0,0,${headerAlpha})` }}
      >
        <div className="main-header-logo">
          <a
            href="#top"
            style={{
              color: `rgb(${menuBrightness}, ${menuBrightness}, ${menuBrightness})`
            }}
          >
            K.
          </a>
        </div>
        <nav className="main-nav">
          <ul
            className="main-nav-list"
            style={{
              color: `rgb(${menuBrightness}, ${menuBrightness}, ${menuBrightness})`
            }}
          >
            <li>
              <a href="#guestbook">Gæstebog</a>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="intro">
        <div className="intro-container">
          <h1 className="intro-h1">Hej, jeg hedder Karen.</h1>
          <h2 className="intro-h2">
            Vil du hyre min mands lillebrors fantastiske kone?{" "}
            <a href="https://cph.kiwi/">Se her!</a>
          </h2>
          <div className="intro-link-to-more">
            <a className="intro-link-to-guest-book" href="#guest-book">
              Sig hej
            </a>
          </div>
        </div>
      </div>
      <GuestBook />
      <div className="contact-section" id="contact">
        <div className="contact-subsection-1">
          <h1 className="contact-h1">Karen Meier Rasmussen</h1>
          <div className="contact-subsection-2">
            <a href="mailto:karenmeierrasmussen@hotmail.com">
              <MailIcon />
            </a>
            <a href="https://www.linkedin.com/in/karen-meier-rasmussen-7b00a1157/">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="footer-p">
          Handcrafted with care by <a href="https://cph.kiwi/">Beth Jackson</a>.
        </p>
      </div>
    </div>
  );
}
