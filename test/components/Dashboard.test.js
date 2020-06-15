import React from 'react'
import {shallow} from 'enzyme'
import Dashboard from '../../src//components/Dashboard'
import toJSON from 'enzyme-to-json'

test('should display the dashboard component', () => {
    const wrapper = shallow(<Dashboard />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})