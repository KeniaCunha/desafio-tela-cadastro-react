import React from 'react'
import logo from '../../assets/logo-dio.png';

import { Button } from '../Button';
import { useNavigate  } from "react-router-dom";

import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';

const Header = ({autenticado}) => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/register')
}
  return (
    <Wrapper>
      <Container>
          <Row>
            <img src={logo} alt="Logo da dio"/>
            {autenticado ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
              {autenticado ? (
                <UserPicture src="https://github.com/KeniaCunha.png"/>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar"   onClick={handleClickSignIn}/>
              </>)}
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
