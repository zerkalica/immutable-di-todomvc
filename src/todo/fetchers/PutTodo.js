import {Factory} from 'immutable-di/define'
import Fetch from 'todomvc/common/services/Fetch'

function PutTodo({fetch}) {
    return function putTodo(todo) {
        return fetch(`/todo/${todo.id}`, {
            method: 'PUT',
            json: todo
        })
    }
}

export default Factory({
    fetch: Fetch
})(PutTodo)
