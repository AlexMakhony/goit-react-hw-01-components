import styled from '@emotion/styled';


export const FriendsList = styled.ul`
    margin-top: 40px;
    width:300px;
    margin-left:auto;
    margin-right:auto;
`;

export const FriendsItem = styled.li`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    padding-top:20px;
    padding-bottom:20px;
    margin-bottom:10px;
    border: 1px solid #c2c2c2;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    &:hover,
    &:focus {
        transform: scale(1.1);
    }
    font-weight:500;
    font-size:18px;
`;

export const FriendsStatusOnline = styled.div`
    width:30px;
    height:30px;
    background-color: greenyellow;
    border-radius:50%;
`;

export const FriendsStatusOffline = styled.div`
    width:30px;
    height:30px;
    background-color: red;
    border-radius:50%;
`;