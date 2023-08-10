import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
	const [enteredToDoText, setEnteredToDoText] = useState('');

	function toDoInputHandler(pEnteredText) {
		setEnteredToDoText(pEnteredText);
		// console.log(pEnteredText);
	}

	function addToDoHandler() {
		props.onAddToDo(enteredToDoText);
		setEnteredToDoText('');
	}

	return (
		<Modal
			visible={props.visible}
			animationType="fade">
			<View style={styles.inputContainer}>
				<TextInput
					onChangeText={toDoInputHandler}
					style={styles.textInput}
					placeholder="To Do"
					value={enteredToDoText}
				/>
				<Button
					onPress={addToDoHandler}
					title="Add To Do"
				/>
			</View>
		</Modal>
	);
}

export default GoalInput;

const styles = StyleSheet.create({
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
});
