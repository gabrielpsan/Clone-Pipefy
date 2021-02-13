import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    padding: 0 30px;
    background: #F6D311;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;

    display: flex;
    align-items: center;
    a {
        color: #FFFFFF;
        text-decoration: none;
        font-size: 24px;
        font-weight: bolder;
    }
  
`;

export const BoxInfo = styled.div`
    margin-left: 30px;
    display: flex;
    flex-direction: column;

    img {
        width: 45px;
        height: 25px;
        border-radius: 5px;
    }
`