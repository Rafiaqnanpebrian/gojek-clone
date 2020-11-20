/* eslint-disable prettier/prettier */

import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

export class NewsBar extends Component {
    render() {
        return (
            <View style={{paddingTop: 16, paddingHorizontal: 16}}>
            <View style={{position:'relative'}}>
              <Image source={require('../../assets/dummy/sepak-bola.jpg')} style={{height: 170,width:'100%',borderRadius:6}}/>
              <View style={{width:'100%',height:'100%',position:'absolute',top:0,left:0,backgroundColor:'black',opacity:0.2,borderRadius:6}}></View>
              <View  style={{height: 15,width:60,position:'absolute',top:16,left:16}}>
              <Image source={require('../../assets/logo/white.png')} style={{width:undefined,height:undefined,resizeMode:'contain',flex:1}}/>
              </View>
            </View>
            <View style={{paddingTop:16, paddingBottom:20,borderBottomColor:'#E8E9ED',borderBottomWidth:2,marginBottom:20}}>
              <Text style={{fontSize:16,fontWeight:'bold',color:'#1C1C1C'}}>GO-NEWS</Text>
              <Text style={{fontSize:14,fontWeight:'normal',color:'#7A7A7A',marginBottom:11}}>Dimas Drajat Selamatkan penalti, Timnas U-23 kalahkan Brasil</Text>
              <TouchableOpacity style={{backgroundColor:'#61A756',alignSelf:'flex-end',paddingVertical:11,paddingHorizontal:12,borderRadius:4}}>
                <Text style={{color:'white',fontSize:13,fontWeight:'bold'}}>READ</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
    }
}

export default NewsBar