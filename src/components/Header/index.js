import React from 'react'
import { Container, BoxInfo } from './styles';
import avatar from '../../assets/logo.png';

export default function Header() {
    return (
        <Container>
            <h1>RocketFy</h1>
            <BoxInfo>
                <img src={avatar} alt=""/>
                <p>Ambiente Sólido</p>
            </BoxInfo>
        </Container>
    )
}
