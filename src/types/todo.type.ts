export interface ITodoItem {
    id: number;
    task: string;
    isCompleted: boolean
}
export interface ITodoState {
    todoItems: ITodoItem[],
    status: "all" | "active" | "completed"
}