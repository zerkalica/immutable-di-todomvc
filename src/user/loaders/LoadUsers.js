import {Factory, Getter, Setter} from 'immutable-di/define'
import {semaphore} from 'immutable-di/utils/Promised'
import FetchUsers from 'todomvc/user/fetchers/FetchUsers'

function LoadUsers({
    fetchUsers,
    getCurrentUsers,
    setUsers,
    setError
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
    setError: Setter(['fetcher', 'error'])
})(LoadUsers)
