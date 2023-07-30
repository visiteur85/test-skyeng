import React from 'react';
import {useAppDispatch} from "../../store/store";
import {setCurrentPageAC, setSortingAC} from "../../store/users-reducer";

export const Sorting = () => {
    const dispatch = useAppDispatch();

    const onSortUsers = () => {
        dispatch(setSortingAC())
        dispatch(setCurrentPageAC(1))
    }

    return (
        <div>
            Сортировать по количеству репозиториев: <button onClick={onSortUsers}>Сортировка</button>
        </div>
    );
};

