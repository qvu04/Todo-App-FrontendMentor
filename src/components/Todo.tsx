import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import TodoList from './TodoList';
import { addTodo } from '../features/todo/todoSlice';
const Todo = () => {
    const [text, setText] = useState("");
    const items = useAppSelector((state) => state.todo.todoItems);
    const dispatch = useAppDispatch();
    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText("");
        };
    }
    return (
        <div className='min-h-screen md:flex md:flex-col md:items-center'>
            <div className='bg-[url(/images/bg-mobile-light.jpg)] md:bg-[url(/images/bg-desktop-light.jpg)] relative md:flex md:flex-col md:items-center md:justify-start bg-no-repeat bg-size-[100%_250px] h-70 w-full'>
                <div className='flex justify-evenly items-start'>
                    <p className='text-white mt-10 mr-20 font-bold'><span className='text-4xl mr-2'>T</span><span className='text-4xl mr-2'>O</span><span className='text-4xl mr-2'>D</span><span className='text-4xl mr-2'>O</span></p>
                    <button className='mt-10 ml-20 '><img src="/images/icon-moon.svg" alt="moon" /></button>
                </div>
                <form onSubmit={handleSubmit} className='mt-10 ml-10 relative'>
                    <span className='border-2 p-3 rounded-2xl absolute top-3 border-gray-300 left-5'></span>
                    <input
                        type="text"
                        name='task'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder='Create a new todo...'
                        className='border py-4 w-84 md:w-125 pl-16 rounded-sm bg-white text-gray-600'
                    />
                </form>
            </div>
            <div className='absolute top-50'>
                <TodoList items={items} />
            </div>
        </div>
    )
}

export default Todo