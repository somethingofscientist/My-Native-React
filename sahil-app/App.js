import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomComponents from './src/components/CustomComponents';
import { FlatListComponents } from './src/components/FlatListComponents';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomComponents />

      <FlatListComponents />
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
