import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 50px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`
const MenuItem = styled.div`
    font-size: 14;
    cursor: pointer;
`

const Left = styled.div`
    flex: 1;
`
const Logo = styled.h1`
    font-weight: bold;
    margin-left: 50px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <Left>
        <Logo>HNK</Logo>
      </Left>
      <Right>
        <Language>EN</Language>
        <SearchContainer>
          <Input/>
          <Search/>
        </SearchContainer>
        <MenuItem>Register</MenuItem>
        <MenuItem>Sign up</MenuItem>
        <MenuItem>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlined />
        </Badge>
        </MenuItem>
      </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar