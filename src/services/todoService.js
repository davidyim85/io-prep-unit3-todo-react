const BASE_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;



export const getAllTodos = async () => {
    try {
        const res = await fetch(`${BASE_URL}/todo`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        return res.json();
    } catch (err) {
        console.log(err)
    }
}



export const updateTodo = async (id, data) => {
    try {
        const res = await fetch(`${BASE_URL}/todo/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        return res.json();
    } catch (err) {
        console.log(err)
    }
}

export const deleteTodo = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}/todo/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
        })

        return res.json();
    } catch (err) {
        console.log(err)
    }
}

export const addTodo = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}/todo`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        return res.json();
    } catch (error) {
        console.log(error)
    }
}
