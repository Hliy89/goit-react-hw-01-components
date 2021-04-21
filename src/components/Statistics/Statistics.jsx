import React from 'react';
import PropTypes from 'prop-types';

import style from "./Statistics.module.css";

import StatisticsItem from './StatisticsItem/StatisticsItem';

const Statistics = ({ title, stats }) => {
    const statisticElements = stats.map(({id, ...props }) => <StatisticsItem key={id} {...props} />);
    return (<section className={style.statistics}>
                <h2 className="title">{title}</h2>

                <ul className={style.statList}>
                    {statisticElements}
                </ul>
            </section>
            )
};

Statistics.defaultProps = {
    stats: [],
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape(
            {
            id: PropTypes.string.isRequired,
        })
    )
};

export default Statistics;