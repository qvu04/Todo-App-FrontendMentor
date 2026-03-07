import type { ITodoItem } from '../types/todo.type'

interface Props {
    item: ITodoItem;
}
const TodoItem = ({ item }: Props) => {
    return (
        <div className={item.isCompleted ? 'border-b line-through dark:bg-gray-900 dark:text-gray-600 dark:border-gray-700 text-gray-400 border-l border-r py-5 w-84 md:w-125 pl-16 ml-10 rounded-sm bg-white border-gray-300' : 'border-b border-l dark:bg-gray-900 dark:text-white dark:border-gray-700 border-r py-5 w-84 md:w-125 pl-16 ml-10 rounded-sm bg-white border-gray-300 text-gray-600'}>
            <h1>{item.task}</h1>
        </div>
    )
}

export default TodoItem