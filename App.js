import { StyleSheet, Text, View, Button, TextInput } from 'react-native'; //StyleSheet = styles, Text = added text, View = div
//full list found https://reactnative.dev/docs/intro-react-native-components

export default function App() {
	return (
		<View style={styles.appContainer}>
			<View>
				<TextInput placeholder="To Do" />
				<Button title="Add To Do item" />
			</View>
			<View>
				<Text>To do</Text>
			</View>
		</View>
	);
}

//not all CSS styles exist in react native
const styles = StyleSheet.create({
	appContainer: {
		padding: 50,
	},
});
