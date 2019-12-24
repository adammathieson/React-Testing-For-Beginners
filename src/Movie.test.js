import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Movie from './Movie'

afterEach(cleanup)

// Spy on the console.error
console.error = jest.fn()

test('<Movie />', () => {
    render(<Movie />)
    expect(console.error).toBeCalled()
})