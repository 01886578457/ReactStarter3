import React from 'react';

export default class SearchBar extends React.Component {
    state = { value: '' }
    onInputChange = (event) => {
        this.setState({ value: event.target.value })
    }
    onInputSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit="onInputSubmit">
                    <div className="field">
                        <label>Video search</label>
                        <input type="text" value={this.state.value} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}