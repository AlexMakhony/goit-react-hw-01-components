export const TransactionHistoryItem = ({item}) => {
    return (
    <tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
    </tr>
    )}