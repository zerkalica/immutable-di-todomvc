import {Factory} from 'immutable-di/define'
import Fetch from 'todomvc/common/services/Fetch'

function normalizeUser(u) {
    return {
        id: u.id,
        name: u.name,
        email: u.email
    }
}

function normalizeUsers(ul) {
    return ul.map(normalizeUser)
}

function FetchUsers({fetch}) {
    return function fetchUsers() {
        return fetch(`/users`)
            .then(normalizeUsers)
    }
}

export default Factory({
    fetch: Fetch
})(FetchUsers)
