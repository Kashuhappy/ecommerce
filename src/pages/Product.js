import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Navbar from '../components/Navbar'

const Container = styled.div``
const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
    </Container>
  )
}

export default Product