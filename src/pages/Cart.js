import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div`
    background-color: #171941;
    color: white;
`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})};
`
const Title = styled.h1`
    font-weight: 200;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" ? "white" : "white"};
`
const TopTexts = styled.div`
    ${mobile({display: "none"})};
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})};
    
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})};
`
const Hr = styled.hr`
    background-color: #eee;
    height: 1px;
    border: none;
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: space-evenly;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})};
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})};
`

const Summary = styled.div`
    flex: 1;
    border: 0.1px solid lightgray;
    padding: 20px;
    border-radius: 10px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "700"};
    font-size: ${props => props.type === "total" && "24px"};
    //color: ${props => props.type === "total" && "#ff8d72"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src='https://i.ibb.co/mN5Fvm7/shoe2.png'/>
                            <Details>
                                <ProductName><b>PRODUCT:</b> AIR JORDAN 1</ProductName>
                                <ProductId><b>ID:</b> 1234567890</ProductId>
                                <ProductColor color='black'/>
                                <ProductSize><b>Size:</b> 38</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove/>
                                <ProductAmount>2</ProductAmount>
                                <Add/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 20</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src='https://i.ibb.co/F5F9vcf/shoe.png'/>
                            <Details>
                                <ProductName><b>PRODUCT:</b> White Boots </ProductName>
                                <ProductId><b>ID:</b> 0987654321 </ProductId>
                                <ProductColor color='white'/>
                                <ProductSize><b>Size:</b> 40 </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove/>
                                <ProductAmount>1</ProductAmount>
                                <Add/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 40</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>SubTotal</SummaryItemText>
                        <SummaryItemPrice>$ 60</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping discount</SummaryItemText>
                        <SummaryItemPrice>$ -5</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 60</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart