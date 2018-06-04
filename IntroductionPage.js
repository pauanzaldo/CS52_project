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
import { AsyncStorage} from 'react-native';
import { Left, Right, Icon,} from 'native-base';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export default class HeaderIconExample extends Component {
  constructor(props) {
    super(props);
    this.clickMent = this.clickMent.bind(this);
    this.clickPhys = this.clickPhys.bind(this);
    this.clickSexual = this.clickSexual.bind(this);
    this.clickOth = this.clickOth.bind(this);
  }

  clickMent() {
    console.log('Click happened');
    firebase.database().ref('data').set(
      {
        healthtype: 'Mental Health'
      }
    )
  }
  clickPhys() {
    console.log('Click happened');
    firebase.database().ref('data').set(
      {
        healthtype: 'Physical Health'
      }
    )
  }
  clickSexual() {
    console.log('Click happened');
    firebase.database().ref('data').set(
      {
        healthtype: 'Sexual Health'
      }
    )
  }
  clickOth() {
    console.log('Click happened');
    firebase.database().ref('data').set(
      {
        healthtype: 'Miscellaneous/Other Health'
      }
    )
  }

  render() {
    return (
      <Container>
                <Content padder>
                <Button large block transparent dark>
                <Text large> What are you looking for today? </Text>
                </Button>
          <Button > </Button>

           <Button large block info onPress={this.clickMent}>
            <Text >Mental Health</Text>
                     <ListItem avatar>
                <Thumbnail source={{ uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1211643-200.png' }} />
            </ListItem>
          </Button>
          <Button large>
          </Button>
           <Button large block info onPress={this.clickPhys}>
            <Text >Physical Health</Text>
                     <ListItem avatar>
                <Thumbnail source={{ uri: 'http://servisourcetraining.ie/wp-content/uploads/physicalactivity.png' }} />
            </ListItem>
          </Button>
                    <Button large>
          </Button>
           <Button large block info onPress={this.clickSexual}>
            <Text >Sexual Health</Text>
                     <ListItem avatar>
                <Thumbnail source={{ uri: 'https://cdn3.iconfinder.com/data/icons/glypho-signs/64/male-female-sign-512.png' }} />
            </ListItem>
          </Button>
            <Button large>  </Button>
           <Button large block info  onPress={this.clickOth}>
            <Text>Other</Text>
                     <ListItem avatar>
                <Thumbnail source={{ uri:'https://d30y9cdsu7xlg0.cloudfront.net/png/28217-200.png' }} />
            </ListItem>
          </Button>
          <Button large block transparent style={{bottom:8}}>
                <Text  large onPress={Actions.feelings}> Next </Text>
          </Button>
        </Content>
      </Container>

    );
  }
}
