import React, { Component } from 'react';
import { Constants } from 'expo';
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
  Item,
} from 'native-base';

import { Left, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class SearchBarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chkbox_chk: false,
    };
  }

  check() {
    var checked = this.state.chkbox_chk;
    if (checked == true) {
      this.setState({ chkbox_chk: false });
    } else this.setState({ chkbox_chk: true });
  }

  render() {
    return (
      <Container>
        <Content>
        <Body>
          <Text> </Text>
          <Text> Search any other symptoms that you are feeling </Text>
          <Text> Select the symptoms from the wordbank </Text>
          <Text> Click down when finished </Text>
          <Text> </Text>
          flexDirection='row', justifyContent='center'
        </Body>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search Symptoms, etc." />
            <Icon name="ios-search"/>
          </Item>
          <Button transparent>
            <Text>Add to My List</Text>
          </Button>
        </Header>

        <Button large block transparent> </Button>
        <Button large block transparent> </Button>
        <Button large block transparent> </Button>
        <Button large block transparent> </Button>

        <Button large>  </Button>  <Button >  </Button>
           <Button large block transparent >
              <Text large onPress={Actions.resources}> Done </Text>
        </Button>
        </Content>
      </Container>
    );
  }
}
