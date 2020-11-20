/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, {Component} from 'react';

import Gopay from './Modules/Gopay/Gopay';
import HomeBar from './Modules/Home/HomeBar';
import NavigationBar from './Modules/NavBar/NavigationBar';
import NewsBar from './Modules/News/NewsBar';
import Search from './Modules/Search/Seacrh';

export class App extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
      <ScrollView style={{ flex: 1,backgroundColor:'white'}}>
        {/* search */}
        <Search/>
        {/* gopay */}
        <Gopay saldo="50.140" pay="Pay" nearby="Nearby" topup="TopUp" more="More"/>
        {/* main */}
        <HomeBar gocar="GO-CAR" goride="GO-RIDE" gobluebird="GO-BLUEBIRD" gosend="GO-SEND" godeals="GO-DEALS" gopulsa="GO-PULSA" gofood="GO-FOOD" more="MORE"/>
        <View style={{height: 20, width: "100%", backgroundColor: "#f2f2f4", marginTop: 20}}></View>
        {/* News */}
        <NewsBar/>
      </ScrollView>
      <NavigationBar/>
    </View>
    );
  }
}

export default App;
