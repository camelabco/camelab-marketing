"use client";
import headerStyles from "../styles/header.module.css";
import React, { useContext, useState } from "react";
import { usePathname } from 'next/navigation';
import Container from 'react-bootstrap/Container';
import { LanguageContext } from "../layout";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "next/image";
import { NavDropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from "next/link";

function Header() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const isActive = (path) => {
    return typeof window !== 'undefined' && window.location.pathname === path;
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar expand="lg" className={`${headerStyles['header']}`}>
        <Container>
          <Link href={'/'}>
            <Navbar.Brand>
              <Image
                 className={`${headerStyles['header-logo']}`}
                src={require('../../assets/images/header/nav-logo.svg').default}
                width={220}
                height={70}
                alt="camelab-logo"
              />
            </Navbar.Brand>
          </Link>
          <NavDropdown className={`${headerStyles["flag-mobile"]} flag`} title={<span>
            <Image
              src={selectedLanguage === 'en'
                ? require('../../assets/images/flag/English.png').default
                : require('../../assets/images/flag/arabic.png').default}
              width={32}
              height={22}
              alt="flag-icon-us"
            /></span>} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => handleLanguageChange('en')} className={`${headerStyles["flag-item"]}`}>
              <span className={`${headerStyles["flag-icon flag-icon-us"]} me-2`}>
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
              </span> Arabic
            </NavDropdown.Item>
          </NavDropdown>
          <div onClick={handleShow} className={`${headerStyles['navbar-toggler']}`}>
            <Image
              src={require('../../assets/images/header/header-toggler.svg').default}
              width={36}
              height={36}
              alt="camelab-logo"
            />
          </div>
          <Navbar.Collapse>
            <Nav className={`${headerStyles['leftside-links']} me-auto align-items-center`}>
            {/* <Link href="/home" className={`${headerStyles['header-links']} ${isActive('/home') ? headerStyles['active-page'] : ''} underline`}
              >Home</Link> */}
           <NavDropdown
           className="solution-dropdown"
        title={
          <span
            className={`${headerStyles['dropdown-menu']} ${
              isActive('/home') ? headerStyles['active-page'] : ''
            } underline`}
            onMouseEnter={() => setIsOpen(true)}
          >
            Solutions
            <Image
              src={
                isOpen
                  ? require('../../assets/images/header/up_arrow.svg').default
                  : require('../../assets/images/header/down_arrow.svg').default
              }
              width={32}
              height={22}
              alt="dropdown arrow"
              className={headerStyles['custom-arrow']}
            />
          </span>
        }
  
        show={isOpen}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)} 
      >
        <NavDropdown.Item href="#" className={headerStyles['dropdown-link']}>
          UGC
        </NavDropdown.Item>
        <NavDropdown.Item href="#" className={headerStyles['dropdown-link']}>
          Creators
        </NavDropdown.Item>
        <NavDropdown.Item  href="#" className={headerStyles['dropdown-link']}>
          Content AI
        </NavDropdown.Item>
        <NavDropdown.Item  href="#" className={headerStyles['dropdown-link']}>
          Campaigns
        </NavDropdown.Item>
        <NavDropdown.Item  href="#" className={headerStyles['dropdown-link']}>
          Surveys & Polls
        </NavDropdown.Item>
        <NavDropdown.Item  href="#" className={headerStyles['dropdown-link']}>
          Shopper Marketing
        </NavDropdown.Item>
        <NavDropdown.Item  href="#" className={headerStyles['dropdown-link']}>
          New Product Launches
        </NavDropdown.Item>
        <NavDropdown.Item  href="#" className={headerStyles['dropdown-link']}>
          Events
        </NavDropdown.Item>
      </NavDropdown>
            <Link  href="#" className={`${headerStyles['header-links']} ${isActive('/features') ? headerStyles['active-page'] : ''} underline`}>Features</Link>
            <Link  href="#" className={`${headerStyles['header-links']} ${isActive('/stories') ? headerStyles['active-page'] : ''} underline`}>Success stories</Link>
            <Link  href="#" className={`${headerStyles['header-links']} ${isActive('/pricing') ? headerStyles['active-page'] : ''} underline`}>Pricing</Link>
            <Link  href="#" className={`${headerStyles['header-links']} ${isActive('/creators') ? headerStyles['active-page'] : ''} underline`}>Creators</Link>
              {/* <Link href="/about" className={`${headerStyles['header-links']} ${isActive('/about') ? headerStyles['active-page'] : ''} underline`}>About Us</Link>
              <Link href="/contact" className={`${headerStyles['header-links']} ${isActive('/contact') ? headerStyles['active-page'] : ''} underline`}>Contact Us</Link> */}
            </Nav>
            <Nav className={`${headerStyles['rightside-links']} ms-auto align-items-center`}>
              <NavDropdown className={`${headerStyles["flag-desktop"]} flag mx-3`} title={<span>
                <Image
                  src={selectedLanguage === 'en'
                    ? require('../../assets/images/flag/English.png').default
                    : require('../../assets/images/flag/arabic.png').default}
                  width={32}
                  height={22}
                  alt="flag-icon-us"
                />
              </span>}
                id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => handleLanguageChange('en')} className={`${headerStyles["flag-item"]}`}>
                  <span className={`${headerStyles[""]} me-2`}>
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
                  <span className={`${headerStyles["flag-icon flag-icon-sa"]} me-2`}>
                    <Image
                      src={require('../../assets/images/flag/arabic.png').default}
                      width={32}
                      height={22}
                      alt="flag-icon-sa"
                    />
                  </span>Arabic
                </NavDropdown.Item>
              </NavDropdown>
              <Link href="/creator" className={`${headerStyles['header-links']} ${isActive('/creator') ? headerStyles['active-page'] : ''} underline`}>Become a creator</Link>
              <Link href="#link" className={`${headerStyles['header-links']}`}>
                <button className="primary-button" variant="primary">Login</button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} className={`${headerStyles['offcanvas']} ${headerStyles['offcanvas-start']} `}>
        <Offcanvas.Header className={`${headerStyles['offcanvas-header']}`}>
          <Offcanvas.Title><Link href="/">
            <Image
              src={require('../../assets/images/header/nav-logo.svg').default}
              width={170}
              height={70}
              alt="camelab-logo"
            />
          </Link>
          </Offcanvas.Title>
          <Button variant="close" onClick={handleClose} aria-label="Close">
        
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body className={`${headerStyles['offcanvas-body']}`}>
          <div className="d-flex flex-column">
          {/* <Link href="/home" className={`${headerStyles['header-links']} ${isActive('/home') ? headerStyles['active-page'] : ''} underline`}
              >Home</Link> */}
                 <NavDropdown
           className="solution-dropdown"
        title={
          <span
            className={`${headerStyles['dropdown-menu']} ${
              isActive('/home') ? headerStyles['active-page'] : ''
            } underline`}
            onMouseEnter={() => setIsOpen(true)}
          >
            Solutions
            <Image
              src={
                isOpen
                  ? require('../../assets/images/header/up_arrow.svg').default
                  : require('../../assets/images/header/down_arrow.svg').default
              }
              width={32}
              height={22}
              alt="dropdown arrow"
              className={headerStyles['custom-arrow']}
            />
          </span>
        }
  
        show={isOpen}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)} 
      >
        <NavDropdown.Item href="/solutions/ugc" className={headerStyles['dropdown-link']}>
          UGC
        </NavDropdown.Item>
        <NavDropdown.Item href="/solutions/creators" className={headerStyles['dropdown-link']}>
          Creators
        </NavDropdown.Item>
        <NavDropdown.Item href="/solutions/content" className={headerStyles['dropdown-link']}>
          Content AI
        </NavDropdown.Item>
        <NavDropdown.Item href="/solutions/campaings" className={headerStyles['dropdown-link']}>
          Campaigns
        </NavDropdown.Item>
        <NavDropdown.Item href="/solutions/surveys" className={headerStyles['dropdown-link']}>
          Surveys & Polls
        </NavDropdown.Item>
        <NavDropdown.Item href="/solutions/shopper" className={headerStyles['dropdown-link']}>
          Shopper Marketing
        </NavDropdown.Item>
        <NavDropdown.Item href="/solutions/product" className={headerStyles['dropdown-link']}>
          New Product Launches
        </NavDropdown.Item>
        <NavDropdown.Item href="/solutions/events" className={headerStyles['dropdown-link']}>
          Events
        </NavDropdown.Item>
      </NavDropdown>
      <Link href="/features" className={`${headerStyles['header-links']} ${isActive('/features') ? headerStyles['active-page'] : ''} underline`}>Features</Link>
            <Link href="/stories" className={`${headerStyles['header-links']} ${isActive('/stories') ? headerStyles['active-page'] : ''} underline`}>Success stories</Link>
            <Link href="/pricing" className={`${headerStyles['header-links']} ${isActive('/pricing') ? headerStyles['active-page'] : ''} underline`}>Pricing</Link>
            <Link href="/creators" className={`${headerStyles['header-links']} ${isActive('/creators') ? headerStyles['active-page'] : ''} underline`}>Creators</Link>
            {/* <Link href="/about" className={`${headerStyles['header-links']} ${isActive('/about') ? headerStyles['active-page'] : ''}`}>About Us</Link>
            <Link href="/contact" className={`${headerStyles['header-links']} ${isActive('/contact') ? headerStyles['active-page'] : ''}`}>Contact Us</Link> */}
            <Link href="/creator" className={`${headerStyles['header-links']} ${isActive('/creator') ? headerStyles['active-page'] : ''}`}>Become a creator</Link>
            <Link href="#link" className={`${headerStyles['header-links']}`}>
              <button className="primary-button" variant="primary">Login</button>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;




