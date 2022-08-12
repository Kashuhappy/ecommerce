// import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'

const Container = styled.div`
    height: 100vh;
    display: flex;
    padding-left: 16px;
    background-color: #171941;
    position: relative;
    overflow: auto; 
    length: auto;
`
// const Arrow = styled.div`
//     width: 50px;
//     height: 50px;
//     background-color: rgb(250, 244, 244);
//     border-radius: 50%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     margin: auto;
//     left: ${props => props.direction === "left" && "10px"};
//     right: ${props => props.direction === "right" && "10px"};
//     cursor: pointer;
//     opacity: 0.6;
//     z-index: 2;
// `
const Wrapper = styled.div`
    height: 100%;
    transition: all 1.5s ease;
    // display: flex;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    left-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border-color: #ff8d72;
`


const Slider = () => {
  return (
    <Container>
        {/* <Arrow direction = "left">
            <ArrowLeftOutlined/>
        </Arrow> */}
        <Wrapper>
            {sliderItems.map(item=>(
                <Slide>
                <ImgContainer>
                <Image src={item.img} alt={item.alt}/>
                </ImgContainer>
                <InfoContainer>
                    <Title style={{color: "#ff8d72"}}>{item.title}</Title>
                    <Desc style={{color: "white"}}>{item.desc}</Desc>
                    <Button style={{color: "#ff8d72"}}>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        {/* <Arrow direction = "right">
            <ArrowRightOutlined/>
        </Arrow> */}
    </Container>
  )
}

export default Slider