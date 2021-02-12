import styled, { css } from 'styled-components';

export const Container = styled.div`

    position: relative;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 0 15px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-top: 20px solid rgba(230, 236, 245, 0.4);
    cursor: grab;

    p {
        font-weight: 500;
        line-height: 20px;
        margin-top: 10px;
    }

    header {
        position: absolute;
        top: -22px;
        left: 15px;
    }
    img {
        border-radius: 2px;
        margin-top: 20px;
        width: 24px;
        height: 24px;
    }

    ${props => props.isDragging && css` 
        border: 2px dashed rgba(0, 0, 0, 0.2);
        padding-top: 31px;
        border-radius: 0;
        background: transparent;
        cursor: grabbing;

        p, img, span {
            opacity: 0;
        }
    `}
`;

export const Label = styled.span`
    height: 10px;
    width: 10px;
    border-radius: 2px;
    display: inline-block;
    background: ${props => props.color};
`;
