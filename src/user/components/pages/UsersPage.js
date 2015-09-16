import React from 'react'
import statefull from 'immutable-di/react/statefull'
import UsersFacet from 'todomvc/user/facets/UsersFacet'
import UsersList from 'todomvc/user/components/usersList/UsersList'
import Location from 'todomvc/common/services/Location'

const {
    string,
    arrayOf,
    shape
} = React.PropType

@statefull({
    users: UsersFacet,
    location: Location
})
export default class UsersPage extends React.Component {
    render() {
        const {users, location} = this.props

        return (
            <div>
                <h1>UsersPage</h1>
                {users.length
                    ? <UsersList users={users} onClick={id => location.update('UserInfoPage', {id})} />
                    : 'Loading ...'
                }
            </div>
        )
    }
}
