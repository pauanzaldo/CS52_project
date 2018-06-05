import React, {Component} from 'react';
import {View, ImageBackground, TouchableOpacity, TouchableHighlight, Image} from 'react-native';
import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
} from 'native-base';

export default class Splash extends Component {
  render(){
    return (
        <View>
          <View>
            <Image source={require('./mango_help_logo.png')} style={styles.img_center}/>
          </View>
        </View>
    );
  }
}

const styles = {
  /*wrapper: {
    backgroundColor: '#f39c12',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'white',
    fontWeight: '200'
  },
  titleWrapper: {
    justifyContent: 'center',
    //flex: 1
  },*/
  img_center: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50
  }
}
