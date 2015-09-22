import Location from 'todomvc/common/services/Location'
import React from 'react'
import statefull from 'immutable-di-react/statefull'
import UserInfoPageFacet from 'todomvc/todo/facets/UserInfoPageFacet'
import UserInfo from 'todomvc/user/components/UserInfo'

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

        const {user, todoLists} = userInfo

        return (
            <div>
                <UserInfo user={user}/>
                <section>
                    <h2>Todos</h2>
                    <ul>
                        {todoLists.map(({id}) =>
                            <li>
                                <button
                                    onClick={() =>
                                        location.update('TodosPage', {
                                            userId: user.id,
                                            listId: id
                                        })
                                    }
                                >Todos № {id}</button>
                            </li>
                        )}
                    </ul>
                </section>
            </div>
        )
    }
}
