import React, {useState} from 'react';
import Brand from '../img/Brand.png';
import { StyledNavbar } from './styles/Navbar.styled';
import { motion } from 'framer-motion';

const Navbar = () => {

    const [navActive, setNavActive] = useState("nav__links");
    const [btnActive, setBtnActive] = useState("nav__hamburger");
    const [btnHam, setBtnHam] = useState(false);

    const navToggle = () => {
        navActive === "nav__links" ? setNavActive("nav__links nav__active")
        : setNavActive("nav__links");

        btnActive === "nav__hamburger" ? setBtnActive("nav__hamburger is-active")
        : setBtnActive("nav__hamburger");

        btnHam === false ? setBtnHam(true) : setBtnHam(false);

    }

    const navVariants = {
        hidden: {
            opacity: 0,
            y: '-4vh'
        },

        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1
            }
        }
    }

    return (
        <StyledNavbar>
            <motion.div 
                className="brand__logo"
                variants={navVariants}
                initial="hidden"
                animate="visible"
                >
                <a href="/">
                    <img src={Brand} alt="brand" />
                </a>
            </motion.div>

            <motion.ul 
                className={navActive}
                variants={navVariants}
                initial="hidden"
                animate="visible">
                <li><a href='/#Hero' className="Link" onClick={navToggle}>HOME</a></li>
                <li><a href='/#Popular' className="Link" onClick={navToggle}>POPULAR</a></li>
                <li><a href='/#Feature' className="Link" onClick={navToggle}>SERVICE</a></li>
                <li><a href='/#About' className="Link" onClick={navToggle}>ABOUT US</a></li>
            </motion.ul>

            <motion.button style={{
                position: btnHam && "fixed",
                top: btnHam && 35,
                right: btnHam && 35,}} onClick={navToggle} className={btnActive}
                variants={navVariants}
                initial="hidden"
                animate="visible">
                <span></span>
                <span></span>
                <span></span>
            </motion.button>
        </StyledNavbar>
    );
}

export default Navbar;
