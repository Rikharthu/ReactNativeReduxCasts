import React from 'react';
import { Text, View } from 'react-native';


// make a component
const Header = () => {
    const { textStyle, viewStyle } = styles;
    // is equivalent to const textStyle=styles.textStyle
    
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums!</Text>
        </View>
    )
};

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000', // shadows do not work on android
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
        // iphone would need an additional paddingTop: 15
    }
};

// make this component available to other parts of the app (export it)
export default Header;
