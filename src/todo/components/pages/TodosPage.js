import {Setter} from 'immutable-di/define'
import AddTodo from 'todomvc/todo/actions/AddTodo'
import cn from 'classnames'
import React from 'react'
import root from 'immutable-di-react/root'
import statefull from 'immutable-di-react/statefull'
import T from 'babelfish-plus/react/T'
import TodoUserFacet from 'todomvc/todo/facets/TodoUserFacet'
import UpdateTodo from 'todomvc/todo/actions/UpdateTodo'
import UserInfo from 'todomvc/user/components/UserInfo'

@statefull({
    todoFacet: TodoUserFacet,
    query: ['route', 'query'],
    filter: ['todo', 'filter'],
    setFilter: Setter(['todo', 'filter']),
    updateTodo: UpdateTodo,
    addTodo: AddTodo
})
@root(() => ({
    todo: {
        add: {
            isCompleted: false,
            title: ''
        },
        edit: {
            id: '',
            title: ''
        }
    }
}))
@statefull({
    edit: ['todo', 'edit'],
    add: ['todo', 'add'],
    setAddData: Setter(['todo', 'add']),
    setUpdateData: Setter(['todo', 'edit'])
})
export default class TodosPage extends React.Component {

    _addTodo({title, isCompleted}) {
        const {query, addTodo, setAddData} = this.props
        const {userId, listId} = query
        addTodo({userId, listId, title, isCompleted})
        setAddData({})
    }

    _updateTodo({id, title}) {
        const {updateTodo, setUpdateData} = this.props
        updateTodo({id, title})
        setUpdateData({})
    }

    render() {
        const {
            setAddData,
            setFilter,
            setUpdateData,
            updateTodo,
            edit,
            filter,
            add,
            todoFacet
        } = this.props
        const {user, todos} = todoFacet
        const {active, completed} = filter

        return (
            <div>
                <UserInfo user={user}/>
                <section>
                    <h1><T>Todos</T></h1>
                    <input
                        type="text"
                        name="add-todo"
                        value={add.title}
                        onChange={e => setAddData({
                            isCompleted: add.isCompleted,
                            title: e.currentTarget.value
                        })}
                        onBlur={() => this._addTodo(add)}
                    />

                    <ul>
                        {todos.map(({title, isCompleted, id}) =>
                            <li>
                                {edit.id === id
                                    ? <input
                                        type="text"
                                        name={'edit-' + id}
                                        value={edit.title}
                                        onChange={e => setUpdateData({
                                            id,
                                            title: e.currentTarget.value
                                        })}
                                        onBlur={() => this._updateTodo(edit)}
                                    />
                                : <div
                                    onDoubleClick={() => setUpdateData({
                                        id,
                                        title: title
                                    })}
                                    >{title}</div>
                                }
                                <input
                                    type="checkbox"
                                    name={'check-' + id}
                                    checked={isCompleted}
                                    onChange={() => updateTodo({
                                        id,
                                        isCompleted: !isCompleted
                                    })}
                                />
                            </li>
                        )}
                    </ul>
                    <div>
                        <button
                            className={cn({active: active && completed})}
                            onClick={() => setFilter({
                                active: true,
                                completed: true
                            })}
                        ><T>All</T></button>
                        <button
                            className={cn({active: active && !completed})}
                            onClick={() => setFilter({active: true})}
                        ><T>Active</T></button>
                        <button
                            className={cn({active: !active && completed})}
                            onClick={() => setFilter({completed: true})}
                        ><T>Completed</T></button>
                    </div>
                </section>
            </div>
        )
    }
}
