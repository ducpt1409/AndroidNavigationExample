import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Blog from './screens/Blog';
import BlogDetails from './screens/BlogDetails';

const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Blog"
        component={Blog}
        options={{ title: 'Blog' }}
      />
      <Stack.Screen
        name="BlogDetails"
        component={BlogDetails}
        options={{ title: 'Blog Details' }}
      />
    </Stack.Navigator>
  )
}

var App = () => {
  return (
    <NavigationContainer>
      <NavStack></NavStack>
    </NavigationContainer>
  )
}
export default App;