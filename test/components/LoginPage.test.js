import React from 'react'
import {LoginPage} from '../../src/components/LoginPage'
import {shallow} from 'enzyme'

test('should add snapshot test for login page', () => {
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot()
})