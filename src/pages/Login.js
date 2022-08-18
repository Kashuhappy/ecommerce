import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100vw; // selecting the whole page as the container
  height: 100vh; // "  "
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #171941;
`
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({width: "75%"})};
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 5px;
`
const Link = styled.a`
  margin: 5px 0px;
  font-style: 12px;
  cursor: pointer;
  text-decoration: underline;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username"/>
          <Input placeholder="Password"/>
          <Button>LOG IN</Button>
          <Link>DO NOT REMEMBER THE PASSWORD</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login