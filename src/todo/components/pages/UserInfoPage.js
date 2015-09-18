import React from 'react'
import statefull from 'immutable-di-react/statefull'
import Location from 'todomvc/common/services/Location'
import UserInfoPageFacet from 'todomvc/todo/facets/UserInfoPageFacet'

@statefull({
    userInfo: UserInfoPageFacet,
    location: Location
})
export default class UserInfoPage extends React.Component {
    render() {
        const {
            userInfo,
            location
        } = this.props

        const {user, userTodoLists} = userInfo

        return (
            <div>
                <section>
                    <h1>UserInfoPage</h1>
                    <ul>
                        <li>Name: {user.name}</li>
                        <li>Email: {user.email}</li>
                    </ul>
                </section>
                <section>
                    <h2>Todos</h2>
                    <ul>
                        {userTodoLists.map(({id}) =>
                            <li>
                                <button
                                    onClick={() => location.select('TodosPage', {id})}
                                >Todos № {id}</button>
                            </li>
                        )}
                    </ul>
                </section>
            </div>
        )
    }
}
