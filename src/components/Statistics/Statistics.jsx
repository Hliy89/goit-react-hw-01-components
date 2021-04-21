import React from 'react';
import PropTypes from 'prop-types';

import style from "./Statistics.module.css";

import StatisticsItem from './StatisticsItem';

const Statistics = ({ title, stats }) => {
    const statisticElement = stats.map(({id, ...props }) => <StatisticsItem key={id} {...props} />);
    return (<section className={style.statistics}>
                <h2 className="title">{title}</h2>

                <ul className={style.statList}>
                    {statisticElement}
                </ul>
            </section>
            )
};

Statistics.defaultProps = {
    title: "",
    stats: [],
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape(
            {
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
};

export default Statistics;