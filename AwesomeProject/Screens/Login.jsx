import React from 'react';
import { View, Text } from 'react-native';

const LoginScreen = () => {
	return (
		<View
			style={{
				flexDirection: 'row',
				height: 100,
				padding: 20,
			}}>
			<Text>Реєстрація</Text>
			<View style={{ backgroundColor: 'tomato', flex: 0.3 }} />
		</View>
	);
};

export default LoginScreen;