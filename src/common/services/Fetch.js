import {Factory} from 'immutable-di/define'

function delayed(delay) {
    return new Promise(resolve => setTimeout(resolve, delay))
}
let lastId = 100

function getId() {
    return lastId++
}

function Fetch({fixtures}) {
    return function fetch(url, options) {
        const {method, json} = options || {}
        let data = fixtures[url]
        if (method === 'POST') {
            const id = getId()
            const entity = {
                ...json,
                id
            }
            if (Array.isArray(data)) {
                data.push(entity)
            }
            data = entity
        }
        return delayed(700).then(() => data)
    }
}

export default Factory({
    fixtures: ['fixtures']
})(Fetch)
