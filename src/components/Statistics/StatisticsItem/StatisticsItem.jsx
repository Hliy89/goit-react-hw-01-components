import React from "react";
import PropTypes from 'prop-types';

import style from "./StatisticItem.module.css";

const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

const StatisticsItem = ({label, percentage}) => {
    return (
        <li className={style.item} style={{backgroundColor: randomColor()}}>
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}</span>
        </li>
    )
};


StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;