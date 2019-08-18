/**
 * Class Date: 08-08-2019
 * OverView: 
 * - working with JSX Views. 
 * - ScrollView
 */

import React from 'react';
import { Text, View, ScrollView, SafeAreaView, ImageBackground } from 'react-native';

const BannerImage = require('./src/assets/backgrounds/codBanner.jpg')
const lines = { borderColor: 'red', borderWidth: 2 }

const Banner = () => {
  return (
    <View style={{marginHorizontal: 15, height: 150 }}>
     <ImageBackground source={BannerImage} style={{ width: '100%', height: '100%'}}>
        <View style={{ flex: 1, justifyContent: 'flex-end', padding: 15 }}>
          <Text style={{ color: '#ffffff', fontSize: 15, fontWeight: '600' }}>OPERATION</Text>
          <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: '700' }}>APOCALYPSE Z</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const Tier = () => {
  return (
    <View style={{ marginHorizontal: 15, backgroundColor: '#555555' }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
         <Text style={{ color: '#4287f5' }}> --------></Text>
        </View>
        <View style={{ flex: 2, justifyContent: 'center'}}>
          <Text style={{ color: '#ffffff', fontSize: 10}}>TIME LEFT</Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'row'  }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{ color: '#ffffff', fontSize: 25}}>TIER </Text>
        <Text style={{ color: '#4287f5', fontSize: 25}}>100</Text>
        </View>
        <View style={{ flex: 2}}>
        <Text style={{ color: '#ffffff', fontSize: 25}}>0d 0h 0m 0s</Text>
        </View>
      </View>
    </View>
  )
}

const BannerWithTier = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <Banner />
      <Tier />
    </View>
  )
}

/**
 *  This is the main component
 *  <SafeAreaView /> : The purpose of SafeAreaView is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later.
 *  Docs: https://facebook.github.io/react-native/docs/safeareaview
 * 
 *  <ScrollView : Screen will scroll - use <FlatList if your rendering a long list. 
 *  Docs: https://facebook.github.io/react-native/docs/scrollview
 * 
 * <BannerWithTimer : Custom component
 * 
 */

const DemoScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}> 
      <ScrollView style={{ flex: 1 }}>
        <Banner />
        <Tier />
        {/* <BannerWithTier /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default DemoScreen;
