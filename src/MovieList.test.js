import React from 'react'
import { render, cleanup, waitForElement } from 'react-testing-library'
import { MemoryRouter } from 'react-router-dom'

import MoviesList from './MoviesList'

global.fetch = require('jest-fetch-mock')

afterEach(() => {
    cleanup()
    console.error.mockClear()
})

// Spy on the console.error
console.error = jest.fn()

const movies = {
    results: [
        { 
            id: 'hi',
            title: 'Level up rules',
            poster_path: "adfjkdlas.jpg",
        },
        { 
            id: 'hiz',
            title: 'Level up rules',
            poster_path: "adfjkdlas.jpg",
        },
        { 
            id: 'hizza',
            title: 'Level up rules',
            poster_path: "adfjkdlas.jpg",
        },
        { 
            id: 'hizzy',
            title: 'Level up rules',
            poster_path: "adfjkdlas.jpg",
        },
    ],
}

const movie = movies.results[0]

test('<MoviesList />', async () => {

    fetch.mockResponseOnce(JSON.stringify(movies))

    const { getByTestId, queryByTestId, getAllByTestId } = render(
        <MemoryRouter>
            <MoviesList />
        </MemoryRouter>
    )
    expect(getByTestId('loading')).toBeTruthy()
    await waitForElement(() => getByTestId('movie-link'))
    expect(queryByTestId('loading')).toBeFalsy()
    expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${movie.id}`)
    expect(getAllByTestId('movie-link').length).toBe(movies.results.length)
    
    // debug()
})