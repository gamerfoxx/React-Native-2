import { useState } from 'react';

import { StyleSheet, Text, View, Button, TextInput } from 'react-native'; //StyleSheet = styles, Text = added text, View = div
//full list found https://reactnative.dev/docs/intro-react-native-components

export default function App() {
	const [appLvLEnteredToDoText, setAppLvLEnteredToDoText] = useState('');
	const [appLvLToDo, setAppLvLToDo] = useState([]);

	function toDoInputHandler(pEnteredText) {
		setAppLvLEnteredToDoText(pEnteredText);
		// console.log(pEnteredText);
	}

	function addToDoHandler() {
		setAppLvLToDo((prevToDo) => [...prevToDo, appLvLEnteredToDoText]);
		console.log(appLvLToDo);
	}

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					onChangeText={toDoInputHandler}
					style={styles.textInput}
					placeholder="To Do"
				/>
				<Button
					onPress={addToDoHandler}
					title="Add To Do"
				/>
			</View>
			<View style={styles.toDoContainer}>
				{appLvLToDo.map((element) => {
					return <Text key={element}>{element}</Text>;
				})}
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
