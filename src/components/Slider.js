import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    padding: 20px;
    background-color: magenta;
    position: relative;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: rgb(250, 244, 244);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.6;
`
const Wrapper = styled.div`
    height: 100%;
`
// const Slide = styled.div`
//     display: flex;
//     align-items: center;
// `

const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`

`

const InfoContainer = styled.div`
    flex: 1;
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction = "left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <ImgContainer>
            <Image src="images/Image.png"/>
            </ImgContainer>
            <InfoContainer></InfoContainer>
        </Wrapper>
        <Arrow direction = "right">
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider