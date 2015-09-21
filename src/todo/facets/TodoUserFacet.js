import {Factory} from 'immutable-di/define'
import LoadTodoUser from 'todomvc/todo/loaders/LoadTodoUser'

function TodoUserFacet({
    loadTodoUserFaset,
    todos,
    user
}) {
    loadTodoUserFaset()
    return {todos, user}
}

export default Factory({
    loadTodoUserFaset: LoadTodoUser,
    user: ['user', 'current'],
    todos: ['todo', 'todos']
})(TodoUserFacet)
