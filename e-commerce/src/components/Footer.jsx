/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
        <section className="contact-box">
          
                <div className="content-box-footer">
                <h3>Ready to get started?</h3>
                <h3>Talk to us today</h3>
                </div>
                <div className="btn-footer">
                <NavLink to="/">
              <button >Get Started</button>
            </NavLink>
    
            </div>
        </section>

        <footer>
            <div className="container">
                <div className="footer-about">
                    <h3>TECH SPACE</h3>
                </div>
           
            <div className="footer-social">
                <h3>Follow US</h3>
            </div>
            <div>
            <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaFacebook className="icons" />
              </div>
              <div>
            </div>
            </div>
            <div className="footer-bottom-section">
        
          <div className="content-footer">
            <p>
              @{new Date().getFullYear()} ThapaTechnical. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
        </>
    )
}
export default Footer;