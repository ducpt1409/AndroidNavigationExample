import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Home screen</Text>
      <Button title="Go to Blog"
         onPress={() => { navigation.navigate('Blog', { userId: 1, name: 'Pham Tien Duc' }); }}></Button>
      <Button title="Go to Blog Details"
        onPress={() => { navigation.navigate('BlogDetails', { userId: 1, name: 'Pham Tien Duc' }); }}></Button>
    </View>
  );
}

export default Home;