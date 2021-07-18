import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


export default class App extends Component {
  constructor()
  {
    super();
    this.state={
      counter:0,
    };
  }

  componentDidMount(){
    setInterval(this.incrementCounter,360);
  }

  incrementCounter=()=>{
    this.setState({counter:this.state.counter+1});
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ marginTop: 50, marginLeft: 170 }}>
        {this.state.counter}
        </Text>
        
      </View>
    );
  }
}
