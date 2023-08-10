import { StyleSheet, View, Text, Pressable } from 'react-native';
//Pressable is the newest version, and should be used to make an item selectable

//bind is to set the parameter to be used when the function is run
function GoalItem(props) {
	return (
		<Pressable
			android_ripple={{ color: 'red' }}
			onPress={props.onDeleteItem.bind(this, props.id)}
			style={({ pressed }) => pressed && styles.pressedItem}>
			<View style={styles.toDoListItem}>
				<Text style={styles.toDoListItemText}>{props.text}</Text>
			</View>
		</Pressable>
	);
}

export default GoalItem;

const styles = StyleSheet.create({
	toDoListItem: {
		width: '100%',
		margin: 5,
		borderRadius: 6,
		borderWidth: 1,
		backgroundColor: '#03F',
	},
	pressedItem: {
		opacity: 0.5,
	},
	toDoListItemText: {
		padding: 10,
		color: '#fff',
	},
});
