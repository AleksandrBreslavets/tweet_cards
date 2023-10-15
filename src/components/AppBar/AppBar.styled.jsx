import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    min-height: 44px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 9px;
    padding-bottom: 9px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: white;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const LinksList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Item = styled.li`
    &:not(:last-child){
        margin-right: 24px;
    }
`;

export const StyledNavLink = styled(NavLink)`
    font-family: 'Libre Baskerville', serif;

    &.active,
    &:hover,
    &:focus {
        color:#3b1d5e;
        border-bottom: 2px solid #3b1d5e; 
    }
`;