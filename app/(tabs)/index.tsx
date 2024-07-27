import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import axios from 'axios';

export default function HomeScreen() {
    const [data, setData] = useState([]);
    const [username, setUsername] = useState('');



    useEffect(() => {
        axios.get('http://tc.kk1s.no:3000/getLatestEvents')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <ThemedText style={styles.title}>Hey, {username}</ThemedText>
            </View>
            <View style={styles.events}>
                {data.map((item, key) => {
                    return (
                        <View style={styles.event} key={key}>
                            <ThemedText>{item.Name}</ThemedText>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    event: {
        margin: 15,
        backgroundColor: '#FF16A2',
    },
    events: {
        backgroundColor: '#4F4F4F',
        margin: 0,
        marginTop: 10,
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