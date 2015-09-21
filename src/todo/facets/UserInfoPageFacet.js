import {Factory} from 'immutable-di/define'
import LoadTodoLists from 'todomvc/todo/loaders/LoadTodoLists'

function UserInfoPageFacet({
    loadTodoLists,
    todoLists,
    user
}) {
    loadTodoLists()
    return {todoLists, user}
}

export default Factory({
    loadTodoLists: LoadTodoLists,
    user: ['user', 'current'],
    todoLists: ['todo', 'todoLists']
})(UserInfoPageFacet)