// "use client";
// import headerStyles from "../styles/header.module.css"
// import React, { useContext, useState } from "react";
// import { useRouter } from 'next/navigation';
// import Container from 'react-bootstrap/Container';
// import { LanguageContext } from "../layout";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Image from "next/image";
// import { NavDropdown } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Link from "next/link";
  
// function Header() {
//   const [show, setShow] = useState(false);
//   const router = useRouter();
  

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);

//   const handleLanguageChange = (language) => {
//     setSelectedLanguage(language);
//   };

//   const isActive = (path) => router.pathname === path;
//   console.log(isActive, 'isActive')

//   return (
//     <>

//        <Navbar expand="lg" className={`${headerStyles['header']}`}>
//         <Container>
//           <Link href={'/'}>
//             <Navbar.Brand>
//               <Image
//                 src={require('../../assets/images/header/nav-logo.svg').default}
//                 width={220}
//                 height={70}
//                 alt="camelab-logo"
//               />
//             </Navbar.Brand>
//           </Link>
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
//                 <span className={`${headerStyles["flag-icon flag-icon-us"]} me-2`}>
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
//           <div onClick={handleShow} className={`${headerStyles['navbar-toggler']}`} > <Image
//               src={require('../../assets/images/header/header-toggler.svg').default}
//               width={36}
//               height={36}
//               alt="camelab-logo"
//             /></div>
//           <Navbar.Collapse>
//             <Nav className={`${headerStyles['leftside-links']} me-auto align-items-center`}>
//               <Link className={`${headerStyles['header-links']} ${headerStyles['active-page']} underline`} href="/about">About Us</Link>
//               <Link className={`${headerStyles['header-links']} underline`} href="/contact">Contact Us</Link>
//             </Nav>
//             <Nav className={`${headerStyles['rightside-links']} ms-auto align-items-center`} >
//             <NavDropdown className={`${headerStyles["flag-desktop"]} flag mx-3`} title={<span > 
              
