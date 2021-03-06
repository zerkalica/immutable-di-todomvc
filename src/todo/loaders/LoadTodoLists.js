import {Factory, Getter, Setter} from 'immutable-di/define'
import Semaphore from 'todomvc/common/services/Semaphore'
import FetchTodoLists from 'todomvc/todo/fetchers/FetchTodoLists'
import FetchUser from 'todomvc/user/fetchers/FetchUser'

function LoadTodoLists({
    fetchTodoLists,
    fetchUser,
    getCurrentTodoLists,
    getCurrentUser,
    setTodos,
    setCurrentUser,
    setError,
    semaphore,
    query
}) {
    return function loadTodoLists() {
        const userId = query.id
        const needTodos = getCurrentTodoLists().length === 0
        const needUser = !getCurrentUser().id
        return semaphore({
            selectedUser: [needUser, () => fetchUser(userId), setCurrentUser],
            todoLists: [needTodos, () => fetchTodoLists(userId), setTodos]
        })
        .catch(e => setError(e.message))
    }
}

export default Factory({
    fetchTodoLists: FetchTodoLists,
    fetchUser: FetchUser,
    query: ['route', 'query'],
    getCurrentUser: Getter(['user', 'current']),
    getCurrentTodoLists: Getter(['todo', 'todoLists']),
    setTodos: Setter(['todo', 'todoLists']),
    setCurrentUser: Setter(['user', 'current']),
    setError: Setter(['fetcher', 'error']),
    semaphore: Semaphore
})(LoadTodoLists)
