import { StyledSelect } from "./Filter.styled";

export const Filter = ({ onFilterChange, filterValue }) => {
    return (
        <StyledSelect value={filterValue} onChange={(e) => onFilterChange(e.target.value)}>
            <option value="all">Show all</option>
            <option value="follow">Follow</option>
            <option value="followings">Followings</option>
        </StyledSelect>
    );
};
