import type { ITodoItem } from '../types/todo.type'
import TodoItem from './TodoItem'
import { useAppDispatch } from '../hooks/hooks';
import { clearTodo, deleteTodo } from '../features/todo/todoSlice';

interface Props {
    items: ITodoItem[];
}
const TodoList = ({ items }: Props) => {
    const dispatch = useAppDispatch();
    const handleDelete = (id: number) => {
        dispatch(deleteTodo(id));
    }
    const handleClear = () => {
        dispatch(clearTodo())
    }
    const hasComplete = items.some(item => item.isCompleted === true); //some được dùng để kiểm tra điều kiện các phần tử có trong mảng và khi đi đến 1 thằng có điều kiện là true thì nó sẽ dừng ngay và trả ra là --> true
    return (
        <div>
            {items.length > 0 ? (
                <div>
                    {items.map(item => (
                        <div key={item.id} className='relative'>
                            <button className='cursor-pointer'>
                                <span className='border-2 p-3 rounded-2xl absolute top-10 left-15 border-gray-300'></span>
                            </button>
                            <TodoItem item={item} />
                            <button onClick={() => { handleDelete(item.id) }} className='absolute cursor-pointer right-5 top-11 z-10'><img src="/images/icon-cross.svg" alt="cross" /></button>
                        </div>
                    ))}

                    <div className=' py-4 text-gray-300 md:text-sm  shadow-2xl font-black w-84 md:w-125 ml-10 border-b border-l border-r flex items-center justify-between rounded-sm bg-white'>
                        <p className='ml-5'>{items.length} items left</p>
                        <div className='hidden md:flex gap-4'>
                            <button>All</button>
                            <button>Active</button>
                            <button>Completed</button>
                        </div>
                        <button
                            onClick={() => { handleClear() }}
                            className={!hasComplete ? "opacity-60 cursor-not-allowed mr-5" : "mr-5 cursor-pointer"}
                            disabled={!hasComplete}
                        >Clear Completed</button>
                    </div>
                    <div className='border md:hidden py-4 text-gray-400 font-bold border-gray-100 w-84 ml-10 mt-5 flex items-center justify-evenly rounded-sm bg-white'>
                        <button>All</button>
                        <button>Active</button>
                        <button>Completed</button>
                    </div>
                    <p className='text-gray-400 mt-2 ml-25 md:ml-50'>Drag and drop to reorder list</p>
                </div>
            ) : (
                <div>Không có dữ liệu được hiển thị</div>
            )}
        </div>
    )
}

export default TodoList