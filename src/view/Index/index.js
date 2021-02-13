import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import Board from '../../components/Board';
import SideMenu from '../../components/SideMenu';

export default function Index() {
    return (
        <Container>
            <Header />
            <Board />
            <SideMenu />
        </Container>
    )
}
