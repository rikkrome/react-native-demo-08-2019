import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
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
});

// ---------------------------------------

const DemoHooks = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('...');
  const [mode, setMode] = useState('...');

  const [state, setState] = useState({
    count: 0,
    title: '---',
    mode: '---'
  });


  const getBoth = async () => {
    const title = await fakeAPI.fetchTitles();
    const mode = await fakeAPI.fetchGameModes();

    setState(prevState => {
      return {...prevState, title, mode};
    });
  }

  useEffect(() => {
    // componentDidMount
    getTitle();
    getMode();
    return () => {
      // componentWillUnmount
    };
  }, [])

  const countOnPress = useCallback(() => {
    setCount(c => c + 1);
  },[]);

  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <CustomComp1 title="count:" label={count} onPress={countOnPress} />
        <CustomComp1 title="gameTitle:" label={title}/>
        <CustomComp1 title="gameMode:" label={mode}/>
      </View>
    </SafeAreaView>
  )
}

export default DemoHooks
