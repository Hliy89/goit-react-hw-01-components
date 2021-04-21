import React from "react";
import PropTypes from 'prop-types';

import style from "./FriendList.module.css";

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className={style.item}>
            <span className={isOnline ? style.statusOnline : style.statusOffline}>{isOnline}</span>
            <img className={style.avatar} src={avatar} alt={name} width="48" />
            <p className={style.name}>{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;