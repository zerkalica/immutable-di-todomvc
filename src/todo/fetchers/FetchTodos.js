import {Factory} from 'immutable-di/define'
import Fetch from 'todomvc/common/services/Fetch'

function normalizeTodo(todo) {
    return {
        id: todo.id,
        title: todo.title,
        isChecked: todo.checked
    }
}

function normalizeTodos(todos) {
    return todos.map(normalizeTodo)
}

function FetchTodos({fetch}) {
    return function fetchTodos({userId, todosId}) {
        return fetch(`/user/${userId}/todos/${todosId}`)
            .then(normalizeTodos)
    }
}

export default Factory({
    fetch: Fetch
})(FetchTodos)
