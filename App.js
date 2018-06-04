import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet, Text, View } from 'react-native';
import {
  Container,} from 'native-base';

import Homescreen from './index';
import SearchBarPage from './SearchBarPage';
import CheckListPage from './CheckListPage';
import FeelingsPage from './FeelingsPage';
import IntroductionPage from './IntroductionPage';
import ResourcesPage from './ResourcesPage';
import InsurancePage from './InsurancePage';
import MessageComposition from '/MessageComposition';
//import Splash from './Splash';
import firebase from 'firebase'

export default class App extends Component {
  componentWillMount() {
      // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCfCp3cm6zybGguY0XxAYbGg6tCqoe11uA",
      authDomain: "mango-help-1.firebaseapp.com",
      databaseURL: "https://mango-help-1.firebaseio.com",
      projectId: "mango-help-1",
      storageBucket: "mango-help-1.appspot.com",
      messagingSenderId: "259234551594"
  };
  firebase.initializeApp(config);

  // firebase.database().ref('users/001').set(
  //   {
  //   name: 'Pau A',
  //   age: 18
  //   }
  // ).then(() => {
  //   console.log('INSERTED !');
  // }).catch((error) => {
  //   console.log('Error');
  // });
}

  render() {
    return (
      <Container>

      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle}>
        <Scene key="root">
          <Scene key="home" component={Homescreen} title="Mango Help      " initial={true}/>
          <Scene key="checklist" component={CheckListPage} title="Mango Help    "/>
          <Scene key="search" component={SearchBarPage} title="Mango Help   " />
          <Scene key="feelings" component={FeelingsPage} title="Mango Help  " />
          <Scene key="intro" component={IntroductionPage} title="Mango Help " />
          <Scene key="resources" component={ResourcesPage} title="Mango Help     " />
          <Scene key="insurance" component={InsurancePage} title="Mango Help      " />
          <Scene key="message" component={MessageComposition} title="Mango Help         " />
        </Scene>
      </Router>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
      backgroundColor:'#EF820D'
  },
  navBarTitle:{
      color:'#FFFFFF'
  },
});
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
