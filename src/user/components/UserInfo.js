import React from 'react'

export default class UserInfo extends React.Component {
    render() {
        const {user} = this.props

        return (
            <section>
                <h1>User info</h1>
                <ul>
                    <li>Name: {user.name}</li>
                    <li>Email: {user.email}</li>
                </ul>
            </section>
        )
    }
}
