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
} from 'native-base';
import { Left, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

class CheckListItem extends Component {

  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  onPress = () => {
    const currStatus = this.state.checked;
    this.setState({checked: !currStatus});
  }

  render() {
    const { text } = this.props;
    return (
      <ListItem>
        <CheckBox checked={this.state.checked} onPress={this.onPress} />
        <Body>
          <Text style={{fontSize: 20}}>{ text }</Text>
        </Body>
      </ListItem>
    );
  }
}


export default class CheckListPage extends Component {
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
          <CheckListItem text={"Nausea"} />
          <CheckListItem text={"Loss of Appetite"} />
          <CheckListItem text={"Sleeplessness"} />
          <CheckListItem text={"Rashes/Itchiness"} />
          <CheckListItem text={"Stomach Pain/Upset"} />
          <CheckListItem text={"Headache"} />

          <Button large block transparent> </Button>
          <Button large block transparent> </Button>
          <Button large block transparent> </Button>
          <Button block transparent> </Button>

          <Button large block transparent style={{bottom:8}}>
                <Text  large onPress={Actions.search}> Next </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
