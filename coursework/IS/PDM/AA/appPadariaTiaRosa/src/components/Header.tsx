import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, fontSizes } from '../theme/theme';


type HeaderProps = {
title: string;
};


export default function Header({ title }: HeaderProps) {
return (
<View style={styles.container}>
<Text style={styles.title}>{title}</Text>
</View>
);
}


const styles = StyleSheet.create({
container: {
padding: spacing.m,
backgroundColor: colors.primary,
},
title: {
color: '#fff',
fontSize: fontSizes.large,
fontWeight: 'bold',
},
});