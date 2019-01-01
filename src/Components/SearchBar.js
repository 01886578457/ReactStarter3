import React from 'react';

export default class SearchBar extends React.Component {
    state = { value: '' }
    onInputChange = (event) => {
        this.setState({ value: event.target.value })
    }
    onInputSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.value);
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onInputSubmit}>
                    <div className="field">
                        <label>Video search</label>
                        <input type="text" value={this.state.value} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}