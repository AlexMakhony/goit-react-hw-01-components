import styled from '@emotion/styled';

export const ProfileWraper = styled.div`
    margin: 40px auto 0 auto;
    width: 250px;
    height: max-content;
    border: 1px solid #c2c2c2;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    &:hover,
    &:focus {
        transform: scale(1.1);
    }
    img {
        disply: block;
        heigth: 100px;
        width: 100px;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;

export const DisriptionWraper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:auto;
    gap:20px;
    margin-top: 40px;
    margin-left:auto;
    margin-right:auto;
    /* outline: 2px solid tomato; */
`;

export const ListWraper = styled.ul`
    display: flex;
    justify-content:space-evenly;
    margin-top:20px;
    margin-bottom:40px;
`;
