import React from 'react'
import { Container, BoxInfo } from './styles';
import avatar from '../../assets/Capturar.PNG';

export default function Header() {
    return (
        <Container>
            <a href="/">Clone PipeFy</a>
            <BoxInfo>
                <img src={avatar} alt=""/>
                <a href="/perfil">Gabriel</a>
            </BoxInfo>
        </Container>
    )
}
