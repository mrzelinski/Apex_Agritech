import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello this is Apex Agritech's app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4CDEE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    backgroundColor: '#fff',
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 100,
  },
});
