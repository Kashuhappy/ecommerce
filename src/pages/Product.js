import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div`
    background-color: #171941;
    color: white
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    //width: 100%;
    //object-fit: cover;
    //height: 90vh;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 400;
`
const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-weight: 200;
    font-size: 20px;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`

`

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <ImgContainer>
                <Image src='https://i.ibb.co/mN5Fvm7/shoe2.png'/>
            </ImgContainer>
            <InfoContainer>
                <Title>Air Jordan 1</Title>
                <Desc>apper functions can be used to write error checking routines for pre-existing system functions without increasing the length of a code by a large amount by repeating the same error check for each call to the function.[3] All calls to the original function can be replaced with calls to the wrapper, allowing the programmer to forget about error checking once the wrapper is written. A test driver is a kind of wrapper function that exercises a code module, typically calling it repeatedly, with different settings or parameters, in order to rigorously pursue each possible path. It is not deliverable code, but is not throwaway code either, being typically retained for use in regression testing. An interface adaptor is a kind of wrapper function that simplifies, tailors, or amplifies the interface to a code module, with the intent of making it more intelligible or relevant to the user. It may rename parameters, combine parameters, set defaults for parameters, and the like.

</Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color:</FilterTitle>
                        <FilterColor color='black'/>
                        <FilterColor color='darkblue'/>
                        <FilterColor color='gray'/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>37</FilterSizeOption>
                            <FilterSizeOption>38</FilterSizeOption>
                            <FilterSizeOption>39</FilterSizeOption>
                            <FilterSizeOption>40</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product