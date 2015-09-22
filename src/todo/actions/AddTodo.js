import {Apply, Factory} from 'immutable-di/define'
import PostTodo from 'todomvc/todo/fetchers/PostTodo'

function AddTodo({applyTodos, postTodo}) {
    return function addTodo({userId, listId, isCompleted, title}) {
        postTodo({userId, listId, isCompleted, title})
            .then(({id}) => {
                applyTodos(todos => todos.concat([{isCompleted, title, id}]))
            })
    }
}

export default Factory({
    postTodo: PostTodo,
    applyTodos: Apply(['todo', 'todos'])
})(AddTodo)
