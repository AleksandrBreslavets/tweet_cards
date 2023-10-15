import { CommonContainer } from "components/GlobalStyles/CommonContainer.styled";
import { Header, Item, LinksList, StyledNavLink } from "./AppBar.styled"

export const AppBar = () => {
    return (
        <CommonContainer>
            <Header>
                <nav>
                    <LinksList >
                        <Item><StyledNavLink to="/">Home</StyledNavLink></Item>
                        <Item><StyledNavLink to="/tweets">Tweets</StyledNavLink></Item>
                    </LinksList>
                </nav>
            </Header>
        </CommonContainer>
    );
}