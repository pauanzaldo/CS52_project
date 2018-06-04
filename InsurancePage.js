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
                  <Text large> Do you have insurance? </Text>
                </Button>

          <Button > </Button>

           <Button large block success onPress={Actions.resources}>
            <Text>Yes</Text>
                     <ListItem avatar>
                <Thumbnail source={{ uri: 'https://icon-icons.com/icons2/510/PNG/512/happy_icon-icons.com_50377.png' }} />
            </ListItem>
          </Button>

          <Button large>
          </Button>
          <Button large block danger onPress={Actions.checklist}>
            <Text>No</Text>
            <ListItem avatar>
                <Thumbnail source={{ uri: 'https://static.thenounproject.com/png/116790-200.png' }} />
            </ListItem>
            </Button>
          <Button large>
          </Button>

          <Button large block warning onPress={Actions.resources}>
            <Text>I do not know</Text>
               <ListItem avatar>
                   <Thumbnail source={{ uri: 'https://cdn2.iconfinder.com/data/icons/picons-essentials/71/smiley_sad-512.png' }} />
                </ListItem>
          </Button>
       <Button large>
       </Button>
        </Content>
      </Container>

    );
  }
}
