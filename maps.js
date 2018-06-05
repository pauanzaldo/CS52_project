import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Constants } from 'expo'
import {
  Container,
  Content,
  Toast,
  Header,
  Button,
  Thumbnail,
  ListItem,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
} from 'native-base';
import { Left, Right, Icon, } from 'native-base';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

let lat = 37.7749;
let long = -122.4194;
export default class HeaderIconExample extends Component {
  constructor(props) {
    super(props);
    this.itemsRef = this.getRef();
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
      <Container>
        {
          this.state.items.map((item, index) => {
            <View style={styles.container}>
              <MapView style={styles.map}
                region={{
                  latitude: lat,
                  longitude: long,
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.1
                }}>

                <MapView.Marker
                  coordinate={{
                    latitude: item.lat,
                    longitude: item.long,
                  }}
                  title={item.name}
                  description={item.description} />
              </MapView>
            </View>
          })
        }

        <Content padder>
          <Button large block transparent dark>
            <Text> Below are your results: </Text>
          </Button>
          <Button large> </Button>  <Button large > </Button>  <Button large> </Button>  <Button large > </Button>
          <Button large > </Button>
          <Button large > </Button>
          <Button large > </Button>
          <Button large > </Button>

          <Button large > </Button><Button large > </Button>

          <Button large block success onPress={Actions.checklist}>
            <Text>Compose message</Text>
          </Button>
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});
