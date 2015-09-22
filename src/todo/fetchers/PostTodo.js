import {Factory} from 'immutable-di/define'
import Fetch from 'todomvc/common/services/Fetch'

function PostTodo({fetch}) {
    return function postTodo({userId, listId, title, isCompleted}) {
        return fetch(`/user/${userId}/todos/${listId}`, {
            method: 'POST',
            json: {
                listId,
                title,
                completed: isCompleted
            }
        })
    }
}

export default Factory({
    fetch: Fetch
})(PostTodo)
