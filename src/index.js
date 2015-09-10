import 'app/All.styl'
import __debug from 'debug'
import React from 'react'
import Container from 'immutable-di'
import NativeCursor from 'immutable-di/cursors/native'

import InitCounter from 'app/actions/counter/InitCounter'
import App from 'app/components/App'
import state from 'app/state.json'

if (global.BROWSER && global.DEBUG) {
    __debug.enable(global.DEBUG)
}

const debug = __debug('app:debug:index')

const container = new Container(new NativeCursor(state))
const el = document.querySelector('body')
container.once(App.stateMap, () =>
    React.render(<App container={container} />, el)
)

const initCounter = container.get(InitCounter)
initCounter(1)
debug('app started')
