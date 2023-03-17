import styled from '@emotion/styled';

export const StatisticWraper = styled.div`
    /* outline:2px solid tomato; */
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-left:auto;
    margin-right:auto;
    margin-top: 40px;
    width: 300px;
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
`;

export const StatisticTitle = styled.h2`
    color:darkgrey;
    margin-top:20px;
    text-transform:uppercase;
`;


export const StatisticList = styled.ul`
    width:100%;
    display:flex;
    margin-top:20px;
    justify-content:space-between;
`;

export const StatisticItem = styled.li`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    padding-top:10px;
    padding-bottom:10px;
    background-color: ${getRandomHexColor};
    font-weight:500;
    border-radius:2px;

`;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };