import styled from 'styled-components';

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 380px;
    height: 460px;
    border-radius: 20px;  
    background: linear-gradient(115deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
`;

export const BgImgWrap = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:28px;
    padding-right: 36px;
    padding-left: 36px;
    margin-bottom: 18px;

`;

export const BgImage = styled.img`
    width: 308px;
    height: 168px;  
`;

export const LineBlock = styled.div`
    position: relative;
    width: 100%;
    height: 8px;
    margin-bottom: 62px;
    background-color: #EBD8FF;
    box-shadow: 0px 3.43693px 2.5777px 0px #FBF8FF inset, 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06), 0px -1.71846px 3.43693px 0px #AE7BE3 inset;
`;

export const AvatarWrap = styled.div`
        position: absolute;
        top: -31px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        background-color: #EBD8FF;
        box-shadow: 0px 4.39163px 3.29372px 0px #FBF8FF inset, 0px -2.19582px 4.39163px 0px #AE7BE3 inset;
        filter: drop-shadow(0px 4.391631126403809px 4.391631126403809px rgba(0, 0, 0, 0.06));
`;

export const Avatar = styled.img`
    width: 62px;
    height: 62px;
    border-radius: 50%;
    object-fit: cover;
`;

export const StatsBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-bottom: 26px;
`;

export const Text = styled.p`
    font-size: 20px;
    color: #EBD8FF;
`;