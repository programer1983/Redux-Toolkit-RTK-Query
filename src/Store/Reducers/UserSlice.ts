import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../Models/User";


interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    count: number;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    }
})

export default userSlice.reducer