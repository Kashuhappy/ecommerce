import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 40px;
    padding-bottom: 35px;
`

const Wrapper = styled.div`
    padding: 0px 20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
    margin-left: 25px;
`
const Button = styled.button`
    border-radius: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    font-weight: bold;
`
//  badgeContent={1} == badge

const Left = styled.div`
    flex: 1;
`
const Logo = styled.h1`
    font-weight: bold;
    margin-left: 10px;
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
          <Search style={{color:'gray', fontSize:14}}/>
        </SearchContainer>
        <MenuItem>Register</MenuItem>
        <MenuItem>Sign up</MenuItem>
        <MenuItem>
        <Button>BUY NOW<Badge color="secondary"> 
          <ShoppingCartOutlined />
        </Badge></Button>
        </MenuItem>
      </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar