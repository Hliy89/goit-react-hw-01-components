import React from 'react';

import Profile from './components/Profile/Profile';
import './App.css';
import user from './user.json';

const App = () => {
    return (
        <>
            <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
            />
        </>
    )
};

export default App;