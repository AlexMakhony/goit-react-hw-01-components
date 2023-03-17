import PropTypes from 'prop-types';
import {
  TransactionsTableItem,
  TransactionsItemType,
} from './Transactions.styled';

export const TransactionHistoryItem = ({item}) => {
    return (
    <TransactionsTableItem key={item.id}>
        <TransactionsItemType>{item.type}</TransactionsItemType>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
    </TransactionsTableItem>
    )}

TransactionHistoryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};