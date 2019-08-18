```js
    <View style={{marginHorizontal: 15, minHeight: 100 }}>
     <ImageBackground source={BannerImage} style={{ width: '100%', height: '100%'}}>
        <View style={{ flex: 1, justifyContent: 'flex-end', padding: 15 }}>
          <Text style={{ color: '#ffffff', fontSize: 15, fontWeight: '600' }}>OPERATION</Text>
          <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: '700' }}>APOCALYPSE Z</Text>
        </View>
      </ImageBackground>
    </View>

```



```js
const Timer = () => {
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
```