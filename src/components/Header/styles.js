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
    align-items: center;

    img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }

    a {
        text-decoration: none;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 400;
    }
`