import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon= styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    color: white;
    background-color: #${(props)=>props.color};
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>HNK</Logo>
            <Desc>
                Let's get in touch on any of these platforms.
            </Desc>
            <SocialContainer>
                <SocialIcon color='E4405F'>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <Pinterest/>
                </SocialIcon>
                <SocialIcon color='55ACEE'> 
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color='3B5999'>
                    <Facebook/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links:</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Wear</ListItem>
                <ListItem>Women Wear</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact Us</Title>
            <ContactItem>625 Moyale Road, South D 6045</ContactItem>
            <ContactItem>+123456789</ContactItem>
            <ContactItem>sneakers@hnk.com</ContactItem>
        </Right>
    </Container>
  )
}

export default Footer