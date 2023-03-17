import PropTypes from 'prop-types';
import {
    TransactionsWraper,
    TransactionsTableHeader,
  } from './Transactions.styled';

import { TransactionHistoryItem } from "./TransactionHistoryItem";

export const TransactionHistory = ({items}) => {
    return (
    <TransactionsWraper className="transaction-history">
        <thead>
            <TransactionsTableHeader>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </TransactionsTableHeader>
        </thead>
        <tbody>
            {items.map((item) => 
                <TransactionHistoryItem key={item.id} item={item} />
            )}
        </tbody>
    </TransactionsWraper>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };



// Формат обработки данных из пропа
// "id": "44dca67a-8e5a-4798-bf8e-b15efd4e1abd",
//       "type": "invoice",
//       "amount": "828.62",
//       "currency": "UGX"