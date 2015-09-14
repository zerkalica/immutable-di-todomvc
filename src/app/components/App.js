import Layout from 'todomvc/app/components/Layout'
import PageMap from 'todomvc/app/components/PageMap'
import React from 'react'
import root from 'immutable-di/react/root'
import statefull from 'immutable-di/react/statefull'
import Translator from 'todomvc/common/services/Translator'

const NotFoundPage = PageMap.NotFoundPage

const {
    string,
    func
} = React.PropTypes

@root
@statefull({
    page: ['route', 'page'],
    t: Translator
})
export default class App extends React.Component {
    static propTypes = {
        t: func.isRequired,
        page: string.isRequired
    }

    static childContextTypes = {
        t: func
    }

    getChildContext() {
        return {
            t: this.props.t
        }
    }

    render() {
        const Widget = PageMap[this.props.page]

        return (
            <Layout>
                {Widget
                    ? <Widget />
                    : <NotFoundPage page={this.props.page} />
                }
            </Layout>
        )
    }
}
