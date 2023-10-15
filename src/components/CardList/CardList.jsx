import { Card } from "components/Card/Card";
import { CommonContainer } from "components/GlobalStyles/CommonContainer.styled";
import { useEffect, useState } from "react";
import { fetchUsers } from "services/api";
import { BackBtn, CardsWrap, EmptyItemsText, Wrapper } from "./CardList.styled";
import { Button } from "components/Button/Button";
import { Loader } from "components/Loader/Loader";
import { Filter } from "components/Filter/Filter";

export const CardList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [filter, setFilter] = useState('');
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        if (hasLoaded)
            (async () => {
                setIsLoading(true);
                const res = await fetchUsers();
                if (res) {
                    setUsers(res);
                }
                setIsLoading(false);
            })();
        else setHasLoaded(true);
    }, [hasLoaded])
    const handleLoadMoreBtnClick = () => {
        setItemsPerPage(itemsPerPage + 3);
    };

    const onFilterValueChange = (value) => {
        setFilter(value);
        setItemsPerPage(3);
    };

    const onFilter = () => {
        switch (filter) {
            case 'all':
                return users;
            case 'followings':
                return users.filter(user => localStorage.getItem(`${user.id}`) === 'true');
            case 'follow':
                return users.filter(user => localStorage.getItem(`${user.id}`) === 'false' || localStorage.getItem(`${user.id}`) === null);
            default:
                return users;
        }
    };

    const filteredUsers = onFilter();

    const renderedItems = filteredUsers
        .slice(0, itemsPerPage)
        .map(user => {
        return (
            <li key={user.id}>
                <Card onBtnFollowClick={onFilter} userData={user} />
            </li>
        );
        });

    return (
        <CommonContainer>
            <Wrapper>
                <BackBtn to="/">&#11013; BACK</BackBtn>
                {filteredUsers.length > 0 &&
                    <>
                        <Filter onFilterChange={onFilterValueChange} filterValue={filter} />
                        <CardsWrap>
                            {renderedItems}
                        </CardsWrap>
                    </>
                }
                {isLoading && <Loader />}
                {!(itemsPerPage >= filteredUsers.length) && filteredUsers.length > 0 && <Button isLoadMore={'true'} disabled={isLoading} handleClick={handleLoadMoreBtnClick}>Load More</Button>}
                {!filteredUsers.length && !isLoading && <EmptyItemsText>Sorry, we didn`t find any user or some error occured...😭😭😭</EmptyItemsText>}
            </Wrapper>
        </CommonContainer>
    );
};