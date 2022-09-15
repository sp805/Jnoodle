import React from 'react';
import { StyledAbout } from './styles/About.styled';
import AboutLeft1 from '../img/AboutLeft1.png';
import AboutLeft2 from '../img/AboutLeft2.png';
import background from '../video/background.mp4'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion'; 

const About = ({textEnter, textLeave}) => {

    const {ref, inView} = useInView({
        threshold: 0.4
    });

    const animateSection = useAnimation();
    const animation = useAnimation();
    const animation2 = useAnimation();

    useEffect(() => {
        if(inView) {
            animateSection.start("visible");
            animation.start("visibleLeft");
            animation2.start("visibleBottom");
        }
    }, [animateSection,animation,animation2,inView]);

    const AboutVariants = {

        hidden: {
            opacity: 0
        },

        visible: {
            opacity: 1,
            transition: {
                duration: .5
            }
        },
        
        hiddenLeft: {
            opacity: 0,
            x: "-10vw"
        },

        visibleLeft: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .5
            }
        },

        hiddenBottom: {
            opacity: 0,
            y: "10vh"
        },
        visibleBottom: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3,
                duration: .5
            }
        }
    }

    return (
        <StyledAbout>
            <motion.div
            ref={ref}
            variants="AboutVariants"
            initial="hidden"
            className="about__section"
            id="About">
                
                <motion.div 
                variants={AboutVariants}
                initial="hiddenLeft"
                animate={animation}
                className="left__about">

                    <div className="left__about__container aboutImg">
                        <img src={AboutLeft1} alt="AboutLeft" />
                        <h2 
                        onMouseEnter={textEnter} 
                        onMouseLeave={textLeave} 
                        className="about__left__text">味噌ラーメン</h2>
                    </div>

                    <div className="aboutImg">
                        <img src={AboutLeft2} alt="AboutLeft" />
                        <h2 
                        onMouseEnter={textEnter} 
                        onMouseLeave={textLeave} 
                        className="about__left__text">とんこつしろ</h2>
                    </div>

                </motion.div>

                <motion.div 
                variants={AboutVariants}
                initial="hiddenBottom"
                animate={animation2}
                className="about__container">
                    <video className="background__video" 
                    src={background} autoPlay muted loop type="video/mp4"
                    />

                    <div 
                        onMouseEnter={textEnter} 
                        onMouseLeave={textLeave} 
                        className="about">
                            <h3>About us / 私たちに関しては</h3>
                        <h1>Our mission is to bring<br/>
                            true Japanese flavors<br/>
                            to you.
                        </h1>
                        <p>
                            We will continue to provide the experience of best noodles, <br/>
                            the Japanese mindset of hospitality, with our shopping and <br/>
                            dining for our customers.🙏<br/>
                        </p>
                    </div>
                        <h2 
                        onMouseEnter={textEnter} 
                        onMouseLeave={textLeave} 
                        className="jap__bottom">一楽</h2>
                </motion.div>
            </motion.div>
        </StyledAbout>
    );
}

export default About;
