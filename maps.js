import React, { Component } from 'react';
import{StyleSheet,Text, View} from 'react-native';
import MapView from 'react-native-maps';
import {Constants} from 'expo'
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

import { Left, Right, Icon,} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class HeaderIconExample extends Component {
  render() {
    return (
    <Container>
      <View style = {styles.container}>
      <MapView style ={styles.map}
      region = {{
        latitude: 59.34,
        longitude: 18.0684,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      }}

      >
      <MapView.Marker
      coordinate = {{
        latitude: 59.34,
        longitude: 18.0684,
      }}
      title={'Clinic'}
      description = {'Hours of operation: M-F 8-5pm'}
      />
      </MapView>
      </View>
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
