import React from 'react'
import {shallow} from 'enzyme'
import HelpPage from '../../src/components/HelpPage'
import toJSON from 'enzyme-to-json'

test('should display the error page not found', () => {
    const wrapper = shallow(<HelpPage />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})