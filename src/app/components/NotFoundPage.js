import React from 'react'

const {
    string
} = React.PropTypes

export default class NotFoundPage extends React.Component {
    static propTypes = {
        page: string.isRequired
    }

    render() {
        const {page} = this.props

        return (
            <div className="not-found-page">
                <h2 className="not-found-page__header">Page {page} not found</h2>
            </div>
        )
    }
}
