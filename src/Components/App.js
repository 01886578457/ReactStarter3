import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
    state = { videos: [] }

    onSearchSubmit = async (sData) => {
        const res = await youtube.get('/search', {
            params: {
                q: sData
            }
        });
        this.setState({ videos: res.data.items });

    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSearchSubmit} />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;