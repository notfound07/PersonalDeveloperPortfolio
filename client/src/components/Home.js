import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import PDF from '../assets/AmanBhattDev.pdf';
import figma from '../assets/Figma.jpg';
import development from '../assets/Website-Development.jpg';
import deployment from '../assets/Website-Deployment.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faServer, faFileLines, faBars } from '@fortawesome/free-solid-svg-icons';
import { faReact, faSquareJs, faNodeJs, faPython, faLinux, faHtml5, faCss3Alt, faFigma, faAws, faLinkedin, faXTwitter, faDiscord, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import Demo from '../assets/Demo.png';
import Demo1 from '../assets/Demo1.png';
import Demo2 from '../assets/Demo2.png';
import Demo3 from '../assets/Demo3.png';
import Demo4 from '../assets/Demo4.png';
import Demo5 from '../assets/Demo5.png';
import Demo6 from '../assets/Demo6.png';
import Demo7 from '../assets/Demo7.jpg';
import Demo8 from '../assets/Demo8.png';
import contact from '../assets/contact.jpg';
import axios from 'axios';
import "./Home.css";

const Home = () => {
    useEffect(() => {
        const links = document.querySelectorAll(".nav-link");
        const sides = document.querySelectorAll(".side-link");
        const sections = document.querySelectorAll("section");

        const setActiveLink = () => {
            let currentSection = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const scrollPosition = window.scrollY + window.innerHeight / 2;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute("id");
                }
            });

            links.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${currentSection}`) {
                    link.classList.add("active");
                }

            });
            sides.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${currentSection}`) {
                    link.classList.add("active");
                }

            });
        };

        if (links.length > 0) {
            links[0].classList.add("active");
        }

        if (sides.length > 0) {
            sides[0].classList.add("active");
        }

        window.addEventListener("scroll", setActiveLink);

        return () => {
            window.removeEventListener("scroll", setActiveLink);
        };
    }, []);
    const openPdf = () => {
        const pdfUrl = PDF;
        window.open(pdfUrl, '_blank');
    };

    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href')?.slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        };

        const links = document.querySelectorAll('.nav-link, .side-link, .nav-button, .side-button a');
        links.forEach((link) => link.addEventListener('click', handleScroll));

        return () => {
            links.forEach((link) => link.removeEventListener('click', handleScroll));
        };
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        question: '',
    });

    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:3001/user/sendmail', formData);
            setMessage('Email sent successfully!');
            setTimeout(() => {
                setMessage('');
            }, 3000);
            setFormData({ name: '', email: '', question: '' });
        } catch (error) {
            console.error('Error sending email:', error);
            setMessage('Failed to send email. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="nav-logo">
                    <img className="logo" src={logo} alt="Logo" />
                </div>
                <div className="nav-links">
                    <a className="nav-link" href="#home">Home</a>
                    <a className="nav-link" href="#about">About</a>
                    <a className="nav-link" href="#service">Services</a>
                    <a className="nav-link" href="#project">Projects</a>
                </div>
                <div className="nav-button">
                    <a className="button-get" href="#contact">Get in touch</a>
                    <a className="button-hire" href="#hire" >Hire me</a>
                </div>
                <div className="hamburger-icon" onClick={toggleNav}>
                    <FontAwesomeIcon icon={faBars} style={{ color: "#FFFFFF", }} />
                </div>
                <div className={`side-nav ${isOpen ? 'open' : ''}`}>
                    <div className="hamburger-icon" onClick={toggleNav}>
                        <FontAwesomeIcon icon={faBars} style={{ color: "#636ae8", }} />
                    </div>
                    <div className="side-links">
                        <a className="side-link" href="#home">Home</a>
                        <a className="side-link" href="#about">About</a>
                        <a className="side-link" href="#service">Services</a>
                        <a className="side-link" href="#project">Projects</a>
                    </div>
                    <div className="side-button">
                        <a className="side-hire" href="#hire" >Hire me</a>
                        <a className="side-get" href="#contact">Get in touch</a>
                    </div>
                    <div className="side-icons">
                        <a href="https://www.linkedin.com/in/aman-bhatt-216443306/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{ color: "#1f9eff", }} /></a>
                        <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} style={{ color: "#FFFFFF", }} /></a>
                        <a href="https://discord.gg/yxZ9UPBXS2" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDiscord} style={{ color: "#74C0FC", }} /></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} style={{ color: "#d9127c", }} /></a>
                        <a href="https://github.com/notfound07" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff", }} /></a>
                    </div>
                </div>
            </nav>
            <section id="home" className="container-one">
                <div className="box">
                    <h1 className="heading">Hi, I'm Aman Bhatt</h1>
                    <p className="description">
                        MERN Full Stack Developer | Specializing in Front-End Design with 6 Months of Freelance Experience
                    </p>
                    <button className="button-download" onClick={openPdf}>Download My CV</button>
                </div>
            </section>
            <section id="about" className="container-two">
                <div className="text-about">
                    <h1 className="heading-about">About Me</h1>
                    <h3 className="about-heading">Innovation</h3>
                    <p className="about-details">A skilled full-stack developer with experience in creating user-friendly and responsive web applications. Known for creativity and attention to detail, delivering practical and innovative solutions that work well and look great.</p>
                    <span className="line"></span>
                    <p className="about-details">Portfolio including blogging platforms, fitness trackers, and restaurant reservation systems, there’s a strong focus on building applications that solve real-world problems. Six months of freelance experience as a MERN Stack Developer involved working with clients and companies to create high-quality websites and applications tailored to their needs.</p>
                    <span className="line"></span>
                    <p className="about-details">Transparency and clear communication are at the core of every project, ensuring clients stay informed and involved throughout. Whether designing intuitive interfaces or building robust backend systems, the goal is always to deliver excellent results.</p>
                </div>
                <div className="floating-box">
                    <div className="icon"><FontAwesomeIcon className="icon-logo" icon={faHtml5} shake style={{ color: "#FFD43B", }} /></div>
                    <div className="icon"><FontAwesomeIcon className="icon-logo" icon={faCss3Alt} fade style={{ color: "#0074cc", }} /></div>
                    <div className="icon"><FontAwesomeIcon className="icon-logo" icon={faSquareJs} beat style={{ color: "#ffcd1a", }} /></div>
                    <div className="icon"><FontAwesomeIcon className="icon-logo" icon={faReact} spin style={{ color: "#57b6ff", }} /></div>
                    <div className="icon"><FontAwesomeIcon className="icon-logo" icon={faLinux} bounce style={{ color: "#8157ff", }} /></div>
                    <div className="icon"><FontAwesomeIcon className="icon-logo" icon={faNodeJs} flip spinReverse style={{ color: "#1ae0a4", }} /></div>
                    <div className="icon"><FontAwesomeIcon className="icon-logo" icon={faDatabase} shake style={{ color: "#74C0FC", }} /></div>
                    <div className="icon"><FontAwesomeIcon className="icon-logo" icon={faServer} beatFade style={{ color: "#63E6BE", }} /></div>
                    <div className="icon"><FontAwesomeIcon className="icon-logo" icon={faPython} flip style={{ color: "#316cd3", }} /></div>
                    <div className="icon"><FontAwesomeIcon className="icon-logo" icon={faFigma} fade style={{ color: "#9470ff", }} /></div>
                    <div className="icon"><FontAwesomeIcon className="icon-logo" icon={faAws} beat style={{ color: "#d2a80f", }} /></div>
                    <div className="icon"><FontAwesomeIcon className="icon-logo" icon={faFileLines} shake style={{ color: "#328f4a", }} /></div>
                </div>
            </section>
            <section id="service" className="container-three">
                <h1 className="heading-service">My Services</h1>
                <div className="service-box">
                    <div className="services">
                        <img className="service-image" src={development} alt="Website Development"></img>
                        <h3 className="service-title">Website Development</h3>
                        <p className="service-description">
                            Building responsive, scalable, and modern websites using the latest technologies.
                        </p>
                        <p className="s-description">
                            Your are one Ping away from Hiring me for Freelance or Job Offer.
                        </p>
                        <button className="service-button" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=amanbhatt199916@gmail.com&su=Freelance%20or%20Job%20Hiring%20Inquiry%20For%20Website%20Development', '_blank')}>Ping Me</button>
                    </div>
                    <div className="services-s">
                        <img className="service-image" src={figma} alt="UI & UX Design"></img>
                        <h3 className="service-title">UI & UX Design Using Figma</h3>
                        <p className="service-description">
                            Crafting user-friendly and visually appealing designs tailored to your needs.
                        </p>
                        <p className="s-description">
                            Your are one Ping away from Hiring me for Freelance or Job Offer.
                        </p>
                        <button className="service-button" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=amanbhatt199916@gmail.com&su=Freelance%20or%20Job%20Hiring%20Inquiry%20For%20UI%20And%20UX%20Design', '_blank')}>Ping Me</button>
                    </div>
                    <div className="services">
                        <img className="service-image" src={deployment} alt="Website Deployment"></img>
                        <h3 className="service-title">Website Deployment</h3>
                        <p className="service-description">
                            Ensuring seamless deployment and hosting of websites with top-notch performance.
                        </p>
                        <p className="s-description">
                            Your are one Ping away from Hiring me for Freelance or Job Offer.
                        </p>
                        <button className="service-button" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=amanbhatt199916@gmail.com&su=Freelance%20or%20Job%20Hiring%20Inquiry%20For%20Website%20Deployment', '_blank')}>Ping Me</button>
                    </div>
                </div>

            </section>
            <section id="project" className="container-four">
                <h1 className="heading-project">My Projects</h1>
                <div className="project-box">
                    <div className="projects">
                        <img className="project-image" src={Demo8} alt="img"></img>
                        <h3 className="project-text">Personal Developer Portfolio</h3>
                        <p className="project-details">
                            <strong className="project-date">Duration : </strong>13 Jan 2025 - Jan 2025
                        </p>
                        <p className="project-details">
                            <strong className="project-technologies">Technologies Used : </strong> Frontend: HTML, CSS, JavaScript, React.js <br />
                            Backend: Node.js, Express.js
                            <br />
                            Database: MongoDB
                            <br />
                            Other Tools: Git for version control
                        </p>
                        <div className="link-button">
                            <a className="button-live" href="/#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <a className="button-code" href="/#" target="_blank" rel="noopener noreferrer">Code</a>
                        </div>
                    </div>
                    <div className="projects">
                        <img className="project-image" src={Demo} alt="img"></img>
                        <h3 className="project-text">VisionaryArt Technologies Pvt Ltd - Freelance Project</h3>
                        <p className="project-details">
                            <strong className="project-date">Duration : </strong>7 Jun 2024 - 6 Dec 2024
                        </p>
                        <p className="project-details">
                            <strong className="project-technologies">Technologies Used : </strong> Frontend: HTML, CSS, JavaScript, React.js <br />
                            Backend: Node.js, Express.js
                            <br />
                            Database: MongoDB
                            <br />
                            Other Tools: Git for version control
                        </p>
                        <div className="link-button">
                            <a className="button-live" href="https://visionaryarttech.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <a className="button-code" href="https://github.com/notfound07/VAT" target="_blank" rel="noopener noreferrer" >Code</a>
                        </div>
                    </div>
                    <div className="projects">
                        <img className="project-image" src={Demo1} alt="img"></img>
                        <h3 className="project-text">Reservelt - Online Restaurant Table Reservation System</h3>
                        <p className="project-details">
                            <strong className="project-date">Duration : </strong>15 Dec 2023 - 5 Apr 2024
                        </p>
                        <p className="project-details">
                            <strong className="project-technologies">Technologies Used : </strong> Frontend: HTML, CSS, JavaScript, React.js <br />
                            Backend: Node.js, Express.js
                            <br />
                            Database: MongoDB
                            <br />
                            Other Tools: Git for version control
                        </p>
                        <div className="link-button">
                            <a className="button-live" href="https://reserveit-site.onrender.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <a className="button-code" href="https://github.com/notfound07/ReserveIt" target="_blank" rel="noopener noreferrer">Code</a>
                        </div>
                    </div>
                    <div className="projects">
                        <img className="project-image" src={Demo2} alt="img"></img>
                        <h3 className="project-text">BlogHouse - Read And Post Blogs</h3>
                        <p className="project-details">
                            <strong className="project-date">Duration : </strong>10 Nov 2024 - 12 Nov 2024
                        </p>
                        <p className="project-details">
                            <strong className="project-technologies">Technologies Used : </strong> Frontend: HTML, CSS, JavaScript, React.js <br />
                            Backend: Node.js, Express.js
                            <br />
                            Database: MongoDB
                            <br />
                            Other Tools: Git for version control
                        </p>
                        <div className="link-button">
                            <a className="button-live" href="https://bloghouse-site.onrender.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <a className="button-code" href="https://github.com/notfound07/BlogHouse" target="_blank" rel="noopener noreferrer">Code</a>
                        </div>
                    </div>
                    <div className="projects">
                        <img className="project-image" src={Demo3} alt="img"></img>
                        <h3 className="project-text">GymFluencer - Track Your Fitness Journey</h3>
                        <p className="project-details">
                            <strong className="project-date">Duration : </strong>15 Dec 2024 - 18 Dec 2024
                        </p>
                        <p className="project-details">
                            <strong className="project-technologies">Technologies Used : </strong> Frontend: HTML, CSS, JavaScript, React.js <br />
                            Other Tools: Git for version control
                        </p>
                        <div className="link-button">
                            <a className="button-live" href="https://gymfluencer-site.onrender.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <a className="button-code" href="https://github.com/notfound07/GymFluencer" target="_blank" rel="noopener noreferrer">Code</a>
                        </div>
                    </div>
                    <div className="projects">
                        <img className="project-image" src={Demo5} alt="img"></img>
                        <h3 className="project-text">Developer Portfolio</h3>
                        <p className="project-details">
                            <strong className="project-date">Duration : </strong>28 Aug 2024 - 5 Sep 2024
                        </p>
                        <p className="project-details">
                            <strong className="project-technologies">Technologies Used : </strong> Frontend: HTML, CSS, JavaScript, React.js <br />
                            Other Tools: Git for version control
                        </p>
                        <div className="link-button">
                            <a className="button-live" href="https://notfound07.github.io/DevPortfolio/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <a className="button-code" href="https://github.com/notfound07/DevPortfolio" target="_blank" rel="noopener noreferrer">Code</a>
                        </div>
                    </div>
                    <div className="projects">
                        <img className="project-image" src={Demo4} alt="img"></img>
                        <h3 className="project-text">Picture-in-Picture</h3>
                        <p className="project-details">
                            <strong className="project-date">Duration : </strong> 19 Dec 2024 -  21 Dec 2024
                        </p>
                        <p className="project-details">
                            <strong className="project-technologies">Technologies Used : </strong> Frontend: HTML, CSS, JavaScript, React.js <br />
                            Other Tools: Git for version control
                        </p>
                        <div className="link-button">
                            <a className="button-live" href="https://picture-in-picture.onrender.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <a className="button-code" href="https://github.com/notfound07/Picture-in-Picture" target="_blank" rel="noopener noreferrer">Code</a>
                        </div>
                    </div>
                    <div className="projects">
                        <img className="project-image" src={Demo6} alt="img"></img>
                        <h3 className="project-text">Simple Portfolio</h3>
                        <p className="project-details">
                            <strong className="project-date">Duration : </strong>20 Aug 2024 - 21 Aug 2024
                        </p>
                        <p className="project-details">
                            <strong className="project-technologies">Technologies Used : </strong> Frontend: HTML, CSS, JavaScript, React.js <br />
                            Other Tools: Git for version control
                        </p>
                        <div className="link-button">
                            <a className="button-live" href="https://notfound07.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <a className="button-code" href="https://github.com/notfound07/portfolio" target="_blank" rel="noopener noreferrer">Code</a>
                        </div>
                    </div>
                    <div className="projects">
                        <img className="project-image" src={Demo7} alt="img"></img>
                        <h3 className="project-text">Trigger - Android Application</h3>
                        <p className="project-details">
                            <strong className="project-date">Duration : </strong>30 Nov 2021 - 1 Mar 2022
                        </p>
                        <p className="project-details">
                            <strong className="project-technologies">Technologies Used : </strong> Language: Python<br />
                            Frameworks: Kivy, KivyMD
                            <br />
                            Database: SQLite
                            <br />
                            Tools: Buildozer for packaging the app into an APK
                        </p>
                        <div className="link-button">
                            <a className="button-live" href="https://github.com/notfound07/Trigger/blob/main/Trigger.apk" target="_blank" rel="noopener noreferrer">Apk Demo</a>
                            <a className="button-code" href="https://github.com/notfound07/Trigger" target="_blank" rel="noopener noreferrer">Code</a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="hire" className="container-five">
                <div className="hire-box">
                    <p className="description-hire">
                        I'm Available for Freelance Work and Jobs</p>
                    <button className="hire-button" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=amanbhatt199916@gmail.com&su=Freelance%20or%20Job%20Hiring%20Inquiry', '_blank')}>Ping Me</button>
                </div>
            </section>
            <section id="contact" className="container-six">
                <div className="contact-box">
                    {message && <p className="error">{message}</p>}
                    <form className="detail-contact" onSubmit={handleSubmit}>
                        <h1 className="heading-contact">Contact Me</h1>
                        <h3 className="contact-heading">Name</h3>
                        <input
                            className="contact-input"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                        <h3 className="contact-heading">Email</h3>
                        <input
                            className="contact-input"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                        />
                        <h3 className="contact-heading">Question</h3>
                        <textarea
                            className="contact-text"
                            name="question"
                            value={formData.question}
                            onChange={handleChange}
                            placeholder="Enter your question or feedback"
                            required
                        ></textarea>
                        <button className="button-contact" type="submit" disabled={isLoading}>
                            {isLoading ? <span className="loader"></span> : 'Submit'}
                        </button>
                    </form>
                    <img className="contact-image" src={contact} alt="img"></img>
                </div>
            </section>
            <footer>
                <div className="footer-box">
                    <div className="footer-logo">
                        <img className="logo-footer" src={logo} alt="Logo" />
                    </div>
                    <h3 className="p-info">Personal Info</h3>
                    <p className="footer-info">
                            <strong className="info">Email : </strong>amanbhatt199916@gmail.com
                        </p>
                        <p className="footer-info">
                            <strong className="info">Phone : </strong>+91 9990106790
                        </p>
                        <p className="footer-info">
                            <strong className="info">Address : </strong>New Delhi, Delhi 110046
                        </p>
                    <div className="footer-details">
                        <div className="footer-change"></div>
                        <p className="footer-description">© 2024 Personal Developer Portfolio. All rights reserved.</p>
                        <div className="footer-icons">
                            <a href="https://www.linkedin.com/in/aman-bhatt-216443306/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{ color: "#1f9eff", }} /></a>
                            <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} style={{ color: "#FFFFFF", }} /></a>
                            <a href="https://discord.gg/yxZ9UPBXS2" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDiscord} style={{ color: "#74C0FC", }} /></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} style={{ color: "#d9127c", }} /></a>
                            <a href="https://github.com/notfound07" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff", }} /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
