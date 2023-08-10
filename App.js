import { StyleSheet, Text, View, Button } from 'react-native'; //StyleSheet = styles, Text = added text, View = div
//full list found https://reactnative.dev/docs/intro-react-native-components

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!!!</Text>
      <Text>More text</Text>
      <Button title="click me" />
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
