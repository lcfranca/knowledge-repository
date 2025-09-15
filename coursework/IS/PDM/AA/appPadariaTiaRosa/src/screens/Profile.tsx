import React from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { globalStyles } from '../styles/global';
import * as AppConstants from '../constants';

export default function Profile() {
			const name = AppConstants.APP_NAME ?? 'Padaria Tia Rosa';
			const address = AppConstants.ADDRESS ?? 'SHCS CLS 214 Loja 23 - Asa Sul, Brasília - DF';
			const contact = AppConstants.CONTACT ?? '(61) 99999-0000';
			const windowWidth = Dimensions.get('window').width;
			const imageHeight = Math.round(windowWidth * 0.45);

		return (
			<ScrollView style={globalStyles.container} contentContainerStyle={{ paddingBottom: 24 }}>
						<Image
							source={{ uri: 'https://www.paesedocessol.com.br/images/dst-padaria-sol.png' }}
							style={{ width: '100%', height: imageHeight, borderRadius: 8, marginBottom: 12 }}
							resizeMode="cover"
						/>

				<Text style={globalStyles.title}>Sobre Nós</Text>

				<Text style={globalStyles.text}>
					{name} nasceu da paixão por pão fresco e atendimento acolhedor. Nossa missão
					é entregar produtos de alta qualidade combinando tradição com pequenas
					inovações que tornam a experiência do cliente mais prática e agradável.
				</Text>

				<Text style={[globalStyles.title, { marginTop: 12 }]}>Nossa Missão</Text>
				<Text style={globalStyles.text}>
					Entregar produtos frescos, atendimento humano e soluções práticas para que
					nossos clientes tenham conveniência sem perder o sabor caseiro.
				</Text>

				<Text style={[globalStyles.title, { marginTop: 12 }]}>Contato</Text>
				<Text style={globalStyles.text}>Endereço: {address}</Text>
				<Text style={globalStyles.text}>Contato: {contact}</Text>
				<Text style={globalStyles.text}>Horário: 6h - 20h</Text>
			</ScrollView>
		);
}