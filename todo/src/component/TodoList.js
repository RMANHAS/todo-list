import React from 'react';




const TodoList = ({ todos, setTodos, setEditTodo }) => {


    const handleComplete = ({ todo, setTodos }) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, complated: !item.complated }
                }
                return item;
            })
        );
    };

    const handleEdit = () => {
        const findTodo = todos.find((todo) => todo.id ===
            id);
        setEditTodo(findTodo)
    }

    const handleDelete = ({ id }) => {

        setTodos(todos.filter((todo) => todo.id !== id));

    }
    return (
        <div>
            {todos.map((todo) => (
                <li className="todo-list" key={todo.id}>
                    <input type="text" value={todo.title} className={`list $ {todo.complated ? "complete" :}`} onChange={(event) => event.preventDefault()} />

                    <div>

                        <button className="complete-button task-button" onClick={() => handleComplete(todo)}>
                            <i className="fa fa-check-circle"></i></button>

                        <button className="complete-edit task-button" onClick={() => handleEdit(todo)}>
                            <i className="fa fa-edit"></i></button>

                        <button className="complete-delete task-button" onClick={() => handleDelete(todo)}>
                            <i className="fa fa-trash"></i></button>

                    </div>

                </li>
            ))}
        </div>

    );
}

export default TodoList;