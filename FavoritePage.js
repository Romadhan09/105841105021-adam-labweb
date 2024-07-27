import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FavoritePage = () => {
    return (
        <View style={styles.container}>
            <Text>Ini adalah halaman favorite</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FavoritePage;