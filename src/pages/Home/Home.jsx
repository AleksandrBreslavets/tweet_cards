import { CommonContainer } from "components/GlobalStyles/CommonContainer.styled";
import { WelcomeText } from "./Home.styled";
import { Wrapper } from "components/CardList/CardList.styled";

const Home = () => {
    return (
        <CommonContainer>
            <Wrapper>
                <WelcomeText>Welcome on TWEETS 🎉🎉🎉</WelcomeText>
            </Wrapper>
        </CommonContainer>
    );
};

export default Home;