import React from 'react';
import { Container, ListaIcons } from './styles';
import { MdMenu } from 'react-icons/md';

export default function SideMenu() {
    return (
        <Container>
            <ListaIcons>
                <MdMenu color="#888" size="25"/>
            </ListaIcons>
        </Container>
    )
}
