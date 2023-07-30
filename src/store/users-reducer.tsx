import {UserItems, UserType} from "../types/types";
import {AppThunk} from "./store";
import {Dispatch} from "redux";
import {usersApi} from "../api/usersApi";
import {log} from "util";

type StateType = {
    users: UserType | null
    isResult: boolean
    currentPage: number
    perPage: number
    totalCount: number | undefined
    isSorting:boolean
    user: UserItems | null
    dataFromValue: string

}

export const initialState: StateType = {
    users: null,
    isResult: true,
    currentPage: 1,
    perPage: 10,
    totalCount: 0,
    isSorting:true,
    user:null,
    dataFromValue:""

};

export const UsersReducer = (state = initialState, action: UsersActionType): StateType => {
    switch (action.type) {
        case "SEARCH-FOR-USER":
            return {...state, users: action.users, totalCount: action.users?.total_count}
        case "IS-RESULT-FROM-GITHUB":
            return {...state, isResult: action.isResult}
        case "SET-CURRENT_PAGE":
            return {...state, currentPage: action.page}
        case "SET-SORTING":
            return {...state, isSorting: !state.isSorting}
        case "SET-USER": {
            return {...state, user:action.user}
        }
        case "GET-VALUE":{
            return {...state, dataFromValue:action.value}
        }
        default:
            return state
    }
}

export const searchForUsersAC = (users: UserType | null) => ({type: 'SEARCH-FOR-USER', users} as const);
export const isResultFromFromGitHubAC = (isResult: boolean) => ({type: 'IS-RESULT-FROM-GITHUB', isResult} as const);
export const setCurrentPageAC = (page: number) => ({type: 'SET-CURRENT_PAGE', page} as const);
export const setSortingAC = () => ({type: 'SET-SORTING'} as const);
export const setUserAC = (user:UserItems) => ({type: 'SET-USER', user} as const);
export const getDataFromInputAC = (value:string) => ({type: 'GET-VALUE', value} as const);



export const getUsersTS = (value: string, currentPage: number, perPAge: number, isSort:boolean): AppThunk => async (dispatch: Dispatch) => {
    try {
        let res = await usersApi.getUsers(value, currentPage, perPAge, isSort);
        const users = res.data;

        if (users.total_count === 0) {
            console.log(users.total_count)
            dispatch(isResultFromFromGitHubAC(false))
        } else {
            dispatch(searchForUsersAC(users));
            dispatch(isResultFromFromGitHubAC(true))
        }


    } catch (e) {
        console.log("Произошла ошибка при запросе");
    }
};


export type UsersActionType = ReturnType<typeof searchForUsersAC>
    | ReturnType<typeof isResultFromFromGitHubAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setSortingAC>
    | ReturnType<typeof setUserAC>
    | ReturnType<typeof getDataFromInputAC>
