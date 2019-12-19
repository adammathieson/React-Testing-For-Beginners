/* eslint-disable eol-last */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable semi */
import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Counter from './Counter'

test('<Counter />', () => {
    const wrapper = render(<Counter />)
    wrapper.debug()
    expect(wrapper.getByText('0').tagName).toBe('BUTTON')
})