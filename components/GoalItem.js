import { StyleSheet, View, Text, Pressable } from 'react-native';
//Pressable is the newest version, and should be used to make an item selectable

function GoalItem(props) {
	return (
		<Pressable onPress={props.onDeleteItem}>
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
		padding: 10,
		backgroundColor: '#03F',
	},
	toDoListItemText: {
		color: '#fff',
	},
});
