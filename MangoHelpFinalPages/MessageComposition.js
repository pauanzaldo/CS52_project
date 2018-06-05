import React, { Component } from 'react';
import {Constants} from 'expo'
import {
  Container,
  Card,
  CardItem,
  Content,
  Toast,
  Header,
  Button,
  Thumbnail,
  ListItem,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title, View,
} from 'native-base';
import {Text, } from 'react-native';
import { Left, Right, Icon,} from 'native-base';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

//let feelings = '';
export default class HeaderIconExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feelings: "",
      healthtype: "",
      insurance: "",
      moreEmo: "",
      moreEmo1: "",
      moreEmo2: "",
      moreEmo3: "",
      moreEmo4: "",
      moreEmo5: "",
      userFeelings: {},
    };
  }

  // now, to modify state:
  componentDidMount() {
  	firebase.database().ref('data').once('value').then(snapshot => {
  		this.setState({userFeelings: snapshot.val(), feelings: snapshot.val()["feelings"], healthtype: snapshot.val()["healthtype"], insurance: snapshot.val()["insurance"],
    moreEmo: snapshot.val()["moreEmo"], moreEmo1: snapshot.val()["moreEmo1"], moreEmo3: snapshot.val()["moreEmo3"], moreEmo4: snapshot.val()["moreEmo4"],
    moreEmo5: snapshot.val()["moreEmo5"], moreEmo2: snapshot.val()["moreEmo2"]});
        		console.log(this.state.feelings);
      	});
    }

  render() {
    return (
      <Container>
        <Content padder>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Would you like to compose a message and send it to this clinic? </Text>
          <Text style={{fontSize:18, fontStyle: 'italic'}}>Below is what the message will look like. You can edit it by clicking the Red edit button. If you want to send it, click the Green send button</Text>
          <Card>
                      <CardItem header>
                        <Text style={{fontSize: 18, fontWeight:'bold'}}>Your Message</Text>
                      </CardItem>
                      <CardItem>
                        <Body>
                        <Text style={{fontSize: 18}}>The patient is interested in their {this.state.healthtype} and is currently feeling {this.state.feelings}. </Text>
                        <Text style={{fontSize: 18}}>Other symptoms that they feel include:  </Text>
                        <Text style={{fontSize: 18}}>{this.state.moreEmo} </Text>
                        <Text style={{fontSize: 18}}>{this.state.moreEmo1} </Text>
                        <Text style={{fontSize: 18}}>{this.state.moreEmo2} </Text>
                        <Text style={{fontSize: 18}}>{this.state.moreEmo3} </Text>
                        <Text style={{fontSize: 18}}>{this.state.moreEmo4} </Text>
                        <Text style={{fontSize: 18}}>{this.state.moreEmo5} </Text>
                        </Body>
                      </CardItem>
            </Card>
            <View style={{flex:1, justifyContent: 'center'}}>
            <Button block danger  style={{alignItems:'center', justifyContent: 'center'}}> <Icon name='eye'/>  <Text>Edit</Text> </Button>
            <Button block success  style={{alignItems:'center'}}> <Icon name='paper-plane'/> <Text>Send</Text> </Button>
            </View>

        </Content>
      </Container>

    );
  }
}

//FocusOnMarkers.propTypes = {


//}

/*componentWillMount(){
  let q = firebase.database().ref('resources');
  q.on('value', (snap) => {
    var finished = []
    snap.forEach((data) => {
      let result = data.val();
      result["key"] = data.key;
      finished.push(result);

    })
    this.setState({
      listingData: finished

    })*/


//  } )
//}
