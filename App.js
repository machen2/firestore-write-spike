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
import * as firebase from "react-native-firebase";

export default class App extends Component {
    constructor() {
        super();
        // this.ref = firebase.firestore().collection('orders');
        this.state = {
            orderID: '',
            token: ''
        };
    }

    updateOrderID(value) {
        this.setState({
            orderID: value
        });
    }

    updateToken(value) {
        this.setState({
            token: value
        });
    }

    addTodo() {
        this.ref.add({
            orderID: this.state.orderID,
            token: this.state.token,
        });
        this.setState({
            orderID: '',
            token: ''
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                           placeholder="orderID"
                           value={this.state.orderID}
                           onChangeText={(text) => this.updateOrderID(text)}/>
                <TextInput style={styles.textInput}
                           placeholder="token"
                           value={this.state.token}
                           onChangeText={(text) => this.updateToken(text)}/>
                <TouchableOpacity onPress={() => this.addTodo()}/>
                    <Text style={styles.button}>Store in FB</Text>
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
        },
        button: {
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#dd0033'
        }
    }
);

