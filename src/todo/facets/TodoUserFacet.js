import {Factory} from 'immutable-di/define'
import LoadTodoUser from 'todomvc/todo/loaders/LoadTodoUser'

function TodoUserFacet({
    loadTodoUserFaset,
    todos,
    filter,
    user
}) {
    loadTodoUserFaset()

    return {
        todos: todos.filter(todo =>
            filter.active && !todo.isCompleted
            || filter.completed && todo.isCompleted
        ),
        user
    }
}

export default Factory({
    loadTodoUserFaset: LoadTodoUser,
    filter: ['todo', 'filter'],
    user: ['user', 'current'],
    todos: ['todo', 'todos']
})(TodoUserFacet)
