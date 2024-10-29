import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import '../assete/css/header.css'; 
import logo from "../assete/logo/LOGO.png";
import { Link } from 'react-router-dom';
import { FaAngleDown, FaTimes } from 'react-icons/fa';
// import {motion, useScroll} from 'framer-motion';



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 0) {
      header.classList.add('blue');
    } else {
      header.classList.remove('blue');
    }
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setMenuOpen(false); 
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
      setIsOpen(!isOpen);
      setIsOpens(false); 
      setIsOpenss(false);
  };


  
  const [isOpens, setIsOpens] = useState(false);

  const toggleDropdowns = () => {
      setIsOpens(!isOpens);
      setIsOpen(false); 
      setIsOpenss(false);
  };
 

  const [isOpenss, setIsOpenss] = useState(false);

  const toggleDropdownss = () => {
      setIsOpenss(!isOpenss);
      setIsOpen(false); 
      setIsOpens(false);
  };
 

  const closeDropdownOnScroll = (e) => {
    if (isOpen || isOpens || isOpenss) {
      e.stopPropagation();
      setIsOpens(false);
      setIsOpen(false);
      setIsOpenss(false);
    }
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };

  window.addEventListener('scroll', closeDropdownOnScroll);


  const phd_peoposal = () => {
    navigate("");
    
    
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
//   const {scrollYProgress} =useScroll()

  return (
    <>
{/*    
   <motion.div
      style={{scaleX:scrollYProgress,
        position:'fixed',
        top:0,
        right:0,
        left:0,
        height:2,
        background:"blue",
        transformOrigin:"0%",
        zIndex: 9999,
    }}
    ></motion.div> */}
    <header className={`header ${menuOpen ? 'open' : ''}`} id="header">
      <div className="lg">
        <Link to="/Home"><img src={logo} alt="Logo" /></Link>
      </div>
      <div className="menu-icons" onClick={toggleMenu}>
      {menuOpen ? <FaTimes style={{color:"#066fb2",fontSize:"30px"}} />  : ( // Conditionally render the close icon if menuOpen is true
            <>
              <div className="menu-icon-bar"></div>
              <div className="menu-icon-bar"></div>
              <div className="menu-icon-bar"></div>
            </>
          )}
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <div className='menus_add_line'>
        <ul>
        <li className={isActive("/Home")}>
            <Link to="/Home"   onClick={phd_peoposal}>
              Home
            </Link>
          </li>
          <li className={isActive("/About")}>
            <Link to="/About"   onClick={phd_peoposal}>
             About
            </Link>
          </li>
          <li className={isActive("/Service")}>
            <Link to="/Service"   onClick={phd_peoposal}> 
             Service
            </Link>
          </li>
         
          <li onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>
             <div className="nav-item dropdown">
                                <Link to=""  className="nav-link dropdown-toggle" data-bs-toggle="dropdown"  onClick={toggleDropdown}>Research services <FaAngleDown /></Link>
                                <div className={`dropdown-menu rounded ${isOpen ? 'show ' : ''}`} >
                                <div className='ctl' style={{background:"#066fb2",height:"5px",width:"100%",top:"0",marginTop:"-9px"}}>
                                   
                                   </div>
                                    <Link to="/Phdtopicselection"  className="dropdown-item"  onClick={phd_peoposal}>Research Topic Selection</Link>
                                    <Link to="/Researchproposal" className="dropdown-item"  onClick={phd_peoposal}>Research Proposal</Link>
                                    <Link to="/Researchpaperwrite" className="dropdown-item"  onClick={phd_peoposal}>Research Paper Writting</Link>
                                    <Link to="/Journalassistance"  className="dropdown-item" onClick={phd_peoposal} >Journal Assistance</Link>
                                    <Link to="/Synopsisprepaation"  className="dropdown-item" onClick={phd_peoposal} >Synopsis Preparation</Link>
                                    <Link to="/Thesiswriting"  className="dropdown-item"  onClick={phd_peoposal}>Thesis Writing</Link>
                                </div>
                            </div> 
          </li>
          
          <li onMouseEnter={toggleDropdowns} onMouseLeave={closeDropdown}>
             <div className="nav-item dropdown">
                                <Link to=""  className="nav-link dropdown-toggle" data-bs-toggle="dropdown"  onClick={toggleDropdowns}>Develpoment service  <FaAngleDown /></Link>
                                <div className={`dropdown-menu rounded ${isOpens ? 'show' : ''}`} >
                                <div className='ctl' style={{background:"#066fb2",height:"5px",width:"100%",top:"0",marginTop:"-9px"}}>
                                   
                                   </div>
                                    <Link to="/Matlabdevelopment"  className="dropdown-item" onClick={phd_peoposal}>Matlab Development</Link>
                                    <Link to="/Pythondevelopment" className="dropdown-item" onClick={phd_peoposal}>Python Development</Link>
                                    <Link to="/Javadevelopment"  className="dropdown-item" onClick={phd_peoposal}>Java Development</Link>
                                    <Link to="/VLSIdevelopment"  className="dropdown-item" onClick={phd_peoposal}>VlSI Development</Link>
                                    <Link to="/Seditdevelopment"  className="dropdown-item" onClick={phd_peoposal}>S-EDIT Development</Link>
                                    <Link to="/Ns2ns3development"  className="dropdown-item" onClick={phd_peoposal}>NS-2 & NS-3 Development</Link>
                                    <Link to="/Simulinkdevelopment"  className="dropdown-item" onClick={phd_peoposal}>Simulink Development</Link>
                                    <Link to="/Hfssdevelopment"  className="dropdown-item" onClick={phd_peoposal}s>HFSS Development</Link>
                                </div>
                            </div> 
          </li>


          <li onMouseEnter={toggleDropdownss} onMouseLeave={closeDropdown}>
             <div className="nav-item dropdown">
                                <Link to=""  className="nav-link dropdown-toggle" data-bs-toggle="dropdown"  onClick={toggleDropdownss}>Add-On services <FaAngleDown /></Link>
                                
                                <div className={`dropdown-menu rounded ${isOpenss ? 'show' : ''}`} onClick={closeDropdownOnScroll}>
                                <div className='ctl' style={{background:"#066fb2",height:"5px",width:"100%",top:"0",marginTop:"-9px"}}>
                                   
                                   </div>
                                <Link to="/Plagiarismchecking"  className="dropdown-item" onClick={phd_peoposal}>Plagiarism Checking</Link>
                                    <Link to="/Grammarcheck" className="dropdown-item" onClick={phd_peoposal}>Grammer Checking</Link>
                                    <Link to="/Proofreading"  className="dropdown-item" onClick={phd_peoposal}>Proof Reading</Link>
                                    <Link to="/Language"  className="dropdown-item" onClick={phd_peoposal}>Language Correction</Link>
                                    <Link to="/Literaturereview"  className="dropdown-item" onClick={phd_peoposal}>Literature Review</Link>
                                </div>
                            </div> 
          </li>
          
        
       
          
          <li className={isActive("/Contact")}>
            <Link to="/Contact"  onClick={phd_peoposal}>
              Contact
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    </header>
    </>
  );
};

export default Header;
