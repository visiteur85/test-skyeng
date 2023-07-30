import React from 'react';
import style from './MainPage.module.css'
import {Search} from "../../Сomponents/Search/Search";
import {useAppSelector} from "../../store/store";
import {UsersTable} from "../../Сomponents/UsersTable/UsersTable";


export const MainPage = () => {
    const users = useAppSelector(state => state.users.users);
    const result = useAppSelector(state => state.users.isResult);

    return (
        <div className='container'>
            <h1 className={style.heading}>Тестовое задание для компании SkyEng</h1>
            <Search/>
            {!result && <div>Соответствий не найдено</div>}
            {users && <div><UsersTable/>

            </div>}


        </div>
    );
};

