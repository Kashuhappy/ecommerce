import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: transparent;
  position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Icon = styled.div`
  opacity: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover{
    background-color: aliceblue;
    transform: scale(1.1);
} 
`;

const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
            <ShoppingCartOutlined />
            </Icon>
            <Icon>
            <SearchOutlined />
            </Icon>
            <Icon>
            <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product

// &:hover ${Info}{ ... inside conatiner
  //opacity: 1;
//} 


/* &:hover{
    background-color: aliceblue; ...inside icon
    transform: scale(1.1);
} */