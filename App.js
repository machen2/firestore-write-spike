/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                           placeholder="orderID"/>
                <TextInput style={styles.textInput}
                           placeholder="token"/>
                <TouchableOpacity>
                    <Text>Store in FB</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        textInput: {
            paddingTop: 1,
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#00dd33',
            minWidth: 100,
        }
    }
);

