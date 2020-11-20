/* eslint-disable prettier/prettier */

import {Image, Text, View} from 'react-native';
import React, {Component} from 'react';

const home = (props) =>{
  return(
    <View style={{flex: 1, alignItems: 'center', alignContent: 'center'}}>
    <Image source={require('../../assets/icon/home.png')} />
    <Text style={{fontSize: 10, marginTop: 5, color: '#43A84A'}}>
      {props.tittle}
    </Text>
  </View>
  )
}

export class NavigationBar extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', backgroundColor: '#ffffff',paddingVertical: 10,}}>
        <View style={{flex: 1, alignItems: 'center', alignContent: 'center'}}>
          <Image source={require('../../assets/icon/home.png')} />
          <Text style={{fontSize: 10, marginTop: 5, color: '#43A84A'}}>
            Home
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', alignContent: 'center'}}>
          <Image source={require('../../assets/icon/order.png')} />
          <Text style={{fontSize: 10, marginTop: 5, color: '#545454'}}>
            Order
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', alignContent: 'center'}}>
          <Image source={require('../../assets/icon/help.png')} />
          <Text style={{fontSize: 10, marginTop: 5, color: '#545454'}}>
            Help
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', alignContent: 'center'}}>
          <Image source={require('../../assets/icon/inbox.png')} />
          <Text style={{fontSize: 10, marginTop: 5, color: '#545454'}}>
            Inbox
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', alignContent: 'center'}}>
          <Image source={require('../../assets/icon/account.png')} />
          <Text style={{fontSize: 10, marginTop: 5, color: '#545454'}}>
            Account
          </Text>
        </View>
      </View>
    );
  }
}

export default NavigationBar;
