import React, { useState } from 'react';
import {
    Container, ListaIcons, ContainerOpen, TopMenu,
    OptionsMenu, ContainerContentMenu
} from './styles';
import { MdMenu, MdPerson, MdLocalPostOffice, MdSettings, MdExitToApp, MdClose, MdMessage, MdNotifications } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

export default function SideMenu() {
    const [aberto, setAberto] = useState(false);
    const history = useHistory();
    const [menu, setMenu] = useState({});

    function openMenuSelected(item) {
        if (item === 'perfil') {
            console.log('Perfil');
        }
        if (item === 'agenda') {
            console.log('Agenda');
        }
        if (item === 'configuracoes') {
            console.log('Configurações');
        }
        if (item === 'sair') {
            console.log('Sair');
        }
    }

    function handlePerfil() {
        history.push("/perfil");
    }

    return (
        <Container>
            <ListaIcons>
                <MdMenu className="imgMenu" color="#888" size="25" onClick={() => setAberto(true)} />
                <MdMessage className="imgMenu" color="#888" size="25" />
                <MdNotifications className="imgMenu" color="#888" size="25" />
            </ListaIcons>
            {aberto ? (
                <ContainerOpen>
                    <ContainerContentMenu>
                        <TopMenu>
                            <MdClose color="#888" size="25" onClick={() => setAberto(false)} />
                        </TopMenu>
                        <OptionsMenu>
                            <a href="/perfil"><MdPerson />Perfil</a>
                            <a href="#"><MdLocalPostOffice />Agenda</a>
                            <a href="#"><MdSettings />Configurações</a>
                            <a href="#"><MdExitToApp />Sair</a>
                        </OptionsMenu>
                    </ContainerContentMenu>
                </ContainerOpen>
            ) : null}
        </Container>
    )
}
