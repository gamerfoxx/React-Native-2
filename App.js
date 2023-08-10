import { useState } from 'react';

import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	ScrollView,
} from 'react-native'; //StyleSheet = styles, Text = added text, View = div
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

	//ScrollView is required in ordered to make ANY content scrollable
	//Sizing styles should be applied to the parent View
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
				<ScrollView>
					{appLvLToDo.map((element) => {
						return (
							<View
								style={styles.toDoListItem}
								key={element}>
								<Text style={styles.toDoListItemText}>{element}</Text>
							</View>
						);
					})}
				</ScrollView>
			</View>
		</View>
	);
}

//not all CSS styles exist in react native

//Flexbox enabled by default

//styles do not cascade

//container styles should be applied at the View level
//text styles should be added at the Text level
//This is to ensure cross platform consistency

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
		marginBottom: 10,
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
	toDoListItem: {
		width: '100%',
		margin: 5,
		borderRadius: 6,
		borderWidth: 1,
		padding: 10,
		backgroundColor: '#03F',
	},
	toDoListItemText: {
		color: '#fff',
	},
});
