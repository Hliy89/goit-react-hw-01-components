import React from 'react';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import style from "./App.module.css";

import user from '../src/components/Profile/user.json';
import stats from '../src/components/Statistics/statistical-data.json';
import friends from '../src/components/FriendList/friends.json';
import transactions from '../src/components/TransactionHistory/transactions.json';

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