import React from 'react'
import Navbar from "../components/Navbar"
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import Footer from "../components/Footer"

const Container = styled.div`
  background-color: #171941;
  color: white;
`
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`
const Select = styled.select`
  margin: 20px;
  padding: 10px;
`
const Option = styled.option`

`
const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcements/>
      <Title>Sneakers</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>37</Option>
            <Option>38</Option>
            <Option>39</Option>
            <Option>40</Option>
            <Option>41</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList