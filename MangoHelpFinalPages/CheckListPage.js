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
import firebase from 'firebase';

class CheckListItem extends Component {

  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.click1 = this.click1.bind(this);
    this.click2 = this.click2.bind(this);
    this.click3 = this.click3.bind(this);
    this.click4 = this.click4.bind(this);
    this.click5 = this.click5.bind(this);
    this.click6 = this.click6.bind(this);
  }

  click1() {
    firebase.database().ref('data').update(
      { moreEmo: 'Nausea' })
  }
  click2() {
    firebase.database().ref('data').update(
      { moreEmo1: 'Loss of Appetite' })
  }
  click3() {
    firebase.database().ref('data').update(
      { moreEmo2: 'Sleeplessness' })
  }
  click4() {
    firebase.database().ref('data').update(
      { moreEmo3: 'Rashes/Itchiness' })
  }
  click5() {
    firebase.database().ref('data').update(
      { moreEmo4: 'Stomach Pain/Upset' })
  }
  click6() {
    firebase.database().ref('data').update(
      { moreEmo5: 'Headache' })
  }

  onPress = () => {
    const { text } = this.props;
    const currStatus = this.state.checked;
    this.setState({checked: !currStatus});
    if (text == "Loss of Appetite") {
      this.click2();
    }
    if (text == "Nausea") {
      this.click1();
    }
    if (text == "Sleeplessness") {
      this.click3();
    }
    if (text == "Rashes/Itchiness") {
      this.click4();
    }
    if (text == "Stomach Pain/Upset") {
      this.click5();
    }
    if (text == "Headache") {
      this.click6();
    }
  }

  render() {
    const { text } = this.props;
    return (
      <ListItem>
        <CheckBox checked={this.state.checked} onPress={this.onPress}/>
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
                <Text  large onPress={Actions.insurance}> Next </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
