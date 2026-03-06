export interface ITodoItem {
    id: number;
    task: string;
    isCompleted: boolean
}
export interface ITodoState {
    todoItems: ITodoItem[],
    filter: "all" | "active" | "completed"
}