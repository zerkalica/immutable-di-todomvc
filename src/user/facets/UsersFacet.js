import {Factory} from 'immutable-di/define'
import LoadUsers from 'todomvc/user/loaders/LoadUsers'

function UsersFacet({
    users,
    loadUsers
}) {
    loadUsers()

    return users
}

export default Factory({
    users: ['user', 'users'],
    loadUsers: LoadUsers
})(UsersFacet)
