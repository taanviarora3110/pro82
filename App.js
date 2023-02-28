
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './screens/Profile';
import Feed from './screens/Feed';
import CreatePost from './screens/CreatePost';
import DrawerNavigator from './navigation/DrawerNavigation';
import BottomTabNavigator from './navigation/TabNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
