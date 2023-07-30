import React from 'react';
import style from './MainPage.module.css'
import {Search} from "../Сomponents/Search/Search";
import {useAppSelector} from "../store/store";
import {UsersTable} from "../Сomponents/UsersTable/UsersTable";
import {Pagination} from "../Сomponents/Pagination/Pagination";


export const MainPage = () => {
    const users = useAppSelector(state => state.users.users);

    return (
        <div className='container'>
            <h1 className={style.heading}>Тестовое задание для компании SkyEng</h1>
            <Search/>
            {users && <div>
                <UsersTable/>

            </div>}


        </div>
    );
};

