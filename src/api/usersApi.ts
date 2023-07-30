import {instance} from "./instanse/instanse";

export const usersApi = {
    getUsers: (result: string, currentPage: number, perPage: number, sort: boolean) => {
        const sortValue = `${sort ? "repositories" : ""}`
        return instance.get(`/users?q=${result}&page=${currentPage}&per_page=${perPage}&sort=${sortValue}`)
    }
}