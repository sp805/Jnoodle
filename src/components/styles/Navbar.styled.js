import styled from  'styled-components';

export const StyledNavbar = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    max-width: 90%;
    margin: 0 auto;
    padding: 2rem 1rem;

    .brand__logo {
        width: 130px;
        z-index: 100;
        
        img {
            width: 100%;
        }
    } 

    .nav__links {
        li {
            .Link {
                padding: .3rem 0;
                border-bottom: 3px solid rgba(255, 255, 255, 0);
                transition: .4s ease-in-out;
                color: #2B2C39;
            }
        }
    }


    @media (max-width: 768px) {
        padding: 1.5rem 0;
        max-width: 90vw;

        .nav__links {
            display: block;
            width: 230px;
            transition: .4s ease-in-out;
            position: fixed;
            top: 0;
            right: -100%;
            bottom: 0;
            padding: 5rem 0;
            z-index: 100;
            
            li {
                margin: 3rem;
                text-align: center;
                .Link {
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 500;
                    padding: 1rem;
                    color: #FFFF;

                    &:hover {
                        border-bottom: 3px solid #FF9E68;
                    }
                }
            }

        }
        
        .nav__active {
            justify-content:center;
            position: fixed;
            top: 0;
            top: 0;
            right: 0;
            bottom: 0;
            gap: 1rem;
            background:#424258;
            transition: .4s ease-in-out;
        }
        
        .is-Active {
            position: fixed;
            top: 0;
            right: 0;
            z-index: 999;
        }
    
        .nav__hamburger{
            cursor: pointer;  
            display: block;
            position: relative;
            z-index: 101;
            
            user-select: none;
        
            appearance: none;
            border: none;
            outline: none;
            background: none;
        
            span{
                display: block;
                position: relative;
                background: rgb(252, 252, 252);
                width: 33px;
                height: 4px;
                margin-bottom: 5px;
                border-radius: 6px;
                transform-origin: 0,0;
                transition: .4s;
            }
            
            &:hover span:nth-child(2){
                background: #FF9E68;
                transform: translateX(15px);
            }
        }
        
        .is-active span:nth-child(1){
            transform: translate(0px, 10px) rotate(45deg);
            background: #FFFF;
        }
        .is-active span:nth-child(2){
            opacity: 0;
            transform: translateX(10px);
        }
        .is-active span:nth-child(3){
            transform: translate(0px, -8px) rotate(-45deg);
            background: #FFFF;
        }
    }

    @media screen and (min-width: 769px) {
        .nav__links {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 70%;
            position: relative;
    
            li {
                margin: 0.5rem 1.7rem;
                .Link {
                    font-size: 1rem;
                    font-weight: 500;

                    &:hover {
                        border-bottom: 3px solid #FF9E68;
                    }
                }
            }
        }

        .nav__hamburger {
            display: none;
        }

        .nav__active {
            display: flex;
            position: relative;
            background: none;
        }
    }

    @media screen and (min-width: 1100px) {
        max-width: 90%;
        .brand__logo {
            width: 10vw;
        }

        .nav__links {
            li{
                .Link {
                    font-size: 1.4vw;
                }
            }
        }
    }
`