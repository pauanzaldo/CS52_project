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
import firebase from 'firebase';

export default class HeaderIconExample extends Component {
  constructor(props) {
    super(props);
    this.clickIns1 = this.clickIns1.bind(this);
    this.clickIns2 = this.clickIns2.bind(this);
    this.clickIns3 = this.clickIns3.bind(this);
  }
  clickIns1() {
    console.log('Click happened');
    firebase.database().ref('data').update(
      {
        insurance: 'Yes'
      }
    )
  }
  clickIns2() {
    console.log('Click happened');
    firebase.database().ref('data').update(
      {
        insurance: 'No'
      }
    )
  }
  clickIns3() {
    console.log('Click happened');
    firebase.database().ref('data').update(
      {
        insurance: 'Do not know'
      }
    )
  }


  render() {
    return (
      <Container>
          <Content padder>
                <Button large block transparent dark>
                  <Text large> Do you have insurance? </Text>
                </Button>

          <Button > </Button>

           <Button large block success onPress={this.clickIns1}>
            <Text>Yes</Text>
                     <ListItem avatar>
                <Thumbnail source={{ uri: 'https://icon-icons.com/icons2/510/PNG/512/happy_icon-icons.com_50377.png' }} />
            </ListItem>
          </Button>

          <Button large>
          </Button>
          <Button large block danger onPress={this.clickIns2}>
            <Text>No</Text>
            <ListItem avatar>
                <Thumbnail source={{ uri: 'https://static.thenounproject.com/png/116790-200.png' }} />
            </ListItem>
            </Button>
          <Button large>
          </Button>

          <Button large block warning onPress={this.clickIns3}>
            <Text>I do not know</Text>
               <ListItem avatar>
                   <Thumbnail source={{ uri: 'https://cdn2.iconfinder.com/data/icons/picons-essentials/71/smiley_sad-512.png' }} />
                </ListItem>
          </Button>
       <Button large>
       </Button>
       <Button large block transparent style={{bottom:8}}>
             <Text  large onPress={Actions.resources}> Next </Text>
       </Button>
        </Content>
      </Container>

    );
  }
}
