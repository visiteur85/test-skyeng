import React from 'react';
import {setCurrentPageAC} from "../../store/users-reducer";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {createPages} from "../../utils/createPages";
import style from './pagination.module.css'

export const Pagination = () => {
    const dispatch = useAppDispatch();
    const totalCount = useAppSelector(state => state.users.totalCount);
    const currentPage = useAppSelector(state => state.users.currentPage);
    const perPage = useAppSelector(state => state.users.perPage);
    let pagesCount: number = 0

    if (totalCount) {
        pagesCount = Math.ceil(totalCount / perPage)
    }
    const pages: number[] = []

    createPages(pages, pagesCount, currentPage)

    const setCurrentPage = (page: number) => {
        dispatch(setCurrentPageAC(page))
    }


    return (
        <div className={style.pages}>
            {pages.map((page, index) => <span className={currentPage === page ? style.currentPage : style.page}
                                              onClick={() => setCurrentPage(page)}
                                              key={index}>{page}</span>)}
        </div>
    );
};

