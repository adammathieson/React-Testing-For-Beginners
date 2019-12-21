import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Counter from './Counter'

test('<Counter />', () => {
    const { debug, getByTestId } = render(<Counter />)
    debug()
    // Assert that the counter-button is a button
    expect(getByTestId('counter-button').tagName).toBe('BUTTON')
    // Asset that counter-button starts at 0
    expect(getByTestId('counter-button').textContent).toBe('0')
})