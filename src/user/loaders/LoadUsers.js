import {Factory} from 'immutable-di/define'
import FetchUsers from 'todomvc/user/fetchers/FetchUsers'

function LoadUsers({
    fetchUsers
}) {
    return fetchUsers()
}

export default Factory({
    fetchUsers: FetchUsers
})(LoadUsers)
