/* eslint-env mocha */
import React from 'react'

import {expect, createRenderer} from 'todomvc/testHelpers'
import Layout from 'todomvc/app/components/Layout'
import App from 'todomvc/app/components/App'


describe('App', () => {
    it.skip('should rendered', () => {
        expect(createRenderer(<App/>, 1), 'to have rendered', <Layout/>)
    })
})
