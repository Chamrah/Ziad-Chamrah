import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({navOpen}) =>{

    const lastActiveLink = useRef(null);
    const activeBox = useRef(null);


    const initActiveBox = () => {
         console.log(lastActiveLink.current);
        activeBox.current.style.top = `${lastActiveLink.current.offsetTop}px`;
        activeBox.current.style.left = `${lastActiveLink.current.offsetLeft}px`;
        activeBox.current.style.width = `${lastActiveLink.current.offsetWidth}px`;
        activeBox.current.style.height = `${lastActiveLink.current.offsetHeight}px`;
    
    };
    useEffect(initActiveBox, []); 

    window.addEventListener('resize',initActiveBox);

    const activateCurrentLink = (event) => {
      lastActiveLink.current?.classList.remove('active');
      event.target.classList.add('active');
      lastActiveLink.current = event.target;

      activeBox.current.style.top = `${lastActiveLink.current.offsetTop}px`;
        activeBox.current.style.left = `${lastActiveLink.current.offsetLeft}px`;
        activeBox.current.style.width = `${lastActiveLink.current.offsetWidth}px`;
        activeBox.current.style.height = `${lastActiveLink.current.offsetHeight}px`;


    }

    // const activateCurrentLink

    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Work',
          link: '#work',
          className: 'nav-link'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];
    return (
      <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      {navItems.map(({ label, link, className }, key) => (
  <a
    href={link}
    key={key}
    className={className}
    ref={className.includes('active') ? lastActiveLink : null} // Attache `lastActiveLink` uniquement à l'élément actif
    onClick={activateCurrentLink}
  >
    {label}
  </a>
))}

            <div className="active-box" ref={activeBox}></div>
        </nav>
    )
}
// Mafhmthach
Navbar.PropTypes = {
  navOpen : PropTypes.bool.isRequired
}

export default Navbar; 