import {Factory} from 'immutable-di/define'
import Fetch from 'todomvc/common/services/Fetch'

function normalizeTodoList(l) {
    return {
        id: l.id,
        title: l.title,
        description: l.description
    }
}

function normalizeTodoLists(lists) {
    return lists.map(normalizeTodoList)
}

function FetchTodoLists({fetch}) {
    return function fetchTodoLists(userId) {
        return fetch(`/user/${userId}/todos`)
            .then(normalizeTodoLists)
    }
}

export default Factory({
    fetch: Fetch
})(FetchTodoLists)
