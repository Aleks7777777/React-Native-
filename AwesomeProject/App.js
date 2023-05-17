import { View, ImageBackground, StyleSheet } from "react-native";
import { RegistrationScreen } from "./Screens/Registration";

export default function App() {
	return (
		<View style={styles.container}>
			<ImageBackground style={styles.image} source={require("./img/BG.jpg")}>
				< RegistrationScreen />
			</ImageBackground>
		</View >
	);
}

const styles = StyleSheet.create({
	image: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	container: {
		flex: 1,
	},
});
