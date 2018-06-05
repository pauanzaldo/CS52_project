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
  View, Picker,
} from 'native-base';
import { Left, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Homescreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <Body>
          <Button large transparent> </Button>
          <Button large transparent> </Button>
          <Button large transparent> </Button>
          <Button large transparent> </Button>

          <Button large info onPress={Actions.login}> <Text large> Click to Start Mango Help! </Text></Button>
          flexDirection: "row", justifyContent: "center"
          </Body>
          <Button large transparent> </Button>
          <Button large transparent> </Button>
          <Button large transparent> </Button>
          <Button large transparent> </Button>
          <Form style={{alignItems:'center'}}>
            <Picker
              mode="dropdown"
              iosHeader="Language"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{width: undefined}}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Spanish" value="key0" />
              <Picker.Item label="English" value="key1" />
              <Picker.Item label="Chinese" value="key2" />
              <Picker.Item label="Swahili" value="key3" />
              <Picker.Item label="Hindi" value="key4" />
            </Picker>
            </Form>
        </Content>
      </Container>
    );
  }
}
