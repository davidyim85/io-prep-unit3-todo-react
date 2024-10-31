import { useEffect, useState } from "react";
import { getAllTodos, updateTodo, deleteTodo, addTodo } from "../services/todoService";

const Todo = () => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const data = await getAllTodos();
        setTodos(data);
    }

    const handleSubmit = async (e, id) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const updateData = {
            text: formData.get('text'),
            isComplete: formData.get('isComplete') === 'on',
            duration: Number(formData.get('duration'))
        }
        await updateTodo(id, updateData)
        fetchTodos()
    }

    const handleDelete = async (id) => {
        await deleteTodo(id)
        fetchTodos()
    }

    const handleAddNewSubmit = async (e, id) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const updateData = {
            text: formData.get('text'),
            isComplete: formData.get('isComplete') === 'on',
            duration: Number(formData.get('duration'))
        }
        await addTodo(updateData)
        
        //reset the form
        e.target.reset();

        fetchTodos()
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <main>

            <section>
                <h2>Todos</h2>
                {todos.map((v, i) => {
                    return (
                        <form key={i} onSubmit={(e) => handleSubmit(e, v._id)}>
                            <label htmlFor="text">Todo:</label>
                            <input
                                type="text"
                                defaultValue={v.text}
                                name="text"
                            />

                            <label htmlFor="isComplete">Is Complete:</label>
                            <input
                                type="checkbox"
                                defaultChecked={v.isComplete}
                                name="isComplete"
                            />

                            <label htmlFor="duration">Duration:</label>
                            <input
                                type="number"
                                defaultValue={v.duration}
                                name="duration"
                            />

                            <button type="submit">Save</button>
                            <button type="button" onClick={() => handleDelete(v._id)}>
                                Delete
                            </button>
                        </form>
                    )
                })}
            </section>

            <section>
                <h2>Add New Todos</h2>

                <form onSubmit={handleAddNewSubmit}>
                    <label htmlFor="text">Todo:</label>
                    <input
                        type="text"
                        defaultValue={""}
                        name="text"
                    />

                    <label htmlFor="isComplete">Is Complete:</label>
                    <input
                        type="checkbox"
                        defaultChecked={false}
                        name="isComplete"
                    />

                    <label htmlFor="duration">Duration:</label>
                    <input
                        type="number"
                        defaultValue={0}
                        name="duration"
                    />

                    <button type="submit">Add New</button>

                </form>
            </section>
        </main>
    )
}

export default Todo;