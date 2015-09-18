import {Factory, Getter, Setter} from 'immutable-di/define'
import Semaphore from 'todomvc/common/services/Semaphore'
import FetchTodoLists from 'todomvc/todo/fetchers/FetchTodoLists'

function LoadTodoLists({
    fetchTodoLists,
    getCurrentTodoLists,
    setTodoLists,
    setError,
    semaphore,
    query
}) {
    return function loadTodoLists() {
        const userId = query.userId
        const needTodos = getCurrentTodoLists().length === 0
        return semaphore({
            todoLists: [needTodos, () => fetchTodoLists(userId), setTodoLists]
        })
        .catch(e => setError(e.message))
    }
}

export default Factory({
    fetchTodoLists: FetchTodoLists,
    query: ['route', 'query'],
    getCurrentTodoLists: Getter(['todo', 'todoLists']),
    setTodoLists: Setter(['todo', 'todoLists']),
    setError: Setter(['fetcher', 'error']),
    semaphore: Semaphore
})(LoadTodoLists)
