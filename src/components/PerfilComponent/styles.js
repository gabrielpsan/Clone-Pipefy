import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const ContainerPerfil = styled.div`
    height: 70%;
    width: 70%;
    margin-top: 40px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 10px 10px;
`

export const BoxContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`


export const DivImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #ECF1F8;

    img {
        height: 90%;
        width: 90%;
        border-radius: 50%;
    }
`

export const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 70%;

    input {
        width: 60%;
        height: 35px;
        border: none;
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 12px 4px rgba(0,0,0,0.12); 
        box-shadow: 0px 0px 12px 4px rgba(0,0,0,0.12);
        padding: 10px;
    }

    select {
        width: 60%;
        height: 35px;
        border: none;
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 12px 4px rgba(0,0,0,0.12); 
        box-shadow: 0px 0px 12px 4px rgba(0,0,0,0.12);
        padding: 10px;
    }
`