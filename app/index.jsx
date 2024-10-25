import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/homeScreen/Home';
import Maps from '../Screens/Maps';
import Gears from '../Screens/Gears';
import Warnings from '../Screens/homeScreen/Boxes/eachbox/Warnings';
import SnapAndWin from '../Screens/homeScreen/Boxes/eachbox/SnapAndWin';
import Memories from '../Screens/homeScreen/Boxes/eachbox/Memories';
import FilmShooting from '../Screens/homeScreen/Boxes/eachbox/FilmShooting';
import Artifacts from '../Screens/homeScreen/Boxes/eachbox/Artifacts/Artifacts';
import ArtifactsDetail from '../Screens/homeScreen/Boxes/eachbox/Artifacts/ArtifactsDetail';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Maps" component={Maps} options={{ title: 'Maps' }}/>
      <Stack.Screen name="Gears" component={Gears} options={{ title: 'Gears' }}/>
      <Stack.Screen name="Warnings" component={Warnings} options={{ title: 'Warnings' }} />
      <Stack.Screen name="SnapAndWin" component={SnapAndWin} options={{ headerShown: false }}/>
      <Stack.Screen name="Memories" component={Memories} options={{ title: 'Memories' }}/>
      <Stack.Screen name="FilmShooting" component={FilmShooting} options={{ title: 'Film Shooting' }}/>
      <Stack.Screen name="Artifacts" component={Artifacts} options={{ headerShown: false }}/>
      <Stack.Screen name="ArtifactsDetail" component={ArtifactsDetail} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}