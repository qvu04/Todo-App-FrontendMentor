import type { ITodoItem } from '../types/todo.type'
import TodoItem from './TodoItem'
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { clearTodo, deleteTodo, setStatus, toggleCompleted } from '../features/todo/todoSlice';

interface Props {
    items: ITodoItem[];
}
const TodoList = ({ items }: Props) => {
    const currentStatus = useAppSelector((state) => state.todo.status);
    const dispatch = useAppDispatch();
    const handleDelete = (id: number) => {
        dispatch(deleteTodo(id));
    };
    const handleClear = () => {
        dispatch(clearTodo())
    };
    const filterdStatus = items.filter(item => {
        if (currentStatus === "active") {
            return !item.isCompleted;
        } else if (currentStatus === "completed") {
            return item.isCompleted;
        } else {
            return true
        }
    });
    const hasComplete = items.some(item => item.isCompleted === true); //some được dùng để kiểm tra điều kiện các phần tử có trong mảng và khi đi đến 1 thằng có điều kiện là true thì nó sẽ dừng ngay và trả ra là --> true
    return (
        <div>
            {filterdStatus.length > 0 ? (
                <div>
                    {filterdStatus.map(item => (
                        <div key={item.id} className='relative'>
                            <button onClick={() => { dispatch(toggleCompleted(item.id)) }} className='cursor-pointer'>
                                {item.isCompleted ? (
                                    <span className='border-2 p-2 bg-linear-to-t from-sky-500 to-indigo-500 rounded-4xl absolute top-10 left-15 border-gray-300'>
                                        <img src="/images/icon-check.svg" alt="check" />
                                    </span>

                                ) : (
                                    <span className='border-2 p-3 rounded-2xl absolute top-10 left-15 border-gray-300'></span>

                                )}
                            </button>
                            <TodoItem item={item} />
                            <button onClick={() => { handleDelete(item.id) }} className='absolute cursor-pointer right-5 top-11 z-10'><img src="/images/icon-cross.svg" alt="cross" /></button>
                        </div>
                    ))}

                </div>
            ) : (
                <div className='text-red-600 text-center mt-5 mb-3'>Not thing to show</div>
            )}
            <div className=' py-4 text-gray-300 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-600 md:text-sm shadow-2xl font-black w-84 md:w-125 ml-10 border-b border-l border-r flex items-center justify-between rounded-sm bg-white'>
                <p className='ml-5'>{items.length} items left</p>
                <div className='hidden md:flex gap-4'>
                    <button
                        onClick={() => { dispatch(setStatus("all")) }}
                        className={currentStatus === "all" ? "text-purple-600" : " hover:text-gray-600 cursor-pointer"}
                    >All</button>
                    <button
                        onClick={() => { dispatch(setStatus("active")) }}
                        className={currentStatus === "active" ? "text-purple-600" : " hover:text-gray-600 cursor-pointer"}
                    >Active</button>
                    <button
                        onClick={() => { dispatch(setStatus("completed")) }}
                        className={currentStatus === "completed" ? "text-purple-600" : " hover:text-gray-600 cursor-pointer"}
                    >Completed</button>
                </div>
                <button
                    onClick={() => { handleClear() }}
                    className={!hasComplete ? "opacity-60 cursor-not-allowed mr-5" : "mr-5 cursor-pointer hover:text-gray-600"}
                    disabled={!hasComplete}
                >Clear Completed</button>
            </div>
            <div className='border dark:bg-gray-900 dark:border-gray-700 md:hidden py-4 text-gray-400 font-bold border-gray-100 w-84 ml-10 mt-5 flex items-center justify-evenly rounded-sm bg-white'>
                <button
                    onClick={() => { dispatch(setStatus("all")) }}
                    className={currentStatus === "all" ? "text-purple-600" : " hover:text-gray-600 cursor-pointer"}
                >All</button>
                <button
                    onClick={() => { dispatch(setStatus("active")) }}
                    className={currentStatus === "active" ? "text-purple-600" : " hover:text-gray-600 cursor-pointer"}
                >Active</button>
                <button
                    onClick={() => { dispatch(setStatus("completed")) }}
                    className={currentStatus === "completed" ? "text-purple-600" : " hover:text-gray-600 cursor-pointer"}
                >Completed</button>
            </div>
            <p className='text-gray-400 mt-10 ml-25 md:ml-40'>Drag and drop to reorder list</p>
        </div>
    )
}

export default TodoList