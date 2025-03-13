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
    return pathname === path;
  };
  const [showSolutions, setShowSolutions] = useState(false);
  const [showPricing, setShowPricing] = useState(false);


  //   const [showMobileSolutions, setShowMobileSolutions] = useState(false);
  // const [showPricing, setShowPricing] = useState(false);
  return (
    <>
      <Navbar expand="lg" className={`${headerStyles['header']} header`}>
        <Container className={`${headerStyles['navbar-container']}`}>
          <Link href={'/'}>
            <Navbar.Brand className={`${headerStyles['navbar-brand']}`}>
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
            <NavDropdown.Item onClick={() => handleLanguageChange('en')} className={`${headerStyles["flag-item"]} d-flex`}>
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
            <NavDropdown.Item onClick={() => handleLanguageChange('ar')} className={`${headerStyles["flag-item"]} d-flex `}>
              <span className={`${headerStyles["flag-icon flag-icon-sa"]} me-2`}>
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
                    className={`${headerStyles['dropdown-menu']} ${isActive('/solutions') ? headerStyles['active-page'] : ''
                      } underline`}
                    onMouseEnter={() => setShowSolutions(true)}
                  >
                    Solutions
                    <Image
                      src={
                        showSolutions
                          ? require('../../assets/images/header/up_arrow.svg').default
                          : require('../../assets/images/header/down_arrow.svg').default
                      }
                      width={24}
                      height={22}
                      alt="dropdown arrow"
                      className={headerStyles['custom-arrow']}
                    />
                  </span>
                }

                show={showSolutions}
                onMouseEnter={() => setShowSolutions(true)}
                onMouseLeave={() => setShowSolutions(false)}
              >
                <NavDropdown.Item href="#" className={`${headerStyles['dropdown-link']} ${isActive('/solutions/UGC') ? headerStyles['active-page'] : ''}`}>
                  UGC
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/solutions/creator"
                  className={`${headerStyles['dropdown-link']} ${isActive('/solutions/creator') ? headerStyles['active-page'] : ''}`}
                >
                  Creators
                </NavDropdown.Item>
                <NavDropdown.Item href="/solutions/content-ai"
                  className={`${headerStyles['dropdown-link']} ${isActive('/solutions/content-ai') ? headerStyles['active-page'] : ''}`}
                >
                  Content AI
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/solutions/campaigns"
                  className={`${headerStyles['dropdown-link']} ${isActive('/solutions/campaigns') ? headerStyles['active-page'] : ''}`}>
                  Campaigns
                </NavDropdown.Item>
                <NavDropdown.Item href="/solutions/surveys-polls" className={`${headerStyles['dropdown-link']} ${isActive('/solutions/surveys-polls') ? headerStyles['active-page'] : ''}`}>
                  Surveys & Polls
                </NavDropdown.Item>
                <NavDropdown.Item href="/solutions/shopper-marketing" className={`${headerStyles['dropdown-link']} ${isActive('/solutions/shopper-marketing') ? headerStyles['active-page'] : ''}`}>
                  Shopper Marketing
                </NavDropdown.Item>
                <NavDropdown.Item href="/solutions/new-product-launch" className={`${headerStyles['dropdown-link']} ${isActive('/solutions/new-product-launch') ? headerStyles['active-page'] : ''}`}>
                  New Product Launches
                </NavDropdown.Item>
                <NavDropdown.Item href="/solutions/events" className={`${headerStyles['dropdown-link']} ${isActive('/solutions/events') ? headerStyles['active-page'] : ''}`}>
                  Events
                </NavDropdown.Item>
              </NavDropdown>
              <Link href="#link" className={`${headerStyles['header-links']} ${isActive('/features') ? headerStyles['active-page'] : ''} underline`}>Features</Link>
              <Link href="/success-stories" className={`${headerStyles['header-links']} ${isActive('/success-stories') ? headerStyles['active-page'] : ''} underline`}>Success stories</Link>
              {/* <Link  href="#" className={`${headerStyles['header-links']} ${isActive('/pricing') ? headerStyles['active-page'] : ''} underline`}>Pricing</Link> */}
              <NavDropdown
                className="solution-dropdown"
                title={
                  <span
                    className={`${headerStyles['dropdown-menu']} ${isActive('/home') ? headerStyles['active-page'] : ''
                      } underline`}
                    onMouseEnter={() => setShowPricing(true)}
                  >
                    Pricing
                    <Image
                      src={
                        showPricing
                          ? require('../../assets/images/header/up_arrow.svg').default
                          : require('../../assets/images/header/down_arrow.svg').default
                      }
                      width={24}
                      height={22}
                      alt="dropdown arrow"
                      className={headerStyles['custom-arrow']}
                    />
                  </span>
                }

                show={showPricing}
                onMouseEnter={() => setShowPricing(true)}
                onMouseLeave={() => setShowPricing(false)}
              >
                <NavDropdown.Item href="/pricing/pay-as-you-go" className={`${headerStyles['dropdown-link']} ${isActive('/pricing/pay-as-you-go') ? headerStyles['active-page'] : ''}`}>
                  pay as you go
                </NavDropdown.Item>
                <NavDropdown.Item href="/pricing/credit-packs" className={`${headerStyles['dropdown-link']} ${isActive('/pricing/credit-packs') ? headerStyles['active-page'] : ''}`}>
                  credit packs
                </NavDropdown.Item>
                <NavDropdown.Item href="/pricing/enterprise" className={`${headerStyles['dropdown-link']} ${isActive('/pricing/enterprise') ? headerStyles['active-page'] : ''}`}>
                  Enterprise
                </NavDropdown.Item>

              </NavDropdown>
              <Link href="/creators" className={`${headerStyles['header-links']} ${isActive('/creators') ? headerStyles['active-page'] : ''} underline`}>Creators</Link>
              {/* <Link href="/about" className={`${headerStyles['header-links']} ${isActive('/about') ? headerStyles['active-page'] : ''} underline`}>About Us</Link>
              <Link href="/contact" className={`${headerStyles['header-links']} ${isActive('/contact') ? headerStyles['active-page'] : ''} underline`}>Contact Us</Link> */}
            </Nav>
            <Nav className={`${headerStyles['rightside-links']} ms-auto align-items-center`}>
              <NavDropdown className={`${headerStyles["flag-desktop"]} flag `} title={<span>
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
                <NavDropdown.Item onClick={() => handleLanguageChange('en')} className={`${headerStyles["flag-item"]} d-flex `}>
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
                <NavDropdown.Item onClick={() => handleLanguageChange('ar')} className={`${headerStyles["flag-item"]}  d-flex `}>
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
              <Link href="/become-creator" className={`${headerStyles['header-links']} ${isActive('/become-creator') ? headerStyles['active-page'] : ''}  underline mx-3`}>Become a creator</Link>
              <Link href="#link" className={`${headerStyles['header-links']} me-0`}>
                <button className={`${headerStyles['primary-button']} primary-button`} variant="primary">Login</button>
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
                  className={`${headerStyles['dropdown-menu']} ${isActive('/home') ? headerStyles['active-page'] : ''
                    } underline`}
                >
                  Solutions
                  <Image
                    src={
                      showSolutions
                        ? require('../../assets/images/header/up_arrow.svg').default
                        : require('../../assets/images/header/down_arrow.svg').default
                    }
                    width={24}
                    height={22}
                    alt="dropdown arrow"
                    className={headerStyles['custom-arrow']}
                  />
                </span>
              }
              show={showSolutions}
              onToggle={() => setShowSolutions(!showSolutions)}
            >
              <NavDropdown.Item href="#" className={`${headerStyles['dropdown-link']} ${isActive('/solutions/UGC') ? headerStyles['active-page'] : ''}`}>
                UGC
              </NavDropdown.Item>
              <NavDropdown.Item href="/solutions/creator" className={`${headerStyles['dropdown-link']} ${isActive('/solutions/creator') ? headerStyles['active-page'] : ''}`}>
                Creators
              </NavDropdown.Item>
              <NavDropdown.Item href="/solutions/content-ai" className={`${headerStyles['dropdown-link']} ${isActive('/solutions/content-ai') ? headerStyles['active-page'] : ''}`}>
                Content AI
              </NavDropdown.Item>
              <NavDropdown.Item href="/solutions/campaigns" className={`${headerStyles['dropdown-link']} ${isActive('/solutions/campaigns') ? headerStyles['active-page'] : ''}`}>
                Campaigns
              </NavDropdown.Item>
              <NavDropdown.Item href="/solutions/surveys-polls" className={`${headerStyles['dropdown-link']} ${isActive('/solutions/surveys-polls') ? headerStyles['active-page'] : ''}`}>
                Surveys & Polls
              </NavDropdown.Item>
              <NavDropdown.Item href="/solutions/shopper-marketing" className={`${headerStyles['dropdown-link']} ${isActive('/solutions/shopper-marketing') ? headerStyles['active-page'] : ''}`}>
                Shopper Marketing
              </NavDropdown.Item>
              <NavDropdown.Item href="/solutions/new-product-launch" className={`${headerStyles['dropdown-link']} ${isActive('/solutions/new-product-launch') ? headerStyles['active-page'] : ''}`}>
                New Product Launches
              </NavDropdown.Item>
              <NavDropdown.Item href="/solutions/events" className={`${headerStyles['dropdown-link']} ${isActive('/solutions/events') ? headerStyles['active-page'] : ''}`}>
                Events
              </NavDropdown.Item>
            </NavDropdown>
            <Link href="#" className={`${headerStyles['header-links']} ${isActive('/features') ? headerStyles['active-page'] : ''} underline`}>Features</Link>
            <Link href="/success-stories" className={`${headerStyles['header-links']} ${isActive('/success-stories') ? headerStyles['active-page'] : ''} underline`}>Success stories</Link>
            {/* <Link href="/pricing" className={`${headerStyles['header-links']} ${isActive('/pricing') ? headerStyles['active-page'] : ''} underline`}>Pricing</Link> */}
            <NavDropdown
              className="solution-dropdown"
              title={
                <span
                  className={`${headerStyles['dropdown-menu']} ${isActive('/home') ? headerStyles['active-page'] : ''
                    } underline`}
                >
                  Pricing
                  <Image
                    src={
                      showPricing
                        ? require('../../assets/images/header/up_arrow.svg').default
                        : require('../../assets/images/header/down_arrow.svg').default
                    }
                    width={24}
                    height={22}
                    alt="dropdown arrow"
                    className={headerStyles['custom-arrow']}
                  />
                </span>
              }
              show={showPricing}
              onToggle={() => setShowPricing(!showPricing)}
            >
              <NavDropdown.Item href="/pricing/pay-as-you-go" className={`${headerStyles['dropdown-link']} ${isActive('/pricing/pay-as-you-go') ? headerStyles['active-page'] : ''}`}>
                pay as you go
              </NavDropdown.Item>
              <NavDropdown.Item href="/pricing/credit-packs" className={`${headerStyles['dropdown-link']} ${isActive('/pricing/credit-packs') ? headerStyles['active-page'] : ''}`}>
                credit packs
              </NavDropdown.Item>
              <NavDropdown.Item href="/pricing/enterprise" className={`${headerStyles['dropdown-link']} ${isActive('/pricing/enterprise') ? headerStyles['active-page'] : ''}`}>
                Enterprise
              </NavDropdown.Item>

            </NavDropdown>
            <Link href="/creators" className={`${headerStyles['header-links']} ${isActive('/creators') ? headerStyles['active-page'] : ''} underline`}>Creators</Link>
            {/* <Link href="/about" className={`${headerStyles['header-links']} ${isActive('/about') ? headerStyles['active-page'] : ''}`}>About Us</Link>
            <Link href="/contact" className={`${headerStyles['header-links']} ${isActive('/contact') ? headerStyles['active-page'] : ''}`}>Contact Us</Link> */}
            <Link href="/become-creator" className={`${headerStyles['header-links']} ${isActive('/become-creator') ? headerStyles['active-page'] : ''}`}>Become a creator</Link>
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




