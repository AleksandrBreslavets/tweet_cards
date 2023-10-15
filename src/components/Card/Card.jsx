import { Avatar, AvatarWrap, BgImage, BgImgWrap, CardContainer, LineBlock, StatsBlock, Text } from "./Card.styled";
import { Logo } from "components/Logo/Logo";
import bgImg from "../..//assets/images/bg.png"
import bgImg2x from "../..//assets/images/bg.png"
import { useState } from "react";
import { updateFollowersNumb } from "services/api";
import { Button } from "components/Button/Button";

export const Card = ({ userData }) => {
    const { avatar, tweets, followers } = userData;
    const tweetsFormated = tweets ? tweets.toLocaleString('en-US') : 0;
    const [followersNumb, setFollowersNumb] = useState(followers);
    const [isLoading, setIsLoading] = useState(false);
    const followersFormated = followersNumb ? followersNumb.toLocaleString('en-US') : 0;

    const [isFollowing, setIsFollowing] = useState(
        localStorage.getItem(`${userData.id}`) === 'true' || false
    );

    const handleFollowBtnClick = async () => {
        setIsLoading(true);
        const updatedFollowers = isFollowing ? followersNumb - 1 : followersNumb + 1;
        const res = await updateFollowersNumb({ ...userData, followers: updatedFollowers });
        setFollowersNumb(res);
        setIsFollowing(prevState => !prevState);
        localStorage.setItem(`${userData.id}`, !isFollowing);
        setIsLoading(false);
    };

    return (
        <CardContainer>
            
            <BgImgWrap>
                <Logo />
                <picture>
                    <BgImage
                        src={bgImg}
                        srcSet={`${bgImg2x} 2x`}
                        alt="messages" />
                </picture>
            </BgImgWrap>
            <LineBlock>
                <AvatarWrap>
                    <Avatar src={avatar} alt="avatar" />
                </AvatarWrap>
            </LineBlock>
            <StatsBlock>
                <Text>{tweetsFormated} TWEETS</Text>
                <Text>{followersFormated} FOLLOWERS</Text>
            </StatsBlock>
            <Button isFollowing={isFollowing.toString()} disabled={isLoading} handleClick={handleFollowBtnClick} >{!isFollowing ? "Follow" : "Following"}</Button>
        </CardContainer>
    );
};