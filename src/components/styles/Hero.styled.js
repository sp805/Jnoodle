import styled from 'styled-components';
import Left from '../../img/Left.png';
import Left2 from '../../img/Left2.png';
import Left3 from '../../img/Left3.png';

export const StyledHero = styled.div `
    .hero__section {
        display: grid;
        grid-template-columns: 25% 37.5% 37.5%;
        grid-template-rows: 50% 25% 25%;
        grid-template-areas: 
        "left main main"
        "left main main"
        "left footer footer";
        justify-content: center;
        height: 100vh;
        // height: 670px;
        // max-height: 670px;
        width: 100%;
        background-color: #FFFF;

        .left__container {
            display: flex;
            background: #2B2C39;
            grid-area: left;
            height: 100%;
            position: relative;

            .left__img {
                align-self: flex-end;
                width: 100%;
                height: 80%;
                background-image: url(${Left});
                background-repeat: no-repeat;
                background-size: 100% 100%;
                animation: change 10s infinite ease-in-out;
            }

            h2 {
                position: absolute;
                color: White;
                font-size: 2rem;
            }
            
            .jap__text1 {
                writing-mode: vertical-rl;
                text-orientation: mixed;
                left: 5%;
                bottom: 10%;
            }
            
            .jap__text2 {
                right: 5%;
                bottom: 5%;
            }
        }
        
        .hero__container {
            grid-area: main;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 4.5rem;
            
            .hero {
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 100%;
                
                .hero__text {
                    magin: 0 auto;
                    h2 {
                        // color: #2B2C39;
                        font-size: 3.2vw;
                        margin-bottom: .5rem;
                    }
                    
                    p {
                        width: 70%;
                        // color: #2B2C39;
                        font-size: 1vw;
                        margin-bottom: 1.5rem;
                    }
                    
                    .buttons {
                        display: flex;
                        gap: 15px;
                        a{
                            font-size: 1.4vw;
                            background: #FF9E68;
                            padding: .9rem 1.5rem;
                            border: 1px solid #FF9E68;
                            border-radius: 2rem;
                            color: white;
                            font-weight: 600;
                            transition: .3s ease-in-out;

                            &:hover {
                                transform: scale(1.1);
                                box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
                            }
                        }
                    }
                }

                img {
                    width: 40%;
                    height: 100%;
                }
            }
        }

        .bottom__container {
            grid-area: footer;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            background: #424258;

            .left__text {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 15px;
                h3 {
                    font-size: 3rem;
                    color: white;
                }
                p {
                    color: white;
                }
            }
            
            .vl {
                width: 1px;
                height:70%;
                background: rgba(255, 255, 255, 0.212);
            }

            .right__text {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 15px;

                p {
                    color: white;
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .hero__section {
            grid-template-columns: 100%;
            grid-template-rows: 370px 150px;
            grid-template-areas: 
                "main"
                "footer"
                "left"
            ;
            height: auto;

            .left__container {
                display: none;
            }

            .hero__container {
                background: #2B2C39;
                .hero {
                    .hero__text {
                        width: 50%;
                        margin: 0 auto;

                        h2 {
                            font-size: 4.1vw;
                            color: white;
                        }
                        p {
                            width: 80%;
                            font-size: 1.6vw;
                            color: white;
                            margin-bottom: 1rem;
                        }
                        
                        .buttons {
                            a {
                                font-size: 2.5vw;
                                padding: .8rem 1.1rem;
                            }
                            .branchBtn {
                                color: #ffffff;
                            }
                        }
                    }
                }
            }

            .bottom__container {
                .left__text {
                    h3 {
                        font-size: 7vw;
                        color: white;
                    }
                    p {
                        font-size: 2.4vw;
                        color: white;
                    }
                }
                .right__text {
                    img {
                        width: 20%;
                    }

                    p {
                        font-size: 2.4vw;
                        color: white;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 425px) {
        .hero__section {
            grid-template-columns: 100%;
            grid-template-rows: 450px 100px;
            grid-template-areas: 
                "main"
                "footer"
                "left"
            ;

            .hero__container {
                .hero {
                    display: grid;
                    grid-template-areas: 
                        "img"
                        "text";
                    justify-content: center;
                    align-items: center;
                    margin: 0 auto;

                    .hero__text {
                        display: grid;
                        justify-content: center;
                        text-align: center;
                        width: 100%;
                        h2 {
                            font-size: 6.1vw;
                        }
                        p {
                            
                            margin: 0 auto 1rem auto;
                            font-size: 3.5vw;
                        }
                        
                        .buttons {
                            justify-content: center;
                            a {
                                font-size: 3vw;
                                padding: .8rem 1.1rem;
                            }                        }
                    }

                    img {
                        margin: 0 auto;
                        grid-area: img;
                        width: 40%;
                    }
                }
            }

            .bottom__container {
                .left__text {
                    padding: 0 1rem;
                    h3 {
                        font-size: 7vw;
                        color: white;
                    }
                    p {
                        font-size: 3vw;
                        color: white;
                    }
                }
                .right__text {
                    img {
                        width: 20%;
                    }

                    p {
                        font-size: 2.6vw;
                        color: white;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1100px) {
        .hero__section {
            .left__container {
                h2 {
                    font-size: 2.1vw;
                }
            }
            .hero__container {
                .hero {
                    .hero__text {
                        .buttons {
                            a{
                                padding: 1vw 1.1vw;
                            }
                        }
                    }
                }
                .hero {
                    img {
                        width: 30%;
                    }
                }
            }

            .bottom__container {
                .left__text {
                    h3 {
                        font-size: 4vw;
                    }
                    p{
                        font-size: 1.1vw;
                    }
                }
                .right__text {
                    p {
                        font-size: 1.1vw;
                    }
                }
            }
        }
    }
        

    @keyframes change{
        0%
        {
            background-image: url(${Left});
        }
        20%
        {
            background-image: url(${Left});
        }
        25%
        {
            background-image: url(${Left2});
        }
        50%
        {
            background-image: url(${Left2});
        }
        60%
        {
            background-image: url(${Left3});
        }
        90%
        {
            background-image: url(${Left3});
        }
        100%
        {
            background-image: url(${Left});
        }
    }
`