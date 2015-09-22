import {Factory} from 'immutable-di/define'
import Fetch from 'todomvc/common/services/Fetch'

function normalizeTodo(todo) {
    return {
        id: todo.id,
        title: todo.title,
        isCompleted: todo.completed
    }
}

function normalizeTodos(todos) {
    return todos.map(normalizeTodo)
}

function FetchTodos({fetch}) {
    return function fetchTodos({userId, listId}) {
        return fetch(`/user/${userId}/todos/${listId}`)
            .then(normalizeTodos)
    }
}

export default Factory({
    fetch: Fetch
})(FetchTodos)
