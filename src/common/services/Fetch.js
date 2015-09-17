import {Factory} from 'immutable-di/define'

function delayed(delay) {
    return new Promise(resolve => setTimeout(resolve, delay))
}

function Fetch({fixtures}) {
    return function fetch(url) {
        return delayed(700).then(() => fixtures[url])
    }
}

export default Factory({
    fixtures: ['fixtures']
})(Fetch)
