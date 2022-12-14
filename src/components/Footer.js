import { Facebook, Instagram, MailOutlineOutlined, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    background-color: #171941;
    color: white;
    ${mobile({flexDirection: "column"})};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    display: flex;
    align-items: center;
`
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
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})};

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
    ${mobile({backgroundColor: "#121438"})}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo><img src='https://i.ibb.co/Ryg7wT3/Logo.png' alt='logo'/>Sneakers</Logo>
            <Desc>
                Let's get in touch on any of these platforms.
            </Desc>
            <SocialContainer>
                <SocialIcon color='E4405F' title='Instagram'>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color='E60023' title='Pinterest'>
                    <Pinterest/>
                </SocialIcon>
                <SocialIcon color='55ACEE' title='Twitter'> 
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color='3B5999' title='Facebook'>
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
            <ContactItem>
                <Room style={{marginRight: "10px"}}/> 625 Moyale Road, South D 6045
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: "10px"}}/> +123456789
            </ContactItem>
            <ContactItem>
                <MailOutlineOutlined style={{marginRight: "10px"}}/> sneakers@hnk.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer