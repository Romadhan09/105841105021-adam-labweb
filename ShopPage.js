import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ShopPage = () => {
    return (
        <View style={styles.container}>
            <Text>Ini adalah halaman shop</Text>
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

export default ShopPage;