import { Component } from 'react';

export class Searchbar extends Component {

    state = {
        imageName: ''
    }

    hadleChange = evt => {
        this.setState({
            imageName: evt.target.value.toLowerCase()
        })
    }

    handleSubmit = evt => {
        evt.preventDefault();

        if (this.state.imageName.trim() === '') {
            return;
        }
        this.props.onSubmit(this.state.imageName);
        this.setState({ imageName: '' });
    }

    render() {
        return (
            <header className="searchbar">
                <form className="form" onSubmit={this.handleSubmit}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
                        type="text"
                        value={this.state.imageName}
                        // autocomplete="off"
                        // autofocus
                        placeholder="Search images and photos"
                        onChange={this.hadleChange}
                    />
                </form>
            </header>
    )
  }
}
