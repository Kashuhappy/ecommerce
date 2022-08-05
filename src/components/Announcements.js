import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    height: 40px;
    background-color: #525f7f;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14;
    font-weight: 500;
    length:100%;
`

const Announcements = () => {
  return (
    <Container>Super Deal! Free Shipping on Orders over $50</Container>
  )
}

export default Announcements