"use client";
import headerStyles from "../styles/header.module.css"
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "next/image";
import { NavDropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from "next/link";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <>

<Navbar expand="lg" className={`${headerStyles['header']}`}>
        <Container>
          <Navbar.Brand href="/">
            <Image
              src={require('../../assets/images/header/nav-logo.svg').default}
              width={170}
              height={70}
              alt="camelab-logo"
            />
          </Navbar.Brand>
          <NavDropdown  className={`${headerStyles["flag-mobile"]} flag`} title={<span > 
              
              <Image
                src={selectedLanguage === 'en'
                  ? require('../../assets/images/flag/English.png').default
                  : require('../../assets/images/flag/arabic.png').default}
                width={32}
                height={22}
                alt="flag-icon-us"
              /></span>} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => handleLanguageChange('en')} className={`${headerStyles["flag-item"]}`} >
                <span className={`${headerStyles["flag-icon flag-icon-us"]}`}>
                  <Image
                    src={require('../../assets/images/flag/English.png').default}
                    width={32}
                    height={22}
                    alt="flag-icon-us"
                  />
                </span>
                English
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLanguageChange('ar')} className={`${headerStyles["flag-item"]}`}>
                <span className={`${headerStyles["flag-icon flag-icon-sa"]}`}>
                  <Image
                    src={require('../../assets/images/flag/arabic.png').default}
                    width={32}
                    height={22}
                    alt="flag-icon-sa"
                  />
                </span> Arabic</NavDropdown.Item>
            </NavDropdown>
          <div onClick={handleShow} className={`${headerStyles['navbar-toggler']}`} > <Image
              src={require('../../assets/images/header/header-toggler.svg').default}
              width={36}
              height={36}
              alt="camelab-logo"
            /></div>
          <Navbar.Collapse>
            <Nav className={`${headerStyles['leftside-links']} me-auto align-items-center`}>
              <Nav.Link className={`${headerStyles['header-links']} ${headerStyles['active-page']} underline`} href="/about">About Us</Nav.Link>
              <Nav.Link className={`${headerStyles['header-links']} underline`} href="/contact">Contact Us</Nav.Link>
            </Nav>
            <Nav className={`${headerStyles['rightside-links']} ms-auto align-items-center`} >
            <NavDropdown className={`${headerStyles["flag-desktop"]} flag mx-3`} title={<span > 
              
              <Image
                src={selectedLanguage === 'en'
                  ? require('../../assets/images/flag/English.png').default
                  : require('../../assets/images/flag/arabic.png').default}
                width={32}
                height={22}
                alt="flag-icon-us"
              /></span>} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => handleLanguageChange('en')} className={`${headerStyles["flag-item"]}`} >
                <span className={`${headerStyles["flag-icon flag-icon-us"]}`}>
                  <Image
                    src={require('../../assets/images/flag/English.png').default}
                    width={32}
                    height={22}
                    alt="flag-icon-us"
                  />
                </span>
                English
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLanguageChange('ar')} className={`${headerStyles["flag-item"]}`}>
                <span className={`${headerStyles["flag-icon flag-icon-sa"]}`}>
                  <Image
                    src={require('../../assets/images/flag/arabic.png').default}
                    width={32}
                    height={22}
                    alt="flag-icon-sa"
                  />
                </span> Arabic</NavDropdown.Item>
            </NavDropdown>
              <Nav.Link className={`${headerStyles['header-links']} underline`} href="/creator">Become a creator</Nav.Link>
              <Nav.Link className={`${headerStyles['header-links']}`} href="#link"> <button className="primary-button" variant="primary">Login</button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
     
         
         
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}  className={`${headerStyles['offcanvas']} ${headerStyles['offcanvas-start']} `}>
        <Offcanvas.Header className={`${headerStyles['offcanvas-header']}`} >
          <Offcanvas.Title><Link href="/">
          <Image
              src={require('../../assets/images/header/nav-logo.svg').default}
              width={170}
              height={70}
              alt="camelab-logo"
            />
          </Link></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={`${headerStyles['offcanvas-body']}`} >
         <div className="d-flex flex-column">
         <Link className={`${headerStyles['header-links']} ${headerStyles['active-page']} `} href="/about">About Us</Link>
              <Link className={`${headerStyles['header-links']} `} href="/contact">Contact Us</Link>
              <Link className={`${headerStyles['header-links']} `} href="/creator">Become a creator</Link>
              <Link className={`${headerStyles['header-links']}`} href="#link"> <button className="primary-button" variant="primary">Login</button></Link>
         </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;








































// import headerStyles from "../styles/header.module.css"
// import React, { useState } from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Image from "next/image";
// import { NavDropdown } from "react-bootstrap";

// function Header() {
//   const [selectedLanguage, setSelectedLanguage] = useState('en');
//   const handleLanguageChange = (language) => {
//     setSelectedLanguage(language);
//   };
//   return (
//     <>
//       <Navbar expand="lg" className={`${headerStyles['header']}`}>
//         <Container>
//           <Navbar.Brand href="/">
//             <Image
//               src={require('../../assets/images/header/nav-logo.svg').default}
//               width={170}
//               height={70}
//               alt="camelab-logo"
//             />
//           </Navbar.Brand>
//           <NavDropdown  className={`${headerStyles["flag-mobile"]} flag`} title={<span > 
              
//               <Image
//                 src={selectedLanguage === 'en'
//                   ? require('../../assets/images/flag/English.png').default
//                   : require('../../assets/images/flag/arabic.png').default}
//                 width={32}
//                 height={22}
//                 alt="flag-icon-us"
//               /></span>} id="basic-nav-dropdown">
//               <NavDropdown.Item onClick={() => handleLanguageChange('en')} className={`${headerStyles["flag-item"]}`} >
//                 <span className={`${headerStyles["flag-icon flag-icon-us"]}`}>
//                   <Image
//                     src={require('../../assets/images/flag/English.png').default}
//                     width={32}
//                     height={22}
//                     alt="flag-icon-us"
//                   />
//                 </span>
//                 English
//               </NavDropdown.Item>
//               <NavDropdown.Item onClick={() => handleLanguageChange('ar')} className={`${headerStyles["flag-item"]}`}>
//                 <span className={`${headerStyles["flag-icon flag-icon-sa"]}`}>
//                   <Image
//                     src={require('../../assets/images/flag/arabic.png').default}
//                     width={32}
//                     height={22}
//                     alt="flag-icon-sa"
//                   />
//                 </span> Arabic</NavDropdown.Item>
//             </NavDropdown>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" className={`${headerStyles['navbar-toggler']}`} />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className={`${headerStyles['leftside-links']} me-auto align-items-center`}>
//               <Nav.Link className={`${headerStyles['header-links']} ${headerStyles['active-page']} underline`} href="/about">About Us</Nav.Link>
//               <Nav.Link className={`${headerStyles['header-links']} underline`} href="/contact">Contact Us</Nav.Link>
//             </Nav>
//             <Nav className={`${headerStyles['rightside-links']} ms-auto align-items-center`} >
           
//               <Nav.Link className={`${headerStyles['header-links']} underline`} href="/creator">Become a creator</Nav.Link>
//               <Nav.Link className={`${headerStyles['header-links']}`} href="#link"> <button className="primary-button" variant="primary">Login</button></Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
     
//           <NavDropdown className={`${headerStyles["flag-desktop"]} flag mx-2`} title={<span > 
              
//               <Image
//                 src={selectedLanguage === 'en'
//                   ? require('../../assets/images/flag/English.png').default
//                   : require('../../assets/images/flag/arabic.png').default}
//                 width={32}
//                 height={22}
//                 alt="flag-icon-us"
//               /></span>} id="basic-nav-dropdown">
//               <NavDropdown.Item onClick={() => handleLanguageChange('en')} className={`${headerStyles["flag-item"]}`} >
//                 <span className={`${headerStyles["flag-icon flag-icon-us"]}`}>
//                   <Image
//                     src={require('../../assets/images/flag/English.png').default}
//                     width={32}
//                     height={22}
//                     alt="flag-icon-us"
//                   />
//                 </span>
//                 English
//               </NavDropdown.Item>
//               <NavDropdown.Item onClick={() => handleLanguageChange('ar')} className={`${headerStyles["flag-item"]}`}>
//                 <span className={`${headerStyles["flag-icon flag-icon-sa"]}`}>
//                   <Image
//                     src={require('../../assets/images/flag/arabic.png').default}
//                     width={32}
//                     height={22}
//                     alt="flag-icon-sa"
//                   />
//                 </span> Arabic</NavDropdown.Item>
//             </NavDropdown>
         
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Header;
