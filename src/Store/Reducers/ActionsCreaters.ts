import { userSlice } from './UserSlice';
import axios from 'axios';
import { AppDispatch } from './../store';
import {IUser} from "./../../Models/User"

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/posts")
        dispatch(userSlice.actions.usersFetchingSuccess(response.data))
    }catch (e) {
        if (e instanceof Error) {
            dispatch(userSlice.actions.usersFetchingError(e.message))
          }
    }
}