import React from 'react';
import Header from '../../components/Header';
import PerfilComponent from '../../components/PerfilComponent';
import SideMenu from '../../components/SideMenu';
import { Container } from './styles';
 
export default function Perfil() {
    return (
        <Container>
            <Header />
            <SideMenu />
            <PerfilComponent />
        </Container>
    )
}
