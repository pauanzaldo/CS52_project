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
                <Text large> How are you feeling today? </Text>
                </Button>
          <Button > </Button>

           <Button large block success onPress={this.clickEmo1}>
            <Text>Happy</Text>
                     <ListItem avatar>
                <Thumbnail source={{ uri: 'https://icon-icons.com/icons2/510/PNG/512/happy_icon-icons.com_50377.png' }} />
            </ListItem>
          </Button>
          <Button large>
          </Button>
           <Button large block danger onPress={this.clickEmo2}>
            <Text>Anxious</Text>
                     <ListItem avatar>
                <Thumbnail source={{ uri: 'https://static.thenounproject.com/png/116790-200.png' }} />
            </ListItem>
          </Button>
                    <Button large>
          </Button>
           <Button large block info onPress={this.clickEmo3}>
            <Text>Sad</Text>
                     <ListItem avatar>
                <Thumbnail source={{ uri: 'https://cdn2.iconfinder.com/data/icons/picons-essentials/71/smiley_sad-512.png' }} />
            </ListItem>
          </Button>
            <Button large>  </Button>
           <Button large block warning onPress={this.clickEmo4}>
            <Text>So So</Text>
                     <ListItem avatar>
                <Thumbnail source={{ uri:'https://cdn2.iconfinder.com/data/icons/rounded-white-emoticon/139/Meh-RoundedWhite_emoticon-512.png' }} />
            </ListItem>
          </Button>
          <Button large block transparent style={{bottom:8}}>
                <Text  large onPress={Actions.checklist}> Next </Text>
          </Button>
        </Content>
      </Container>

    );
  }
}
