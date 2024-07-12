import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import axios from 'axios';

export default function HomeScreen() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://tc.kk1s.no:3000/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.event}>
                <ThemedText style={styles.title}>Fuel</ThemedText>
                <ThemedText style={styles.date}>20:00 - 12 juli</ThemedText>
                <ThemedText style={styles.location}>Misjonskirken</ThemedText>

            </ThemedView>
            <View style={styles.container}>
                {data.map(item => (
                    <Text key={item.ID}>{item.Name}</Text> // Adjust based on your table structure
                ))}
            </View>
        </ThemedView>
    );
}

const text = '#1f0504';
const background = '#fef7f7';
const primary = '#e22c31';
const secondary = '#7bed92';
const accent = '#58e8dc';

const styles = StyleSheet.create({
    event: {
        backgroundColor: primary,
    },
    title: {
    },
    date: {
    },
    location: {
    },
    container: {
        margin: 20,
        marginTop: 30,
    },
});