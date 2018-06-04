import React, { Component } from 'react';
import {Constants} from 'expo'
import {
  Container,
  Content,
  Toast,
  Header,
  Button,
  Text,
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
import firebase from 'firebase';

export default class HeaderIconExample extends Component {
  constructor(props) {
    super(props);
    this.clickEmo1 = this.clickEmo1.bind(this);
    this.clickEmo2 = this.clickEmo2.bind(this);
    this.clickEmo3 = this.clickEmo3.bind(this);
    this.clickEmo4 = this.clickEmo4.bind(this);
  }

  clickEmo1() {
    console.log('Click happened');
    firebase.database().ref('data').update(
      {
        feelings: 'Happy'
      }
    )
  }
  clickEmo2() {
    console.log('Click happened');
    firebase.database().ref('data').update(
      {
        feelings: 'Anxious'
      }
    )
  }
  clickEmo3() {
    console.log('Click happened');
    firebase.database().ref('data').update(
      {
        feelings: 'Sad'
      }
    )
  }
  clickEmo4() {
    console.log('Click happened');
    firebase.database().ref('data').update(
      {
        feelings: 'Okay'
      }
    )
  }

  render() {
    return (
      <Container>
        <Content padder>
                <Button large block transparent dark>
                <Text large> Would you like to compose a message and send it to this clinic? </Text>
                </Button>
          <Button > <Text large> Below is what the message will look like. You can modify it by clicking the Red Edit button</Text> </Button>



        </Content>
      </Container>

    );
  }
}
