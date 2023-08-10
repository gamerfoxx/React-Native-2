import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

import { StyleSheet, View, FlatList } from 'react-native'; //StyleSheet = styles, Text = added text, View = div
//full list found https://reactnative.dev/docs/intro-react-native-components

//ScrollView is required in ordered to make ANY content scrollable
//Sizing styles should be applied to the parent View
//good for limited length items

//FlatList should be used for very long lists because it uses lazy load
//FlatList will automatically apply the 'key' value
//An array of objects should be used
//can use keyExtractor to generate key uses arrow function

export default function App() {
	const [toDo, setToDo] = useState([]);

	function addToDoHandler(enteredToDoText) {
		setToDo((prevToDo) => [
			...prevToDo,
			{ text: enteredToDoText, key: Math.random().toString() },
		]);
		console.log(toDo);
	}

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddToDo={addToDoHandler} />
			<View style={styles.toDoContainer}>
				<FlatList
					data={toDo}
					renderItem={(itemData) => {
						return <GoalItem text={itemData.item.text} />;
					}}
				/>
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
	toDoContainer: {
		flex: 4,
	},
});
