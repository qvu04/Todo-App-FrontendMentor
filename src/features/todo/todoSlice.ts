import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ITodoState } from '../../types/todo.type';

const savedTodo = localStorage.getItem("todo_list")
const initialState: ITodoState = {
    todoItems: savedTodo ? JSON.parse(savedTodo) : [
        { id: 1, task: "Jog around the park 3x", isCompleted: false },
        { id: 2, task: "10 minutes meditation", isCompleted: false },
        { id: 3, task: "Read 1 hour", isCompleted: false },
        { id: 4, task: "Pick up groceries", isCompleted: false },
    ],
    status: "all",
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                todoItems: [...state.todoItems, { id: Date.now(), task: action.payload, isCompleted: false }]
            }
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                todoItems: state.todoItems.filter(todo => todo.id !== action.payload)
            }
        },
        clearTodo: (state) => {
            state.todoItems = state.todoItems.filter(todo => !todo.isCompleted);
        },
        toggleCompleted: (state, action: PayloadAction<number>) => {
            const todo = state.todoItems.find(todo => todo.id === action.payload);
            if (todo) {
                todo.isCompleted = !todo.isCompleted;
            };
        },
        setStatus: (state, action: PayloadAction<"all" | "active" | "completed">) => {
            state.status = action.payload;
        },
    }
});

export const { addTodo, deleteTodo, clearTodo, toggleCompleted, setStatus } = todoSlice.actions

export default todoSlice.reducer