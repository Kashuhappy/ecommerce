import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    padding: 20px;
    background-color: magenta;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: rgb(250, 244, 244);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Slider = () => {
  return (
    <Container>
        <Arrow>
            <ArrowLeftOutlined/>
        </Arrow>
        <Arrow>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider