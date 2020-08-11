import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function Favorites() {
	const [favorites, setFavorites] = useState([]);

	function loadFavorites() {
		AsyncStorage.getItem('favorites').then((response) => {
			if (response) {
				const favoredTeachers = JSON.parse(response);
				setFavorites(favoredTeachers);
			}
		});
	}

	useFocusEffect(
		React.useCallback(() => {
			loadFavorites();
		}, [])
	);

	return (
		<View style={styles.container}>
			<PageHeader title="Meus proffys favoritos" />
			<ScrollView
				style={styles.teacherList}
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16,
				}}
			>
				{favorites.map((teacher: Teacher) => {
					return (
						<TeacherItem
							key={teacher.id}
							teacher={teacher}
							favored
						/>
					);
				})}
			</ScrollView>
		</View>
	);
}

export default Favorites;
