import React from 'react'
import styled from "styled-components"
import { mobile } from '../responsive';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({height: "40vh"})};

`;
const Info = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  ${mobile({color: "#ff8d72"})};
`
const Button = styled.button`
    padding: 10px;
    border: none;
    background-color: white;
    color: gray;
    font-weight: 600;
    cursor: pointer;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem