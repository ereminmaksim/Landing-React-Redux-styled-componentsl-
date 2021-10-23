import React from 'react';
import styled from 'styled-components';
import styles from './Section.module.css';
import Fade from 'react-reveal/Fade';

const Sections = ({
                      title, description, backgroundImg,
                      leftBtn, rightBtn,
                  }) => {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>
                        {title}
                    </h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <ButtonGroup>
                    <Fade left>
                        <LeftButton>
                            <span className={styles.btn}>{leftBtn}</span>
                        </LeftButton>
                    </Fade>
                    {rightBtn &&
                    <Fade right>
                        <RightButton>
                            <span className={styles.btnRight}>{rightBtn}</span>
                        </RightButton>
                    </Fade>}

                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>
        </Wrap>
    );
};

export default Sections;

const Wrap = styled.div`
  //полная ширина!!!
  width: 100vw;
  height: 100vh;
  //для картинок!!!
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  //background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/images/${props.bgImage}")`}
`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;

`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }

`


const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 50px;
  width: 226px;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  cursor: pointer;
  margin: 8px;
  color: white;
  font-weight: bold;

`


const RightButton = styled(LeftButton)`
  background: gray;
  opacity: 0.65;

`
const DownArrow = styled.img`
  margin-bottom: 10px;
  overflow-x: hidden;
  height: 40px;
  margin-left: 46%;
  animation: animateDown infinite 1.5s;
  @media (max-width: 768px) {
    margin-left: 44%;;
  }
`
const Buttons = styled.div`

`
