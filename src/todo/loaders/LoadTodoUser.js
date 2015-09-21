import {Factory, Getter, Setter} from 'immutable-di/define'
import Semaphore from 'todomvc/common/services/Semaphore'
import FetchTodos from 'todomvc/todo/fetchers/FetchTodos'
import FetchUser from 'todomvc/user/fetchers/FetchUser'

function LoadTodoUser({
    fetchTodos,
    fetchUser,
    getCurrentTodos,
    getCurrentUser,
    setTodos,
    setCurrentUser,
    setError,
    semaphore,
    query
}) {
    return function loadTodoUser() {
        const {userId, todosId} = query
        const needTodos = getCurrentTodos().length === 0
        const needUser = !getCurrentUser().id
        return semaphore({
            selectedUser: [needUser, () => fetchUser(userId), setCurrentUser],
            todos: [needTodos, () => fetchTodos({userId, todosId}), setTodos]
        })
        .catch(e => setError(e.message))
    }
}

export default Factory({
    fetchTodos: FetchTodos,
    fetchUser: FetchUser,
    query: ['route', 'query'],
    getCurrentUser: Getter(['user', 'current']),
    getCurrentTodos: Getter(['todo', 'todos']),
    setTodos: Setter(['todo', 'todos']),
    setCurrentUser: Setter(['user', 'current']),
    setError: Setter(['fetcher', 'error']),
    semaphore: Semaphore
})(LoadTodoUser)
