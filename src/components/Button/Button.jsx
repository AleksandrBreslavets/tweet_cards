import { StyledBtn } from "./Button.styled"

export const Button = ({children, isFollowing, handleClick, disabled, isLoadMore}) => {
    return (
        <StyledBtn isloadmore={isLoadMore} isfollowing={isFollowing} type="button" disabled={disabled} onClick={handleClick}>{children}</StyledBtn>
    )
}