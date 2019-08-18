/**
 * Class Date: 08-16-2019
 * OverView: Lifecycle
 */
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native'
import useCountRenders from './useCountRenders';
import fakeAPI from './fakeAPI';

const CustomComp1 = React.memo(({title, label, onPress}) => {
  useCountRenders(`${title}`);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ backgroundColor: '#000000', marginTop: 15, flexDirection: 'row', justifyContent: 'space-between',  padding: 10 }}>
        <Text style={{ color: '#ffffff', fontSize: 30, fontWeight: 'bold' }}>{title}</Text>
        <Text style={{ color: '#ffffff', fontSize: 30, fontWeight: 'bold' }}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
})

class DemoClasses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      title: '...',
      mode: '...',
    }
  }

  getGameTitle = async () => {
    const title = await fakeAPI.fetchTitles();
    this.setState({ title })
  }

  getGameMode = async () => {
    const mode = await fakeAPI.fetchGameModes();
    this.setState({ mode })

  }
  componentDidMount() {
    this.getGameTitle();
    this.getGameMode();
  }

  componentWillUnmount() {}
  
  countOnPress = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{ padding: 20 }}>
          <CustomComp1 title="count" label={this.state.count} onPress={this.countOnPress}/>
          <CustomComp1 title="gameTitle" label={this.state.title}/>
          <CustomComp1 title="gameMode" label={this.state.mode}/>
        </View>
      </SafeAreaView>
    )
  }
}

export default DemoClasses;
