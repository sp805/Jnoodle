import React from 'react';
import {StyledFeature} from './styles/Feature.styled';
import Feature1 from '../img/Feature1.png';
import Feature2 from '../img/Feature2.png';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion'; 

const Feature = ({textEnter, textLeave}) => {

    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const animation4 = useAnimation();
    const {ref, inView} = useInView({
        threshold: 0.6
    })

    useEffect(() => {
        if(inView) {
            animation1.start("visibleBottom");
            animation2.start("visibleLeftRight");
            animation3.start("visibleLeftRight");
            animation4.start("visibleCenter");
        }
    }, [animation1,animation2,animation3,animation4,inView])

    const FeatureVariants = {
        hiddenBottom: {
            opacity: 0,
        },
        
        visibleBottom: {
            opacity: 1,
            transition: {duration: 1.5}
        },

        hiddenLeft: {
            opacity: 0,
            x: "5vw"
        },
        
        hiddenRight: {
            opacity: 0,
            x: "-5vw"
        },

        visibleLeftRight: {
            opacity: 1,
            x: 0,
            transition: {duration: .5}
        },

        hiddenCenter: {
            opacity: 0,
        },
        
        visibleCenter: {
            opacity: 1,
            transition: {duration: .5}
        }
    }

    return (
        <StyledFeature>
            <div ref={ref} className="feature__section">
                <motion.div
                    variants={FeatureVariants}
                    initial="hiddenBottom"
                    animate={animation1}
                    className="feature__container feature__info grid1"
                    id="Feature">
                    <div 
                        onMouseEnter={textEnter} 
                        onMouseLeave={textLeave} 
                        className="feature">
                        <h3>What's Trending / トレンド</h3>
                        <h2>Japanese Ramen</h2>
                        <p>Feel the taste of Ichirakus best Ramen here</p>
                        <div className="feature__list__container">
                            <ul className="feature__list">
                                <li><i className='bx bxs-check-circle'></i><p>SHOYU RAMEN</p></li>
                                <li><i className='bx bxs-check-circle'></i><p>MISO RAMEN</p></li>
                                <li><i className='bx bxs-check-circle'></i><p>TANTANMEN</p></li>
                            </ul>
                            <ul className="feature__list">
                                <li><i className='bx bxs-check-circle'></i><p>KURO TONKOTSU</p></li>
                                <li><i className='bx bxs-check-circle'></i><p>SHIRO TONKOTSU</p></li>
                                <li><i className='bx bxs-check-circle'></i><p>GYUKAI TONKOTSU</p></li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    variants={FeatureVariants}
                    initial="hiddenLeft"
                    animate={animation2}
                    className="feature__container feature__img grid2">
                    <img src={Feature1} alt="" />
                    <h2 
                    onMouseEnter={textEnter} 
                    onMouseLeave={textLeave} 
                    className="left">おにぎり</h2>
                </motion.div>
                <motion.div 
                    variants={FeatureVariants}
                    initial="hiddenRight"
                    animate={animation3}
                    className="feature__container feature__img grid4">
                    <img src={Feature2} alt="" />
                    <h2 
                    onMouseEnter={textEnter} 
                    onMouseLeave={textLeave} 
                    className="right">中華餃子</h2>
                </motion.div>
                
                <motion.div
                    variants={FeatureVariants}
                    initial="hiddenBottom"
                    animate={animation1}
                    className="feature__container feature__info grid3">
                    <div 
                        onMouseEnter={textEnter} 
                        onMouseLeave={textLeave} 
                        className="feature">
                        <h3>What's Trending / トレンド</h3>
                        <h2>Japanese Drinks</h2>
                        <p>Have a drink with our finest drinks</p>
                        <div className="feature__list__container">
                            <ul className="feature__list">
                                <li><i className='bx bxs-check-circle'></i><p>SOJU</p></li>
                                <li><i className='bx bxs-check-circle'></i><p>SAKE</p></li>
                                <li><i className='bx bxs-check-circle'></i><p>SPRITE</p></li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <motion.h2 
                variants={FeatureVariants}
                initial="hiddenCenter"
                animate={animation4}
                onMouseEnter={textEnter} 
                onMouseLeave={textLeave} 
                className="center__discover">DISCOVER</motion.h2>
            </div>
        </StyledFeature>
    );
}

export default Feature;
