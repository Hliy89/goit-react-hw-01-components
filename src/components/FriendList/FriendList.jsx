import React from 'react';
import PropTypes from 'prop-types';

import style from "./FriendList.module.css";

import FriendListItem from './FriendListItem';

const FriendList = ({friends}) => {
    const friendElement = friends.map(({ id, ...props }) => <FriendListItem key={id} {...props} />);
    return <ul className={style.friendList}>
                {friendElement}
           </ul>
};

FriendList.defaultProps = {
    friends: []
};

FriendList.propTypes = {
    friends: PropTypes.array
};

export default FriendList;