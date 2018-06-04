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
          //      <Button large></Button>  <Button large></Button>  <Button large></Button>
                <Text large> Below are your results: </Text>
                </Button>
          <Button large> </Button>  <Button large > </Button>  <Button large> </Button>  <Button large > </Button>
          <Button large > </Button>
          <Button large > </Button>
          <Button large > </Button>
          <Button large > </Button>

          <Button large > </Button><Button large > </Button>

           <Button large block success onPress={Actions.checklist}>
            <Text>Compose message</Text>s
          </Button>
        </Content>
      </Container>

    );
  }
}
