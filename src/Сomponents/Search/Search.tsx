import React, {useEffect} from 'react';
import style from './search.module.css';
import {ReactComponent as FindIcon} from '../../assets/icons/search-svgrepo-com 1.svg';
import {getDataFromInputAC, getUsersTS, searchForUsersAC, setCurrentPageAC} from '../../store/users-reducer';
import {useAppDispatch, useAppSelector} from '../../store/store';

export const Search = () => {
    const dispatch = useAppDispatch();
    const currentPage = useAppSelector(state => state.users.currentPage);
    const perPage = useAppSelector(state => state.users.perPage);
    const isSort = useAppSelector(state => state.users.isSorting);
    const dataValue = useAppSelector(state => state.users.dataFromValue)

    useEffect(() => {
        let timerId: NodeJS.Timeout;

        if (dataValue.trim().length > 0) {
            timerId = setTimeout(() => {
                dispatch(getUsersTS(dataValue, currentPage, perPage, isSort))
            }, 500)
        } else {
            dispatch(searchForUsersAC(null))
        }

        return () => {
            clearTimeout(timerId);
        };
    }, [dataValue, currentPage, isSort]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(getDataFromInputAC(e.currentTarget.value));
        if (currentPage !== 1) {
            dispatch(setCurrentPageAC(1))
        }


    };

    return (
        <div className={style.inputContainer}>
            <input
                autoFocus={true}
                value={dataValue}
                onChange={handleInputChange}
                type="text"
                placeholder="Введите имя пользователя"
            />
            {!dataValue && <FindIcon className={style.icon}/>}

        </div>
    );
};
