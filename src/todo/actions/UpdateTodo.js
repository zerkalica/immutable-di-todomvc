import {Apply, Factory} from 'immutable-di/define'
import PutTodo from 'todomvc/todo/fetchers/PutTodo'

function UpdateTodo({applyTodos, putTodo}) {
    return function updateTodo(todoData) {
        applyTodos(todos => todos.map(todo => {
            return todoData.id === todo.id
                ? {...todo, ...todoData}
                : todo
        }))
        putTodo(todoData)
    }
}

export default Factory({
    putTodo: PutTodo,
    applyTodos: Apply(['todo', 'todos'])
})(UpdateTodo)
