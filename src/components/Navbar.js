import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 40px;
    padding-bottom: 50px;
    background-color: #171941;
    ${mobile({height: "30px"})};
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
    ${mobile({flex: "2", justifyContent: "center"})};
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    border-radius: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})};
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})};
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
    cursor: pointer;
`
//  badgeContent={1} == badge

const Left = styled.div`
    flex: 1;
`
const Logo = styled.h1`
    font-weight: bold;
    margin-left: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    ${mobile({display: "none"})};
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <Left>
        <Logo title='Logo' onClick={() => window.location.reload(false)} style={{color: "white"}}><img src='https://i.ibb.co/Ryg7wT3/Logo.png' alt='logo'/>kSneakers</Logo>
      </Left>
      <Right>
        <Language style={{color: "white"}} >EN</Language>
        <SearchContainer>
          <Input placeholder='Search'/>
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