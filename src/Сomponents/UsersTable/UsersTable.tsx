import React from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import style from './usersTable.module.css'
import {UserItems} from "../../types/types";
import {Pagination} from "../Pagination/Pagination";
import {Sorting} from "../Sorting/Sorting";
import {NavLink} from "react-router-dom";
import {setUserAC} from "../../store/users-reducer";

export const UsersTable = () => {
    const users = useAppSelector(state => state.users.users);
    const dispatch = useAppDispatch();
    let totalCount: number = 0;

    if (users) {
        totalCount = users.total_count
    }


    const onSetUSer = (user: UserItems) => {
        dispatch(setUserAC(user))
    }


    return (
        <div>
            <div className={style.count}>
                Всего пользователей: {users && users.total_count}
            </div>
            {totalCount > 1 && <div className={style.sorting}>
                <Sorting/>
            </div>}

            <table>
                <thead className={style.thead}>
                <tr>
                    <th>

                        <span className={style.title}>Логин</span>

                    </th>
                </tr>
                </thead>
                <tbody>
                {users && users.items.map((user: UserItems) => (
                    <NavLink key={user.id} to={`/user/${user.id}`} onClick={() => onSetUSer(user)}
                             className={style.rowLink}>
                        <tr>
                            <td className={style.col}>  {user.login}</td>
                        </tr>
                    </NavLink>
                ))}
                </tbody>
            </table>
            <Pagination/>
        </div>
    );
};

