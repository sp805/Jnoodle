import React, {useState, useEffect} from 'react';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Popular from '../../components/Popular';
import Feature from '../../components/Feature';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

const Homepage = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const [cursorVariant, setCursorVariant] = useState("default");
    
    
    useEffect(() => {
        const mouseMove = e => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        })
        }
    
        window.addEventListener("mousemove", mouseMove);
    
        return () => {
        window.removeEventListener("mousemove", mouseMove);
        }
    }, []);
    
    const variants = {
        default: {
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
        },
        text: {
        height: 150,
        width: 150,
        x: mousePosition.x - 75,
        y: mousePosition.y - 75,
        backgroundColor: "white",
        mixBlendMode: "difference",
        }
    }
    
    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");

    return (
        <>
        
            <motion.div  className="cursor" variants={variants} animate={cursorVariant}/>

            <Hero textEnter={textEnter} textLeave={textLeave}/>
            <About textEnter={textEnter} textLeave={textLeave}/>
            <Popular textEnter={textEnter} textLeave={textLeave}/>
            <Feature textEnter={textEnter} textLeave={textLeave}/>
            <Footer textEnter={textEnter} textLeave={textLeave}/>
        </>
    );
}

export default Homepage;
