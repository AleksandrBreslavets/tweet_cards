import styled from 'styled-components';


export const StyledSelect = styled.select`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    color: #333;
    cursor: pointer;

    &:hover {
        border-color: #666;
    }

    &:focus {
        border-color: #00f;
        box-shadow: 0 0 5px rgba(0, 0, 255, 0.3);
    }
`
