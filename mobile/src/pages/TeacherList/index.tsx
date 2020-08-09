import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import {
	ScrollView,
	BorderlessButton,
	RectButton,
} from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './styles';

function TeacherList() {
	const [teachers, setTeachers] = useState([]);
	const [isFilterVisible, setIsFilterVisible] = useState(false);

	const [subject, setSubject] = useState('');
	const [week_day, setWeekDay] = useState('');
	const [time, setTime] = useState('');

	function handleToggleFilterVisible() {
		setIsFilterVisible(!isFilterVisible);
	}

	async function handleFiltersSubmit() {
		const response = await api.get('classes', {
			params: {
				subject,
				week_day,
				time,
			},
		});
		setIsFilterVisible(false);
		setTeachers(response.data);
	}

	return (
		<View style={styles.container}>
			<PageHeader
				title="Proffys disponíveis"
				headerRight={
					<BorderlessButton onPress={handleToggleFilterVisible}>
						<Icon name="filter" size={20} color="#fff" />
					</BorderlessButton>
				}
			>
				{isFilterVisible && (
					<View style={styles.searchForm}>
						<Text style={styles.label}>Matéria</Text>
						<TextInput
							style={styles.input}
							value={subject}
							// Recebe diretamente o texto e seta utilizando o estado
							onChangeText={(text) => setSubject(text)}
							placeholder="Qual a matéria?"
							placeholderTextColor="#c1bccc"
						/>
						<View style={styles.inputGroup}>
							<View style={styles.inputBlock}>
								<Text style={styles.label}>Dia da semana</Text>
								<TextInput
									style={styles.input}
									value={week_day}
									onChangeText={(text) => setWeekDay(text)}
									placeholder="Qual o dia?"
									placeholderTextColor="#c1bccc"
								/>
							</View>
							<View style={styles.inputBlock}>
								<Text style={styles.label}>Horário</Text>
								<TextInput
									style={styles.input}
									value={time}
									onChangeText={(text) => setTime(text)}
									placeholder="Qual horário?"
									placeholderTextColor="#c1bccc"
								/>
							</View>
						</View>
						<RectButton
							style={styles.submitButton}
							onPress={handleFiltersSubmit}
						>
							<Text style={styles.submitButtonText}>Filtrar</Text>
						</RectButton>
					</View>
				)}
			</PageHeader>
			<ScrollView
				style={styles.teacherList}
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16,
				}}
			>
				{teachers.map((teacher: Teacher) => {
					return <TeacherItem key={teacher.id} teacher={teacher} />;
				})}
			</ScrollView>
		</View>
	);
}

export default TeacherList;
