import { StyleSheet, View, Text } from 'react-native';

function GoalItem(props) {
	return (
		<View style={styles.toDoListItem}>
			<Text style={styles.toDoListItemText}>{props.text}</Text>
		</View>
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
