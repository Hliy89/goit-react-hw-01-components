import React from 'react';
import PropTypes from 'prop-types';

import style from "./FriendList.module.css";

import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({friends}) => {
    const friendElements = friends.map(({ id, ...props }) => <FriendListItem key={id} {...props} />);
    return <ul className={style.friendList}>
                {friendElements}
           </ul>
};

FriendList.defaultProps = {
    friends: []
};

FriendList.propTypes = {
    friends: PropTypes.array
};

export default FriendList;