import {Factory} from 'immutable-di/define'
import Fetch from 'todomvc/common/services/Fetch'

function normalizeTodo(todo) {
    return {
        id: todo.id,
        title: todo.title
    }
}

function normalizeTodos(todos) {
    return todos.map(normalizeTodo)
}

function FetchTodos({fetch}) {
    return function fetchTodos(id) {
        return fetch(`/todos/${id}`)
            .then(normalizeTodos)
    }
}

export default Factory({
    fetch: Fetch
})(FetchTodos)
