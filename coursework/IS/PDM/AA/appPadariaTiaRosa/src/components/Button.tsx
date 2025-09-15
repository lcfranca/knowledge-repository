import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, spacing, fontSizes } from '../theme/theme';


type ButtonProps = {
label: string;
onPress: () => void;
variant?: 'primary' | 'secondary';
};


export default function Button({ label, onPress, variant = 'primary' }: ButtonProps) {
return (
<TouchableOpacity
style={[styles.button, variant === 'secondary' && styles.secondary]}
onPress={onPress}
>
<Text style={styles.label}>{label}</Text>
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
button: {
backgroundColor: colors.primary,
padding: spacing.m,
borderRadius: 8,
alignItems: 'center',
},
secondary: {
backgroundColor: colors.secondary,
},
label: {
color: '#fff',
fontSize: fontSizes.medium,
fontWeight: 'bold',
},
});