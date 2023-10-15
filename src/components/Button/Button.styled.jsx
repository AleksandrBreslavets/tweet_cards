import styled from 'styled-components';

export const StyledBtn = styled.button`
    padding: 14px 28px;
    border-radius: 10.311px;
    font-size: 18px;
    font-weight: 600;
    color: #373737;
    border: ${({ isloadmore }) => isloadmore === 'true' ? '1px solid pink' : 'none'};
    background-color: ${({ isfollowing }) => isfollowing === 'true' ? '#5CD3A8' : '#EBD8FF'};
    box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
    transition:
    background-color 300ms linear;

    &:hover{
        background-color: ${({ isfollowing }) => isfollowing === 'true' ? '#EBD8FF' : '#5CD3A8'};
    }
`;