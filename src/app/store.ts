import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
});
store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("todo_list", JSON.stringify(state.todo.todoItems));
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;