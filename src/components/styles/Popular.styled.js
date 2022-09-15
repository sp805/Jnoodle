import styled from 'styled-components';


export const StyledPopular = styled.div `
    .popular__section {
        height: 100vh;
        width: 100%;
        background: #2B2C39;
        position: relative;

        .jap__text1 {
            position: absolute;
            bottom: 20px;
            left: 20px;
            font-size: 3vw;
            writing-mode: vertical-rl;
            text-orientation: mixed;
            color: #ffffff5b;
            letter-spacing: 5px;
        }
        
        .jap__text2 {
            position: absolute;
            top: 5vh;
            right: 5vh;
            font-size: 3vw;
            writing-mode: vertical-rl;
            text-orientation: mixed;
            color: #ffffff5b;
            letter-spacing: 5px;
        }
        
        .popular__text {
            font-size: 3.5vw;
            padding: 2.5rem 0;
            text-align: center;
            color: #FFFF;
        }

        .popular__filter {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            width: 85vw;
            margin: 0 auto;

            button {
                cursor: pointer;
                font-size: 1vw;
                font-weight: 500;
                padding: 1.2rem 1.8rem;
                border: none;
                background: #353646;
                color: #FFFF;
                border-radius: 2rem;
                text-transform: uppercase;
                transition: .3s ease-in-out;

                &:hover {
                    background: #51526A;
                    transform: translateY(-5px);
                }
            }
        }

        .popular__carousel {
            display: flex;
            justify-content: center;
            margin: 0 auto;
            padding: 2rem 0;
            width: 100%;
            height: auto;
            gap: 15px;
            // background: red;

            .popular__item {
                cursor: pointer;
                display: grid;
                justify-content: center;
                width: 280px;
                height: 350px;
                padding: 1rem;
                background: #353646;
                border-radius: 2rem;
                transform: scale(100%);
                
                img {
                    width: 80%;
                    margin: 0 auto;
                }
                
                .item__name {
                    display: block;
                    text-align: center;
                    color: #FFFFFF;
                    font-size: 1.7vw;
                }
                
                p {
                    color: #FFFFFF;
                    text-spacing: 20px;
                    letter-spacing: 1px;
                    font-size: 1.3vw;
                }

                .item__info__container {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    
                    .info__left {
                        display: flex;
                        align-items: center;
                        gap: 5px;
                        
                        img {
                            width: 1.5rem;
                        }
                    }

                    .vl {
                        width: 2px;
                        height: 1.5rem;
                        background: #6b6d8d;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .popular__section {
            height: auto;

            .popular__text {
                font-size: 4.5vw;
                padding: 1.5rem 0;
            }

            .popular__carousel {
                justify__content: space-around;

                .popular__item {
                    width: 25vw;
                    height: 250px;

                    .item__name {
                        font-size: 2.5vw;
                    }
                    
                    p {
                        color: #FFFFFF;
                        text-spacing: 20px;
                        letter-spacing: 1px;
                        font-size: 1.6vw;
                    }
    
                    .item__info__container {
                        .info__left {
                            img {
                                width: 1rem;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 560px) {
        .popular__section {

            .popular__filter {
                button {
                    font-size: 1.9vw;
                    padding: .9rem 1rem;
                }
            }

            .popular__carousel {
                padding: 1rem 0;

                .popular__item {
                    width: 25vw;
                    height: 200px;
                    border-radius: 1rem;
                }
            }
        }
    }

    @media screen and (max-width: 425px) {
        .popular__section {
            width: 100%;
            height: auto;

            .jap__text1 {
                bottom: 15px;
                left: 10px;
                font-size: 3.5vw;
            }

            .jap__text2 {
                top: 15px;
                right: 10px;
                font-size: 4vw;
            }

            .popular__text {
                font-size: 5.5vw;
                padding: 1.5rem 0;
            }

            .popular__filter {
                button {
                    font-size: 1.7vw;
                    padding: .8rem .8rem;
                }
            }

            .popular__carousel {
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                justify-content: center;
                align-items: center;
                padding: 1rem 0 1.5rem 0;

                .popular__item {
                    width: 40vw;
                    height: auto;
                    border-radius: 1rem;

                    img {
                        width: 100%;
                    }

                    .item__name {
                        font-size: 3.5vw;
                        padding: .5rem 0;
                    }
                    
                    p {
                        color: #FFFFFF;
                        text-spacing: 20px;
                        letter-spacing: 1px;
                        font-size: 3.6vw;
                    }
                    
                    .item__info__container {
                        .vl {
                            height: .7rem;
                        }

                        .info__left {
                            img {
                                width: .8rem;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1900px) {
        .popular__section {
            .popular__filter {
                button {
                    border-radius: 4rem;
                    padding: 3.5vh 1.5vw;  
                }
            }

            .popular__carousel {
                align-items: center;
                gap: 2%;

                .popular__item {
                    border-radius: 3rem;
                    width: 18vw;
                    height: 23vw;

                    img {
                        width: 100%;
                    }

                    p {
                        font-size: 1.4vw;
                    }
                }
            }
        }

    }

`
