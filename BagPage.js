import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BagPage = () => {
    return (
        <View style={styles.container}>
            <Text>Ini adalah halaman Bag</Text>
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

export default BagPage;