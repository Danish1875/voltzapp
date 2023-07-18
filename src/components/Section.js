import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Chatbot from './Chatbot'; 

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap bgImage = {backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{ title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                            <LeftButton>
                                {leftBtnText}
                            </LeftButton>
                            { rightBtnText &&      //if right button exists show it else not
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                            }
                    </ButtonGroup>
                </Fade>
                    <DownArrow src = "/images/down-arrow.svg" />
            </Buttons>

            <Chatbot />                    
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh; 
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/Whitesuper.png');
    display: flex;
    flex-direction: column;
    justify-content: space-between;   //vertical allignment
    align-items: center;              // horizontal alignment
    scroll-snap-align: start;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    z-index: -1;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 40px;
    @media (max-width: 788px) {    //when shrinking the webpage the buttons instead of cutting out get placed in columns
        flex-direction: column;
    }

`

const LeftButton = styled.div `
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 150px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    

`
const RightButton = styled(LeftButton) `
    background: white;
    opacity: 0.65;
    color: black;

`

const DownArrow = styled.img `
    height: 40px; 
    overflow-x: hidden;  
    animation: animateDown infinite 1.5s; 
`
const Buttons = styled.div `


`



