import React, { Component } from 'react';
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
  Content,
  ListItem,
  CheckBox,
  View,
} from 'native-base';
import { Left, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Homescreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Body>
          <Button large transparent> </Button>
          <Button large transparent> </Button>
          <Button large transparent> </Button>
          <Button large transparent> </Button>

          <Button large info onPress={Actions.intro}> <Text large> Click to Start Mango Help! </Text></Button>
          flexDirection: "row", justifyContent: "center"
          </Body>
        </Content>
      </Container>
    );
  }
}
