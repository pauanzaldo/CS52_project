import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, Button } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json
import { Actions } from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity>
            <Card title="" >
            <View style={{justifyContent : "space-between", flexDirection: "row", borderBottomWidth: 1}}>
            <Text style={{}}>TEEN VAN</Text>
            <Text> 1.2 miles</Text>
            </View>
            <Text style={{marginBottom: 10}}>
          Stanford Children's Health provides expert care for our community's high risk kids and young adults aged 10 to 25.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            fontFamily='Lato'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW'
            onPress = {() => {console.log('varin')}}/>
        </Card>
          </TouchableOpacity>

          <TouchableOpacity>
            <Card title="" >
            <View style={{justifyContent : "space-between", flexDirection: "row", borderBottomWidth: 1}}>
            <Text style={{}}>TEEN VAN</Text>
            <Text> 1.2 miles</Text>
            </View>
            <Text style={{marginBottom: 10}}>
          Stanford Children's Health provides expert care for our community's high risk kids and young adults aged 10 to 25.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            fontFamily='Lato'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW'
            onPress = {() => {console.log('varin')}}/>
        </Card>
          </TouchableOpacity>

          <TouchableOpacity>
            <Card title="" >
            <View style={{justifyContent : "space-between", flexDirection: "row", borderBottomWidth: 1}}>
            <Text style={{}}>TEEN VAN</Text>
            <Text> 1.2 miles</Text>
            </View>
            <Text style={{marginBottom: 10}}>
          Stanford Children's Health provides expert care for our community's high risk kids and young adults aged 10 to 25.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            fontFamily='Lato'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW'
            onPress = {() => {console.log('varin')}}/>
        </Card>
          </TouchableOpacity>

          <TouchableOpacity>
            <Card title="" >
            <View style={{justifyContent : "space-between", flexDirection: "row", borderBottomWidth: 1}}>
            <Text style={{}}>TEEN VAN</Text>
            <Text> 1.2 miles</Text>
            </View>
            <Text style={{marginBottom: 10}}>
          Stanford Children's Health provides expert care for our community's high risk kids and young adults aged 10 to 25.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            fontFamily='Lato'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW'
            onPress = {() => {console.log('varin')}}/>
        </Card>
          </TouchableOpacity>

          <TouchableOpacity>
            <Card title="" >
            <View style={{justifyContent : "space-between", flexDirection: "row", borderBottomWidth: 1}}>
            <Text style={{}}>TEEN VAN</Text>
            <Text> 1.2 miles</Text>
            </View>
            <Text style={{marginBottom: 10}}>
          Stanford Children's Health provides expert care for our community's high risk kids and young adults aged 10 to 25.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            fontFamily='Lato'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW'
            onPress = {() => {console.log('varin')}}/>
        </Card>
          </TouchableOpacity>

          <TouchableOpacity>
            <Card title="" >
            <View style={{justifyContent : "space-between", flexDirection: "row", borderBottomWidth: 1}}>
            <Text style={{}}>TEEN VAN</Text>
            <Text> 1.2 miles</Text>
            </View>
            <Text style={{marginBottom: 10}}>
          Stanford Children's Health provides expert care for our community's high risk kids and young adults aged 10 to 25.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            fontFamily='Lato'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW'
            onPress = {() => {console.log('varin')}}/>
        </Card>
          </TouchableOpacity>

          <TouchableOpacity>
            <Card title="" >
            <View style={{justifyContent : "space-between", flexDirection: "row", borderBottomWidth: 1}}>
            <Text style={{}}>TEEN VAN</Text>
            <Text> 1.2 miles</Text>
            </View>
            <Text style={{marginBottom: 10}}>
          Stanford Children's Health provides expert care for our community's high risk kids and young adults aged 10 to 25.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            fontFamily='Lato'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW'
            onPress = {() => {console.log('varin')}}/>
        </Card>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

    //alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
