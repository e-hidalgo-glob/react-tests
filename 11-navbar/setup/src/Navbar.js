import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";
import NavLink from "./NavLink";
import SocialIcon from "./SocialIcon";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => setShowLinks(!showLinks);

  const handleLinksStyles = () => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  };

  useEffect(() => {
    handleLinksStyles();
  }, [showLinks]);

  const navLinks = links.map((link, index) => (
    <NavLink linkData={link} key={index} />
  ));

  const socialIcons = social.map((link, index) => (
    <SocialIcon socialIcon={link} key={index} />
  ));

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {navLinks}
          </ul>
        </div>
        <ul className="social-icons">{socialIcons}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
