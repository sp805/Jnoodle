import React, {useState} from "react";
import { StyledPopular } from './styles/Popular.styled';
import {categories, miso, shoyu, kuro, tantanmen, gyokai} from '../data'
import Star from '../img/star.png';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion'; 

const Popular = ({textEnter, textLeave}) => {

    const [currentData, setCurrentData] = useState(miso);
    const animation1 = useAnimation();   
    const animation2 = useAnimation();   
    const animation3 = useAnimation();   
    const animation4 = useAnimation();   
    const animation5 = useAnimation();   

    const {ref, inView} = useInView({
        threshold: 0.5
    })

    useEffect(() => {
        if(inView) {
            animation1.start("visibleBottom1");
            animation2.start("visibleBottom2");
            animation3.start("visibleBottom3");
            animation4.start("visibleLeftRight");
            animation5.start("visibleLeftRight");
        }
    }, [animation1,animation2,animation3,animation4,animation5,inView]);

    const PopularVariants = {
        hiddenBottom1: {
            opacity: 0,
            y: "5vh",
        },

        hiddenLeft: {
            opacity: 0,
            x: "-2vw",
        },

        hiddenRight: {
            opacity: 0,
            x: "2vw",
        },

        visibleBottom1: {
            y: 0,
            opacity: 1,
            transition: {delay: 0.1}
        },
        
        visibleBottom2: {
            y: 0,
            opacity: 1,
            transition: {delay: 0.2}
        },

        visibleBottom3: {
            y: 0,
            opacity: 1,
            transition: {delay: 0.4}
        },

        visibleLeftRight: {
            opacity: 1,
            x: 0,
            transition: {delay: 0.6}
        }
    }


    return (
        <StyledPopular>
            <div ref={ref} className="popular__section" id="Popular">
                <motion.h1 
                    variants={PopularVariants}
                    initial="hiddenBottom1"
                    animate={animation1}
                    onMouseEnter={textEnter} 
                    onMouseLeave={textLeave} 
                    className="popular__text">
                    Popular foods /人気
                </motion.h1>
                <motion.div 
                    className="popular__filter">
                    {
                        categories.map(category =>(
                            <motion.div
                                variants={PopularVariants}
                                initial="hiddenBottom1"
                                animate={animation2}
                                key={category.id}>
                                <button onClick={()=> {
                                    if(category.type === "miso"){
                                        setCurrentData(miso);
                                    }
                                    else if(category.type === "shoyu"){
                                        setCurrentData(shoyu);
                                    }
                                    else if(category.type === "kuro"){
                                        setCurrentData(kuro);
                                    }
                                    else if(category.type === "tantanmen"){
                                        setCurrentData(tantanmen);
                                    }
                                    else if(category.type === "gyokai"){
                                        setCurrentData(gyokai);
                                    }
                                }}>{category.name}</button>
                            </motion.div>
                        ))
                    }
                </motion.div>

                <div className="popular__carousel">
                    {
                        currentData.map(item =>(
                            <div key={item.id}>
                                <motion.div
                                    variants={PopularVariants}
                                    initial="hiddenBottom1"
                                    animate={animation3}
                                    whileHover={{scale: 1.05, transition: { duration: .3 }, backgroundColor: "#676884", boxShadow: "7px 7px 0px 0px rgba(0,0,0,1)"}}
                                    className="popular__item">

                                    <img src={item.img} alt="Something delicius" />
                                    <h2 className="item__name">{item.name}</h2>
                                    <div className="item__info__container">
                                        <div className="info__left">
                                            <img src={Star} alt="star" />
                                            <p>{item.rating}</p>
                                        </div>
                                        <div className="vl"></div>
                                        <p>P{item.price}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))
                    }
                </div>

                <motion.h2 
                    variants={PopularVariants}
                    initial="hiddenLeft"
                    animate={animation4}
                    onMouseEnter={textEnter} 
                    onMouseLeave={textLeave} 
                    className="jap__text1">人気の食べ物</motion.h2>
                <motion.h2 
                    variants={PopularVariants}
                    initial="hiddenRight"
                    animate={animation5}
                    onMouseEnter={textEnter} 
                    onMouseLeave={textLeave} 
                    className="jap__text2">人気の食べ物</motion.h2>
            </div>
        </StyledPopular>
    );
}

export default Popular;
