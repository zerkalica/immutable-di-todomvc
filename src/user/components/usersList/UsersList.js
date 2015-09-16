import React from 'react'

export default class UsersList extends React.Component {
    render() {
        const {users, onClick} = this.props

        return (
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <button onClick={() => onClick(user.id)}>{user.name}</button>
                    </li>
                )}
            </ul>
        )
    }
}
