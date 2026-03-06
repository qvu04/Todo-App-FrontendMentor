import type { ITodoItem } from '../types/todo.type'

interface Props {
    item: ITodoItem;
}
const TodoItem = ({ item }: Props) => {
    return (
        <div className='border-b border-l border-r py-5 w-84 md:w-125 pl-16 ml-10 rounded-sm bg-white border-gray-300 text-gray-600'>
            <h1>{item.task}</h1>
        </div>
    )
}

export default TodoItem