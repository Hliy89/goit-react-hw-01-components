import React from 'react';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import style from "./App.module.css";

import user from './json/user.json';
import stats from './json/statistical-data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

const App = () => {
    return (
        <div className={style.container}>
            <Profile {...user} />
            <Statistics title="Upload stats" stats={stats} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />;
        </div>
    )
};

export default App;