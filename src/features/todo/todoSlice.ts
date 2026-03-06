import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoItem: []
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {}
});

export const { } = todoSlice.actions

export default todoSlice.reducer