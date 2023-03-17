import styled from '@emotion/styled';

export const TransactionsWraper = styled.table`
    margin-top: 40px;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:40px;
    width:800px;
    border: 1px solid #c2c2c2;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 0.2);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    &:hover,
    &:focus {
        transform: scale(1.1);
    }
`;

export const TransactionsTableHeader = styled.tr`
    padding-block: 20px;
    color:white;
    text-align: center;
    font-size: 1.5rem;
    background-color: #00BFFF;
    height:50px;
`;

export const TransactionsTableItem = styled.tr`
    text-align: center;
    height: 50px;
    :nth-of-type(2n) {
    border: 1px solid #c2c2c2;
    border-top: none;
    background-color: lightgrey;
    }
`;

export const TransactionsItemType = styled.td`
    ::first-letter {
    text-transform: uppercase;
}
`;