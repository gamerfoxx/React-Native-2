import { useState } from 'react';

import { StyleSheet, Text, View, Button, TextInput } from 'react-native'; //StyleSheet = styles, Text = added text, View = div
//full list found https://reactnative.dev/docs/intro-react-native-components

export default function App() {
	const [appLvLEnteredToDoText, setAppLvLEnteredToDoText] = useState();
	function goalInputHandler(pEnteredText) {
		setAppLvLEnteredToDoText(pEnteredText);
		// console.log(pEnteredText);
	}

	function addGoalHandler() {
		console.log(appLvLEnteredToDoText);
	}

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					onChangeText={goalInputHandler}
					style={styles.textInput}
					placeholder="To Do"
				/>
				<Button
					onPress={addGoalHandler}
					title="Add To Do"
				/>
			</View>
			<View style={styles.toDoContainer}>
				<Text>To do</Text>
			</View>
		</View>
	);
}

//not all CSS styles exist in react native
//Flexbox enabled by default
const styles = StyleSheet.create({
	appContainer: {
		paddingTop: 50,
		paddingHorizontal: 16,
		flex: 1,
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBottom: 20,
		borderBottomWidth: 1,
		borderColor: '#ccc',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		width: '60%',
		marginRight: 8,
		padding: 8,
	},
	toDoContainer: {
		flex: 4,
	},
});
