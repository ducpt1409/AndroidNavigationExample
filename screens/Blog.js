import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

function Blog({ route, navigation }) {
  const { userId } = route.params;
  const { name } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Blog screen</Text>

      <Text>User id : {JSON.stringify(userId)}</Text>
      <Text>Name : {JSON.stringify(name)}</Text>
      <Button title="Go back"
        onPress={() => navigation.goBack()}></Button>
      <Button title="Go to Block Details"
        onPress={() => navigation.navigate('BlogDetails')}></Button>
    </View>
  );
}

export default Blog;