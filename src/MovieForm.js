import React, { Component } from 'react';

export class MovieForm extends Component {
    state = ''

    render() {
        const { submitForm } = this.props
        const { text } = this.state
        return (
            <div>
                <form 
                    data-testid="movie-form" 
                    onSubmit={() => submitForm({
                        text,
                    })
                    }
                >
                    <input type="text" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MovieForm;
