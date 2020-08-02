import {Header} from '../../src/components/Header'
// import ReactShallowRenderer from 'react-test-renderer/shallow'
import React from 'react'
import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json'

test('should render header children length', () => {
    const wrapper = shallow(<Header />) 
    expect(wrapper.find('NavLink').length).toBe(2)
})

test('should render header correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
})




// test ('should display rendered component', () => {
//     const renderer = new ReactShallowRenderer()
//     renderer.render(<Header />)
//     expect(renderer.getRenderOutput()).toMatchSnapshot()
// })
