import { StatusBar } from 'expo-status-bar';
import { View, Image, StyleSheet } from 'react-native';
import RegistrationScreen from '../Screens/Registration';

export default function App() {
	return (
		<View style={styles.container}>
			<RegistrationScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
