import {Class} from 'immutable-di/define'
import Router from 'modern-router/Router'

@Class({
    routes: ['config', 'routes'],
    sitePrefix: ['config', 'sitePrefix']
})
export default class AppRouter extends Router {
}
