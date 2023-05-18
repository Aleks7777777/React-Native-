import React, { useState } from 'react';
import {
	View,
	Text,
	Image,
	TextInput,
	StyleSheet,
	Pressable,
} from 'react-native';

export const RegistrationScreen = () => {
	const [passwordView, usePasswordView] = useState(true)
	const handlerLongClick = () => {
		!usePasswordView(!passwordView)
		console.log('long click');
	}
	return (
		<View style={styles.conteiner}>
			<Text style={{ color: '#333' }}>Реєстрація</Text>
			<Image style={styles.avatar} source={require('../img/avatar.jpg')} />

			<TextInput
				style={styles.input}
				placeholderTextColor="#bdbdbd"
				placeholder='Логін' />

			<TextInput
				style={styles.input}
				placeholderTextColor="#bdbdbd"
				placeholder='Електронна адреса' />

			<TextInput
				style={styles.input}
				autoComplete="password"
				secureTextEntry={passwordView}
				placeholder="Пароль"
				placeholderTextColor="#bdbdbd"
			/>

			<Text dataDetectorType="link" onLongPress={handlerLongClick} />
			<Pressable style={styles.button}>
				<Text style={styles.textButton}>Зареєструватися</Text>
			</Pressable>
			<Text style={styles.link} dataDetectorType="link">Вже є акаунт? Увійти</Text>
		</View >
	);
};


const styles = StyleSheet.create({
	conteiner: {
		position: "relative",
	},
	input: {

	}
})
