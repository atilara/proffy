import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { ScrollView, BorderlessButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {
	return (
		<View style={styles.container}>
			<PageHeader
				title="Proffys disponíveis"
				headerRight={
					<BorderlessButton>
						<Icon name="filter" size={20} color="#fff" />
					</BorderlessButton>
				}
			>
			</PageHeader>
			<ScrollView
				style={styles.teacherList}
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16,
				}}
			>
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
			</ScrollView>
		</View>
	);
}

export default TeacherList;
