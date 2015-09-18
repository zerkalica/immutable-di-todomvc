import {Factory, Getter, Setter} from 'immutable-di/define'
import Semaphore from 'todomvc/common/services/Semaphore'
import FetchUsers from 'todomvc/user/fetchers/FetchUsers'

function LoadUsers({
    fetchUsers,
    getCurrentUsers,
    setUsers,
    setError,
    semaphore
}) {
    return function loadUsers() {
        const needUsers = getCurrentUsers().length === 0
        return semaphore({
            users: [needUsers, () => fetchUsers(), setUsers]
        })
        .catch(e => setError(e.message))
    }
}

export default Factory({
    fetchUsers: FetchUsers,
    getCurrentUsers: Getter(['user', 'users']),
    setUsers: Setter(['user', 'users']),
    setError: Setter(['fetcher', 'error']),
    semaphore: Semaphore
})(LoadUsers)
