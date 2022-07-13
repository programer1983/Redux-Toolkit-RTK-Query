import { IPost } from './../Models/Posts';
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"

export const postAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: "/posts",
                params: {
                    _limit: limit,
                }
            }),
            providesTags: result => ['Post']
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: "/posts",
                method: "POST",
                body: post,
            }),
            invalidatesTags: ['Post']
        })
    })
})