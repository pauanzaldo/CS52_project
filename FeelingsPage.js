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

export default class HeaderIconExample extends Component {
  render() {
    return (
      <Container>
                <Content padder>
                <Button large block transparent dark>
                <Text large> How are you feeling today? </Text>
                </Button>
          <Button > </Button>

           <Button large block info onPress={Actions.checklist}>
            <Text>Happy</Text>
                     <ListItem avatar>
                <Thumbnail source={{ uri: 'https://icon-icons.com/icons2/510/PNG/512/happy_icon-icons.com_50377.png' }} />
            </ListItem>
          </Button>
          <Button large>
          </Button>
           <Button large block info onPress={Actions.checklist}>
            <Text>Anxious</Text>
                     <ListItem avatar>
                <Thumbnail source={{ uri: 'https://static.thenounproject.com/png/116790-200.png' }} />
            </ListItem>
          </Button>
                    <Button large>
          </Button>
           <Button large block info onPress={Actions.checklist}>
            <Text>Sad</Text>
                     <ListItem avatar>
                <Thumbnail source={{ uri: 'https://cdn2.iconfinder.com/data/icons/picons-essentials/71/smiley_sad-512.png' }} />
            </ListItem>
          </Button>
            <Button large>  </Button>
           <Button large block info onPress={Actions.checklist}>
            <Text>So So</Text>
                     <ListItem avatar>
                <Thumbnail source={{ uri:'https://cdn2.iconfinder.com/data/icons/rounded-white-emoticon/139/Meh-RoundedWhite_emoticon-512.png' }} />
            </ListItem>
          </Button>
        </Content>
      </Container>

    );
  }
}
