import React from 'react'

const {
    node
} = React.PropTypes

export default class Layout extends React.Component {
    static propTypes = {
        children: node.isRequired
    }

    render() {
        const {children} = this.props
        return (
            <div className="app-layout">
                {children}
            </div>
        )
    }
}
