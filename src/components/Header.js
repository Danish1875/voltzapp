import React, { useState } from 'react'
import styled from "styled-components"
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import CloseIcon from '@mui/icons-material/Close';
import { style } from '@mui/system';
import { selectCars } from '../features/carSlice/carSlice';
import { useSelector } from 'react-redux';


function Header() {
    const [burgerStatus, setburgerStatus] = useState(false);
    const cars = useSelector(selectCars)


    return (
        <div>
            <Container>
                <a>
                    <img src = "/images/logo.svg" alt="" />
                </a>
                <Menu>
                    {cars && cars.map((car, index)=>(
                        <a key = {index} href = "#">{car}</a>
                    ))}
                </Menu>
                <RightMenu>
                    <a href="#">Shop</a>
                    <a href="#">Login</a>
                    <CustomMenu onClick ={()=>setburgerStatus(true)}/>
                </RightMenu>
                <BurgerNav show={burgerStatus}>
                    <CloseWrapper>
                        <CustomClose onClick ={()=>setburgerStatus(false)}/>
                    </CloseWrapper> 
                {cars && cars.map((car, index)=>(
                        <li key = {index}><a href="#">{car}</a></li>
                 ))}                         
                <li><a href="#">Existing inventory</a></li>
                <li><a href="#">Use inventory</a></li>
                <li><a href="#">Trade</a></li>
                <li><a href="#">Night cyber</a></li>
                <li><a href="#">Power</a></li>
                <li><a href="#">Inner Lighting</a></li>
                </BurgerNav>

            </Container>
        </div>
    )
}

export default Header

const Container = styled.div `
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;     //expands header to full width
    z-index: 1;

`

const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;    //padding for p tag, 0-top,bottom  10px right left
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {    
        display: none;   //hides menu content when display width is 768
    }


`

const RightMenu = styled.div `
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;  
    }

`
const CustomMenu = styled(MenuOpenRoundedIcon) `
    cursor: pointer;

`

const BurgerNav = styled.div `
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    width: 300px;
    z-index: 2;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.8s;

    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    a{
        font-weight: 600;
    }
`

const CustomClose = styled(CloseIcon) `
    cursor: pointer;

`

const CloseWrapper = styled.div `
    display: flex;
    justify-content: flex-end;

`

