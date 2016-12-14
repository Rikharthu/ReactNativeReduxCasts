/*eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


// no need to update => use functional component
const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <Text>{props.album}</Text>
            </CardSection>
            <CardSection>
                <Text>{props.album}</Text>
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;
