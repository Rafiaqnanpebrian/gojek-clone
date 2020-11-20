/* eslint-disable prettier/prettier */

import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'

export class HomeBar extends Component {
    static defaultProps ={
        goride:'',
        gocar:'',
        gobluebird:'',
        gosend:'',
        godeals:'',
        gopulsa:'',
        gofood:'',
        more:'',
    }
    render() {
      const{goride,gocar,gobluebird,gosend,godeals,gopulsa,gofood,more} = this.props;
        return (
            <View style={{ flexDirection: "row", flexWrap: "wrap", }}>
          <View style={{justifyContent: "space-between", flexDirection:"row", width: "100%"}}>
            <View style={{width: "25%", alignItems: "center",}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: "center", alignItems:"center" }}>
                <Image source={require('../../assets/icon/go-ride.png')}/>
              </View>
              <Text style={{fontSize: 12, fontWeight: "bold", textAlign: "center", marginTop: 5}}>{goride}</Text>
            </View>
            <View style={{width: "25%", alignItems: "center",}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: "center", alignItems:"center" }}>
                <Image source={require('../../assets/icon/go-car.png')}/>
              </View>
        <Text style={{fontSize: 12, fontWeight: "bold", textAlign: "center", marginTop: 5}}>{gocar}</Text>
            </View>
            <View style={{width: "25%", alignItems: "center",}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: "center", alignItems:"center" }}>
                <Image source={require('../../assets/icon/go-bluebird.png')}/>
              </View>
              <Text style={{fontSize: 12, fontWeight: "bold", textAlign: "center", marginTop: 5}}>{gobluebird}</Text>
            </View>
            <View style={{width: "25%", alignItems: "center",}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: "center", alignItems:"center" }}>
                <Image source={require('../../assets/icon/go-send.png')}/>
              </View>
              <Text style={{fontSize: 12, fontWeight: "bold", textAlign: "center", marginTop: 5}}>{gosend}</Text>
            </View>
          </View>
          <View style={{justifyContent: "space-between", flexDirection:"row", width: "100%", marginTop: 15}}>
            <View style={{width: "25%", alignItems: "center",}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: "center", alignItems:"center" }}>
                <Image source={require('../../assets/icon/go-deals.png')}/>
              </View>
              <Text style={{fontSize: 12, fontWeight: "bold", textAlign: "center", marginTop: 5}}>{godeals}</Text>
            </View>
            <View style={{width: "25%", alignItems: "center",}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: "center", alignItems:"center" }}>
                <Image source={require('../../assets/icon/go-pulsa.png')}/>
              </View>
              <Text style={{fontSize: 12, fontWeight: "bold", textAlign: "center", marginTop: 5}}>{gopulsa}</Text>
            </View>
            <View style={{width: "25%", alignItems: "center",}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: "center", alignItems:"center" }}>
                <Image source={require('../../assets/icon/go-food.png')}/>
              </View>
              <Text style={{fontSize: 12, fontWeight: "bold", textAlign: "center", marginTop: 5}}>{gofood}</Text>
            </View>
            <View style={{width: "25%", alignItems: "center",}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: "center", alignItems:"center" }}>
                <Image source={require('../../assets/icon/go-more.png')}/>
              </View>
              <Text style={{fontSize: 12, fontWeight: "bold", textAlign: "center", marginTop: 5}}>{more}</Text>
            </View>
          </View>
        </View>
        )
    }
}

export default HomeBar
