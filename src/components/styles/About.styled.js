import styled from  'styled-components';


export const StyledAbout = styled.div `

    .about__section {
        display: grid;
        grid-template-columns: 25% 75%;
        height: 100vh;
        width: 100%;
        background: #FFFF;
        background-color: black; 

        .left__about {
            display: grid;
            grid-template-rows: 50% 50%;            
            background: #424258;
            height: 100%;

            .left__about__container {
                border-bottom: 5px solid #FFFF;
            }

            img {
                width: 70%;
            }
            
            .aboutImg {
                display:flex;
                justify-content: end;
                align-items: center;
                position: relative;
                width: 100%;

                .about__left__text {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                    font-size: 2rem;
                    color: #FFFF;
                    position: absolute;
                    left: 20px;
                }
            }
        }

        .about__container {
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            position: relative;

            .background__video {
                pointer-events: none;
                position: absolute;
                background: black;
                opacity: .8;
                object-fit: cover;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
            }
            
            .about {
                z-index: 2;
                width: 100%;
                margin: 10%;
                
                h3 {
                    font-size: 2vw;
                    color: #FFFF;
                }
                h1 {
                    font-size: 4.5vw;
                    margin-bottom: 1rem;
                    color: #FFFF;
                }
                p {
                    font-size: 1.5vw;
                    color: #FFFF;
                }
            }
            
            .jap__bottom {
                color: #424258;
                font-size: 2vw;
                position: absolute;
                bottom: 30px;
                right: 30px;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .about__section {
            grid-template-columns: 100%;
            height: auto;

            .left__about {
                display: none;
            }

            .about__container {
                .about {
                    h3 {
                        font-size: 3.5vw;
                    }
                    h1 {
                        font-size: 5.5vw;
                    }
                    p {
                        font-size: 2.5vw;
                    }
                }
                .jap__bottom {
                    font-size: 3vw;
                }
            }
        }
    }

    @media screen and (max-width: 425px) {
        .about__section {
            height: 40vh;
            .about__container {
                .background__video {
                    opacity: .4;
                }
                .about {
                    p {
                        font-size: 2.6vw;
                    }
                }
            }
        }
    }
`