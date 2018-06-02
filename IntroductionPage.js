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
    this.handleClick = this.handleClick.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  handleClick() {
    console.log('Click happened');
    firebase.database().ref('data').set(
      {
        healthtype: 'Mental Health'
      }
    )
    () => Actions.feelings
  }

  const nextPage = () => Actions.feelings


  render() {
    return (
      <Container>

                <Content padder>
                <Button large block transparent dark>
                <Text large> What are you looking for today? </Text>
                </Button>
          <Button > </Button>

           <Button large block info onPress={this.handleClick}>
            <Text >Mental Health</Text>
                     <ListItem avatar>
                <Thumbnail source={{ uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1211643-200.png' }} />
            </ListItem>
          </Button>
          <Button large>
          </Button>
           <Button large block info onPress={Actions.feelings}>
            <Text >Physical Health</Text>
                     <ListItem avatar>
                <Thumbnail source={{ uri: 'http://servisourcetraining.ie/wp-content/uploads/physicalactivity.png' }} />
            </ListItem>
          </Button>
                    <Button large>
          </Button>
           <Button large block info onPress={Actions.feelings}>
            <Text >Sexual Health</Text>
                     <ListItem avatar>
                <Thumbnail source={{ uri: 'https://cdn3.iconfinder.com/data/icons/glypho-signs/64/male-female-sign-512.png' }} />
            </ListItem>
          </Button>
            <Button large>  </Button>
           <Button large block info  onPress={Actions.feelings}>
            <Text>Other</Text>
                     <ListItem avatar>
                <Thumbnail source={{ uri:'https://d30y9cdsu7xlg0.cloudfront.net/png/28217-200.png' }} />
            </ListItem>
          </Button>
        </Content>
      </Container>

    );
  }
}
