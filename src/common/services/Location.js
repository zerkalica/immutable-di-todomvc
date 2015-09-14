import {Class, Assign, Getter} from 'immutable-di/define'
import Location from 'modern-router/Location'
import Router from 'todomvc/common/services/Router'

@Class({
    router: Router,
    pushState: ['config', 'pushState'],
    assignPage: Assign(['route']),
    getRoute: Getter(['route'])
})
export default class AppLocation extends Location {
    constructor({router, pushState, assignPage, getRoute}) {
        super({router, pushState})
        this._assignPage = assignPage
        this._getRoute = getRoute
    }

    _select(page, query) {
        this._assignPage({
            page,
            query
        })
    }

    merge(page, query) {
        const old = this._getRoute()
        if (typeof page !== 'string') {
            query = page
            page = old.page
        }

        this.update(page, {...old.query, ...query || {}})
    }
}
