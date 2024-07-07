import css from './TransactionsItem.module.css'

export default function TransactionItem({ item: { type, amount, currency } }) {
  return (
    <>
      <td className={css.lineitem}>{type}</td>
      <td className={css.lineitem}>{amount}</td>
      <td className={css.lineitem}>{currency}</td>
    </>
  );
}
