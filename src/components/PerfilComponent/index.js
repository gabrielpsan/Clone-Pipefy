import React from 'react';
import { Container, ContainerPerfil, BoxContent, DivImg, DivInputs } from './styles';
import user from '../../assets/Capturar.PNG';

export default function PerfilComponent() {
    return (
        <Container>
            <ContainerPerfil>
                <BoxContent>
                    <DivImg>
                        <img src={user} alt="" />
                    </DivImg>
                    <DivInputs>
                        <input placeholder="Gabriel Pinheiro"></input>
                        <input placeholder="gabriel@hotmail.com"></input>
                        <input placeholder="" type="date"></input>
                        <input placeholder="Desenvolvedor"></input>
                        <select>
                            <option selected>Masculino</option>
                            <option>Feminino</option>
                        </select>
                    </DivInputs>
                </BoxContent>
            </ContainerPerfil>
        </Container>
    )
}
