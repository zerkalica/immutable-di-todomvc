import {Factory} from 'immutable-di/define'

function Fetch({fixtures}) {
    return function fetch(url) {
        return Promise.resolve(fixtures[url])
    }
}

export default Factory({
    fixtures: ['fixtures']
})(Fetch)
