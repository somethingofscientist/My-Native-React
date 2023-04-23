import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomComponents from './src/components/CustomComponents';
import FlatListComponents from './src/components/FlatListComponents';
import ButtonComponent from './src/components/ButtonComponent';
import ImageComponent from './src/components/ImageComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomComponents />
      <FlatListComponents />
      <ImageComponent />
      <ButtonComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:"white",
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
