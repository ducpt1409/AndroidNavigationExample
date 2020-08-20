import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';

function BlogDetails({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Blog Details screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()}></Button>
      <Image source={{ uri: 'https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-0/p640x640/89774889_1345595625627508_132693633085210624_o.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=WbD9s3Tv84EAX-stWBh&_nc_ht=scontent.fhan5-3.fna&_nc_tp=6&oh=6e3767fef80955870b08cd727c9137ed&oe=5F62807B' }}
      style={{width:300, height:200,resizeMode:'stretch'}}></Image>
    </View>
  )
}

export default BlogDetails;