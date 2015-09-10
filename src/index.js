import 'app/All.styl'

import __debug from 'debug'
import React from 'react'
import Container from 'immutable-di'
import NativeCursor from 'immutable-di/cursors/native'
import App from 'todomvc/app/components/App'
import getConfig from 'todomvc/getConfig'

const debug = __debug('app:debug:index')

if (global.BROWSER && global.DEBUG) {
    __debug.enable(global.DEBUG)
}

const config = getConfig({
    location: window.location,
    referrer: document.referrer,
    headers: {}
})

const container = new Container(new NativeCursor(config))
const el = document.querySelector('body')

React.render(<App container={container} />, el)
debug('app started')
