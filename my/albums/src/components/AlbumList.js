/*eslint linebreak-style: ["error", "windows"]*/
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    // implement component state
    state = {
        albums: []
    }; // initial state

    // lifecycle method that is called before rendering and mounting occurs
    componentWillMount() {
        console.log('componentWillMount in AlbumList');
        // fetch data from api asynchronously
        axios
            .get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}));
    }

    // called when this component is about to render on the device must return a
    // react component
    render() {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }

    renderAlbums() {
        return this
            .state
            .albums
            .map(album => 
                <AlbumDetail key={album.title} album={album} />
            );
    }

}

export default AlbumList;
