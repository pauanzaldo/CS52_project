import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, Button } from 'react-native';
import { Constants } from 'expo';

import { Card } from 'react-native-elements'; // Version can be specified in package.json
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export default class SixteenTab extends Component {

    constructor(props) {
        super(props);
        this.itemsRef = this.getRef();//.child('resources');
        this.state = { items: null };

    }
    componentDidMount() {
        this.listenForItems(this.itemsRef);
    }

    componentWillMount() {
        this.setState({

            items: []
        });
    }

    getRef() {
        return firebase.database().ref('/resources');
    }

    listenForItems(resourcesRef) {
        resourcesRef.on('value', (snap) => {
            var resources = [];
            snap.forEach((child) => {
                resources.push({
                    name: child.val().name,
                    location: child.val().location,
                    description: child.val().description,
                    lat: child.val().lat,
                    long: child.val().long,
                    key: child.key
                });
            });
            this.setState({
                items: resources
            });
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    {
                        this.state.items.map((item, index) => {
                            return (
                                <TouchableOpacity key={index}>
                                    <Card title="" >
                                        <View style={{ justifyContent: "space-between", flexDirection: "row", borderBottomWidth: 1 }}>
                                            <Text style={{}}>{item.name}</Text>
                                            <Text>{item.location}</Text>
                                        </View>
                                        <Text style={{ marginBottom: 10 }}>
                                            {item.description}
                                        </Text>
                                        <Button
                                            icon={{ name: 'code' }}
                                            backgroundColor='#03A9F4'
                                            fontFamily='Lato'
                                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                            title='VIEW NOW'
                                            onPress={Actions.maps} />
                                    </Card>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
});
