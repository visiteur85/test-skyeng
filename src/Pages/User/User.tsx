import React from 'react';
import {useAppSelector} from "../../store/store";

export const User = () => {
    const user = useAppSelector(state => state.users.user)

    let avatar = ""
    if (user) {
        avatar = user.avatar_url
    }


    return (
        <div className='container'>
            <div>Логин:
                {user && user.login}
            </div>
            <img src={avatar} alt="avatar"/>
            <div>
                {user && user.repos_url}
            </div>
        </div>
    );
};

