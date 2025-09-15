import React from 'react';
import { Text } from 'react-native';


type IconProps = {
name: string;
size?: number;
};


// Simples substituto: usar emoji conforme nome
export default function Icon({ name, size = 20 }: IconProps) {
const map: Record<string, string> = {
cart: '🛒',
user: '👤',
home: '🏠',
bread: '🥖',
};
return <Text style={{ fontSize: size }}>{map[name] || '❓'}</Text>;
}