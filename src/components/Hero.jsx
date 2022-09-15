import React from 'react';
import HeroImg from '../img/Hero.png';
import Owner from '../img/Owner.png';
import { StyledHero } from './styles/Hero.styled';
import {motion} from 'framer-motion';

const Hero = ({textEnter, textLeave}) => {
   
    const HomeVariants = {
        hidden: {
            opacity: 0,
        },

        visible: {
            opacity: 1,
            transition: {
                type: 'spring', 
                stiffness: 100, 
                duration: 1
            }
        }
    }

    const secondVariants = {
        hidden: {
            opacity: 0,
            y: "10vh"
        },
        
        visible: {
            opacity: 1,
            y: "0vh",
        }
    }

    return (
        <StyledHero>
                <motion.div 
                    variants={HomeVariants}
                    initial="hidden"
                    animate="visible"
                    className="hero__section"
                    id="Hero">
                    <div className="left__container">
                        <div className="left__img"/>
                        <motion.h2 
                            variants={secondVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{duration: 1}}
                            onMouseEnter={textEnter} 
                            onMouseLeave={textLeave}
                            className="jap__text1"
                        >
                            ラーメンは最大の喜びです
                        </motion.h2>
                        <motion.h2 
                        variants={secondVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{duration: 1}}
                        onMouseEnter={textEnter} 
                        onMouseLeave={textLeave}
                        className="jap__text2"
                        >
                            一楽
                        </motion.h2>
                    </div>

                    <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                        className="hero__container">
                        <div
                        className="hero">
                            <motion.div 
                            variants={secondVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{duration: 1}}
                            className="hero__text"
                            >
                                <h2 
                                onMouseEnter={textEnter} 
                                onMouseLeave={textLeave}>Japanese Authentic <br/>Noodle Restaurant</h2>
                                <p
                                onMouseEnter={textEnter} 
                                onMouseLeave={textLeave}>
                                    Enjoy a genuine taste of Japanese ramen created by Japanese ramen professional!</p>

                                <div className="buttons">
                                    <a href="/#Feature">Explore →</a>
                                </div>
                            </motion.div>
                            <motion.img 
                            initial={{opacity: 0, x: "10vw"}}
                            animate={{opacity: 1, x: "0"}}
                            transition={{duration: 1}}
                            src={HeroImg} alt="" />
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                        className="bottom__container">
                        <motion.div
                        variants={secondVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{duration: 1}}
                        onMouseEnter={textEnter} 
                        onMouseLeave={textLeave}
                        className="left__text">
                            <h3>39k+</h3>
                            <p>Satisfied<br/>Costumers</p>
                        </motion.div>
                        <div className="vl"></div>
                        <motion.div 
                        variants={secondVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{duration: 1}}
                        className="right__text">
                            <img src={Owner} alt="Owner"/>
                            <p
                            onMouseEnter={textEnter} 
                            onMouseLeave={textLeave}
                            >"This is the best Authentic<br/>Japanese Restaurant I have<br/>experienced"</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </StyledHero>
    )
}

export default Hero;
