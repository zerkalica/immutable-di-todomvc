/* eslint-env mocha */
import React from 'react'

import {expect, createRenderer} from 'todomvc/testHelpers'
import Layout from 'todomvc/app/components/Layout'

describe('Layout', () => {
    it('should rendered', () => {
        expect(createRenderer(<Layout/>), 'to have rendered', <div className="app-layout"/>)
    })
})
