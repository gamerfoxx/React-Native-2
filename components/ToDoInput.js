import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import { useState } from 'react';

function ToDoInput(props) {
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
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							onPress={addToDoHandler}
							title="Add To Do"
						/>
					</View>
					<View style={styles.button}>
						<Button
							title="Cancel"
							onPress={props.onCancel}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

export default ToDoInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 20,
		borderBottomWidth: 1,
		borderColor: '#ccc',
		marginBottom: 10,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		width: '100%',
		marginRight: 8,
		padding: 8,
	},
	buttonContainer: {
		flexDirection: 'row',
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
});
