/* eslint-disable prettier/prettier */

import { Image, Text, View } from 'react-native';
import React, { Component } from 'react';

export class Gopay extends Component {
      static defaultProps ={
        saldo:'',
        pay:'',
        nearby:'',
        topup:'',
        more:'',
    }
    render() {
      const{saldo,pay,nearby,topup,more} = this.props;
        return (
            <View style={{ marginVertical: 20, marginHorizontal: 17  }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#2c5fb8", borderTopRightRadius: 5, borderTopLeftRadius: 5, padding: 15, }}>
            <Image source={require('../../assets/icon/gopay.png')}/>
            <Text style={{ color: '#ffffff', fontSize: 17, fontWeight: "bold" }}>{saldo}</Text>
          </View>
          <View style={{ flexDirection: "row", backgroundColor: '#2f65bd', padding: 20,borderBottomRightRadius:5,borderBottomLeftRadius:5 }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image source={require('../../assets/icon/pay.png')}/>
              <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 10, color: "#ffffff" }}>{pay}</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image source={require('../../assets/icon/nearby.png')}/>
              <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 10, color: "#ffffff" }}>{nearby}</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image source={require('../../assets/icon/topup.png')}/>
              <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 10, color: "#ffffff" }}>{topup}</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image source={require('../../assets/icon/more.png')}/>
              <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 10, color: "#ffffff" }}>{more}</Text>
            </View>
          </View>
        </View>
        )
    }
}

export default Gopay
