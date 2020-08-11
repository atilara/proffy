import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import api from '../../services/api';

export interface Teacher {
	avatar: string;
	bio: string;
	cost: number;
	id: number;
	name: string;
	subject: string;
	whatsapp: string;
}

interface TeacherItemProps {
	teacher: Teacher;
	favored: boolean;
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({
	teacher,
	favored,
}) => {
	const [isFavored, setIsFavored] = useState(favored);

	async function handleToggleFavorite() {
		// prettier-ignore
		const favorites = await AsyncStorage.getItem('favorites');

		let favoritesArray = [];

		if (favorites) {
			favoritesArray = JSON.parse(favorites);
		}

		if (isFavored) {
			const favoriteIndex = favoritesArray.findIndex(
				(teacherItem: Teacher) => {
					return teacherItem.id === teacher.id;
				}
			);
			setIsFavored(false);

			favoritesArray.splice(favoritesArray, 1);
		} else {
			favoritesArray.push(teacher);

			setIsFavored(true);
		}
		await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
	}

	function handleLinkToWhatsapp() {
		api.post('connections', {
			user_id: teacher.id,
		});
		Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
	}
	return (
		<View style={styles.container}>
			<View style={styles.profile}>
				<Image style={styles.avatar} source={{ uri: teacher.avatar }} />
				<View style={styles.profileInfo}>
					<Text style={styles.name}>{teacher.name}</Text>
					<Text style={styles.subject}>{teacher.subject}</Text>
				</View>
			</View>
			<Text style={styles.bio}>{teacher.bio}</Text>
			<View style={styles.footer}>
				<Text style={styles.price}>
					Preço/hora {'   '}
					<Text style={styles.priceValue}>R$ {teacher.cost}</Text>
				</Text>
				<View style={styles.buttonsContainer}>
					<RectButton
						onPress={handleToggleFavorite}
						style={[
							styles.favoriteButton,
							isFavored ? styles.favored : {},
						]}
					>
						{isFavored ? (
							<Image source={unfavoriteIcon} />
						) : (
							<Image source={heartOutlineIcon} />
						)}
					</RectButton>
					<RectButton
						style={styles.contactButton}
						onPress={handleLinkToWhatsapp}
					>
						<Image source={whatsappIcon} />
						<Text style={styles.contactButtonText}>
							Entrar em contato
						</Text>
					</RectButton>
				</View>
			</View>
		</View>
	);
};

export default TeacherItem;
