import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 50px;
    background-color: rgb(52, 212, 212);
    display: flex;
    justify-content: space-between;
`;

const Navbar = () => {
  return (
    <Container>
        <div>Left</div>
        <div>Center</div>
        <div>Right</div>
    </Container>
  )
}

export default Navbar