//               <Image
//                 src={selectedLanguage === 'en'
//                   ? require('../../assets/images/flag/English.png').default
//                   : require('../../assets/images/flag/arabic.png').default}
//                 width={32}
//                 height={22}
//                 alt="flag-icon-us"
//               />
//               </span>} 
//               id="basic-nav-dropdown"
//               >
//               <NavDropdown.Item onClick={() => handleLanguageChange('en')} className={`${headerStyles["flag-item"]}`} >
//                 <span className={`${headerStyles[""]} me-2`}>
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
//                 <span className={`${headerStyles["flag-icon flag-icon-sa"]} me-2`}>
//                   <Image
//                     src={require('../../assets/images/flag/arabic.png').default}
//                     width={32}
//                     height={22}
//                     alt="flag-icon-sa"
//                   />
//                 </span>Arabic</NavDropdown.Item>
//             </NavDropdown>
//               <Link className={`${headerStyles['header-links']} underline`} href="/creator">Become a creator</Link>
//               <Link Link className={`${headerStyles['header-links']}`} href="#link"> <button className="primary-button" variant="primary">Login</button></Link>
//             </Nav>
//           </Navbar.Collapse>
     
         
         
//         </Container>
//       </Navbar>

//       <Offcanvas show={show} onHide={handleClose}  className={`${headerStyles['offcanvas']} ${headerStyles['offcanvas-start']} `}>
//         <Offcanvas.Header className={`${headerStyles['offcanvas-header']}`} >
//           <Offcanvas.Title><Link href="/">
//           <Image
//               src={require('../../assets/images/header/nav-logo.svg').default}
//               width={170}
//               height={70}
//               alt="camelab-logo"
//             />
//           </Link>
//           </Offcanvas.Title>
//           <Button variant="close" onClick={handleClose} aria-label="Close">
//              <span aria-hidden="true">&times;</span>
//           </Button>
//         </Offcanvas.Header>
//         <Offcanvas.Body className={`${headerStyles['offcanvas-body']}`} >
//          <div className="d-flex flex-column">
//          <Link className={`${headerStyles['header-links']} ${headerStyles['active-page']} `} href="/about">About Us</Link>
//               <Link className={`${headerStyles['header-links']} `} href="/contact">Contact Us</Link>
//               <Link className={`${headerStyles['header-links']} `} href="/creator">Become a creator</Link>
//               <Link className={`${headerStyles['header-links']}`} href="#link"> <button className="primary-button" variant="primary">Login</button></Link>
//          </div>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>

//   );
// }

// export default Header;




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
