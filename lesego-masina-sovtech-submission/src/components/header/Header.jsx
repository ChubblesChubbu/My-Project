 import React, { useState } from 'react';
 import "./header.css";
 
export const Header = () => {


  /*  Change Background headr */
  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");   
  });

  /*  ToggleMenu */
  const[Toggle, showMenu] = useState(false);
  const[activeNav, setActiveNav] = useState("#home");

   return (
     <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav_logo">Lesego Masina Portfolio</a>

          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">

            <li className="nav__item">
                <a href="#home" onClick={() => setActiveNav("#home")}
                 className={activeNav === "#home" ? "nav__link active-link" :
                 "nav__link" }>
                  <i className="uil uil-estate nav__icon"></i>
                  Home
                </a>
              </li>

              

              <li className="nav__item">
                <a href="#about" onClick={() => setActiveNav("#about")}
                 className={activeNav === "#about" ? "nav__link active-link" :
                 "nav__link" }>
                  <i className="uil uil-estate nav__icon"></i>
                  About
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" onClick={() => setActiveNav("#service")}
                 className={activeNav === "#services" ? "nav__link active-link" :
                 "nav__link" }>
                  <i className="uil uil-message nav__icon"></i>
                  Services&Skills
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" onClick={() => setActiveNav("#contact")}
                 className={activeNav === "#contact" ? "nav__link active-link" :
                 "nav__link" }>
                  <i className="uil uil-estate nav__icon"></i>
                  Contact
                </a>
              </li>

               <div>
                <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)} ></i>
               </div>
     
            </ul>
            
          </div>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i class="uil uil-apps"></i>
          </div>
        </nav>   
     </header>
   )
 }
 