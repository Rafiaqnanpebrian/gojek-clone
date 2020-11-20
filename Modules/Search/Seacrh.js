/* eslint-disable prettier/prettier */

import { Image, TextInput, View } from 'react-native';
import React, { Component } from 'react';

export class Seacrh extends Component {
    render() {
        return (
         <View style={{ flexDirection: "row" , marginHorizontal: 17,paddingTop:15  }}>
          <View style={{ position: "relative", flex:1 }}>
            <TextInput placeholder="What do you to eat" style={{ fontSize: 14, borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, paddingRight: 20, paddingLeft: 60 }}></TextInput>
            <Image source={require('../../assets/icon/search.png')} style={{ position: "absolute", top: 5, left: 12 }}/>
          </View>
          <View style={{ alignContent: "center", justifyContent: "center", width: 35, marginLeft: 10 }}>
            <Image source={require('../../assets/icon/promo.png')}/>
          </View>
        </View>
        )
    }
}

export default Seacrh;
