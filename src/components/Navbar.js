import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 40px;
    padding-bottom: 35px;
    background-color: #171941;
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
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    font-weight: bold;
    background-color: #ff8d72;
    border-color: #ff8d72;
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
        <Logo style={{color: "white"}}>HNK</Logo>
      </Left>
      <Right>
        <Language style={{color: "white"}}>EN</Language>
        <SearchContainer>
          <Input/>
          <Search style={{color:'gray', fontSize:14}}/>
        </SearchContainer>
        <MenuItem style={{color: "white"}}>Register</MenuItem>
        <MenuItem style={{color: "white"}}>Sign up</MenuItem>
        <MenuItem>
        <Button >BUY NOW<Badge overlap="rectangular" color="secondary"> 
          <ShoppingCartOutlined />
        </Badge></Button>
        </MenuItem>
      </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar