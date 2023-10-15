import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
`;

export const CardsWrap = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 48px;
    margin-bottom: 70px;
    margin-top: 40px;
`;

export const BackBtn = styled(NavLink)`
    display:block;
    text-align: left;
    margin-bottom: 20px;
`;

export const EmptyItemsText = styled.p`
  font-size: 36px;
`;