import React, { Component } from 'react';

export class MovieForm extends Component {
    render() {
        return (
            <div>
                <form data-testid="movie-form">
                    <input type="text" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MovieForm;
