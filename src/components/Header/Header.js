import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import Zoom from 'react-reveal/Zoom';
import style from './Header.module.css';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import {useSelector} from "react-redux";
import {selectCars} from "../../features/car/carSlice";



const Header = () => {

    const [burgerStatus, setBurgerStatus] = useState(false)
    const cars = useSelector(selectCars)


    const handClose = () => {
        setBurgerStatus(false)
    }
    const handOpen = () => {
        setBurgerStatus(true)
    }

    return (
        <>
            <Container>
                <Logo>
                    <img src="/images/logo.svg" alt="logo"/>
                </Logo>
                <Menu>
                    <Zoom>
                        {/*Reducer*/}
                        {cars && cars.map((car,index) =>(
                            <Link key={index} to="#" >{car}</Link>
                        ))}
                    </Zoom>
                </Menu>
                <RightMenu>
                    <Zoom>
                        <Link to="#">Shop</Link>
                        <Link to="#">Account</Link>
                        <CustomMenu onClick={handOpen}/>


                    </Zoom>
                </RightMenu>
                <BurgerNav show={burgerStatus}>
                    <div className={style.wrapClose}>
                        <CloseBtn onClick={handClose}/>
                    </div>
                    {/*Reducer*/}
                    {cars && cars.map((car,index) =>(
                        <li key={index}><Link to="#" >{car}</Link></li>
                    ))}
                    <li><Link to="#">Existing Inventory</Link></li>
                    <li><Link to="#">Used Inventory</Link></li>
                    <li><Link to="#">Trade-In</Link></li>
                    <li><Link to="#">Test Drive</Link></li>
                    <li><Link to="#">Cybertruck</Link></li>
                    <li><Link to="#">Roadster</Link></li>
                </BurgerNav>
            </Container>
        </>
    );
};

export default Header;


const Container = styled.div`
  background-color: orange;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.75;
  z-index: 1;


`
const Logo = styled.div`
  cursor: pointer;`

const Menu = styled.div`
  margin-left: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    cursor: pointer;
  }


  @media (max-width: 950px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;

  }

`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;

`
const BurgerNav = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background: white;
  z-index: 16;
  display: flex;
  flex-direction: column;
  text-align: start;
  color: black;
  padding: 20px;
  list-style: none;
  transform: ${event => event.show ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in;
  overflow: hidden;


  li {
    padding: 20px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

  }

  a {
    font-weight: 600;
  }

`

const CloseBtn = styled(CancelOutlinedIcon)`
  cursor: pointer;
`



