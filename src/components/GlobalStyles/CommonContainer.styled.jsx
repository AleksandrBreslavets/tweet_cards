import styled from 'styled-components';

export const CommonContainer = styled.div`
    position: ${({ position }) => position || 'static'};
    margin: 0 auto;
    text-align: center;
    padding-left: 100px;
    padding-right: 100px;
    max-width: 1436px;
`;