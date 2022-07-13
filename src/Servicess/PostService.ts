import { IPost } from './../Models/Posts';
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"

export const postAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com"}),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: "/posts",
                params: {
                    _limit: limit,
                }
            })
        })
    })
})