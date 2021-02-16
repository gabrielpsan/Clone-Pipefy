import styled from 'styled-components';


export const Container = styled.div`
    position: absolute;
    left: 0;
    top: 80px;
    height: 100%;
    background: #FFFFFF;
    width: 40px;
`;

export const ListaIcons = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    margin-top: 20px;
    cursor: pointer;

    .imgMenu {
        margin-top: 10px;
    }
`

export const ContainerOpen = styled.div`
    position: absolute;
    left: 38px;
    top: 0px;
    height: 100%;
    width: 300px;
    background: #FFFFFF;
    animation: 0.3s abrir ease-in-out;
    border-right: 20px solid rgba(230, 246, 245, 0.4);
    border-left: 5px solid rgba(230, 246, 245, 0.4);


    @keyframes abrir{
        from{
            width: 0px;
        }
        to{
            width: 300px;
        }
    }
`

export const ContainerContentMenu = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const TopMenu = styled.div`
    width: 100%;
    margin-top: 20px;
    margin-left: 8px;
    cursor: pointer;  
`

export const OptionsMenu = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        font-size: 18px;
        width: 90%;
        color: #888;
        font-weight: 450;
        margin-bottom: 15px;
        cursor: pointer;
        text-decoration: none;
        transition: 0.5s;
    }

    a:hover {
        color: #F6D311;
        font-size: 20px;
        width: 70%;
    }
`

