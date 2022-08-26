import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import githubLogo from "../assets/img/github-logo.png"
import twitterLogo from "../assets/img/twitter-logo.png"

export const NavigationBar = () => {
    const [activeLink, setActiveLink] = useState("about-me")
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const updateActiveLink = (link) => {
        setActiveLink(link)
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="me-auto">

                    <Nav.Link 
                        href="#about-me" 
                        className={activeLink === "about-me" ? "active navbar-link" : "navbar-link"}
                        
                        onClick={ () => updateActiveLink("about-me") }
                    >About me</Nav.Link>
                    
                    <Nav.Link 
                        href="#projects" 
                        className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                        
                        onClick={ () => updateActiveLink("projects") }
                    >Projects</Nav.Link>

                </Nav>

                <span className="navbar-text">
                    
                    <div className="social-icon">

                        <a href="https://github.com/siriuslatte"><img src={githubLogo} alt="GitHub" /></a>
                        <a href="https://twitter.com/siriuslatte_dev"><img src={twitterLogo} alt="Twitter" /></a>

                    </div>

                </span>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
}