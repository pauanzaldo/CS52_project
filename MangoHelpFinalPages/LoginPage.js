import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Body, } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {View} from 'react-native';

export default class FormExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Body>
          <Form>
            <Item>
              <Input large placeholder="Username" />
            </Item>
            <Item last>
              <Input large placeholder="Password" />
            </Item>
            <Button large info onPress={Actions.intro} style={{alignItems:'center'}}> <Text large> Sign in </Text></Button>
            flexDirection: "row", justifyContent: "center"
          </Form>
          </Body>
        </Content>
      </Container>
    );
  }
}
