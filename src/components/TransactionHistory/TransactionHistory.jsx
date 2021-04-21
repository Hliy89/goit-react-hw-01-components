import React from "react";
import PropTypes from 'prop-types';

import style from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
    const transactionElements = items.map(({ id, ...props }) => (
                    <tr className={style.element} key={id}>
                        <td className={style.item}>{props.type}</td>
                        <td className={style.item}>{props.amount}</td>
                        <td className={style.item}>{props.currency}</td>
                    </tr>));
    return (
        <table className={style.transactionHistory}>
        <thead>
            <tr className={style.element}>
                <th className={style.title}>Type</th>
                <th className={style.title}>Amount</th>
                <th className={style.title}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {transactionElements}
        </tbody>
        </table>
        )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape(
            {
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
};

export default TransactionHistory;