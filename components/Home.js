import React from 'react';
import theme from '@stowprotocol/brand/theme';
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, Text, AsyncStorage } from 'react-native';
import Button from './Button';

const purge = navigation => async () => {
	await AsyncStorage.removeItem('@Stow:credentials');
   	navigation.navigate('Register');
};

const Home = ({ navigation, credentials }) => {
	return (
	<Grid style={styles.root}>
		<Row style={styles.row}>
			<Text style={styles.title}>
				Home
			</Text>
		</Row>
		<Row></Row>
		<Row style={styles.row}>
			<Button
				title='Purge'
				onPress={purge(navigation)}
			/>
		</Row>
	</Grid>
)};


const styles = StyleSheet.create({
  root: {
	padding: 20,
	textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
  },
  row: {
  	flex: 1,
  	justifyContent: 'center',
  	alignItems: 'center',
  },
  title: {
  	fontFamily: theme.typography.secondary,
  	fontSize: 32
  },
});

export default Home;