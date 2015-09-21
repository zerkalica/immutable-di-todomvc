import {Factory} from 'immutable-di/define'
import Fetch from 'todomvc/common/services/Fetch'

function normalizeUser(u) {
    return {
        id: u.id,
        name: u.name,
        email: u.email,
        description: u.description
    }
}

function FetchUser({fetch}) {
    return function fetchUser(userId) {
        return fetch(`/user/${userId}`)
            .then(normalizeUser)
    }
}

export default Factory({
    fetch: Fetch
})(FetchUser)
