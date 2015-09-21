import React from 'react'
import statefull from 'immutable-di-react/statefull'
import UserInfo from 'todomvc/user/components/UserInfo'
import TodoUserFacet from 'todomvc/todo/facets/TodoUserFacet'

@statefull({
    todoFacet: TodoUserFacet
})
export default class TodosPage extends React.Component {
    render() {
        const {user, todos} = this.props.todoFacet
        return (
            <div>
                <UserInfo user={user}/>
                <section>
                    <h1>Todos</h1>
                    {todos.map(({title, checked, id}) =>
                        <li>
                            {title}
                            <input
                                type="checkbox"
                                name={id}
                                checked={checked}
                            />
                        </li>
                    )}
                </section>
            </div>
        )
    }
}
