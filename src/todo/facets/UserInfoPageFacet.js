import {Factory} from 'immutable-di/define'
import LoadTodoLists from 'todomvc/todo/loaders/LoadTodoLists'

function UserInfoPageFacet({
    loadTodoLists,
    todoLists
}) {
    loadTodoLists()
    return todoLists
}

export default Factory({
    loadTodoLists: LoadTodoLists,
    todoLists: ['todo', 'todoLists']
})(UserInfoPageFacet)
