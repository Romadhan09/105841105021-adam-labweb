import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const ProfilePage = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>My profile</Text>
                <TouchableOpacity>
                    <Image
                        style={styles.searchIcon}
                        source={{ uri: './assets/icon/search.png' }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.profileInfo}>
                <Image
                    style={styles.profileImage}
                    source={{ uri: './assets/profile.jpg' }}
                />
                <View style={styles.profileText}>
                    <Text style={styles.profileName}>Romadhan</Text>
                    <Text style={styles.profileEmail}>romadhan@gmail.com</Text>
                </View>
            </View>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuTitle}>My orders</Text>
                    <Text style={styles.menuSubtitle}>Already have 12 orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuTitle}>Shipping addresses</Text>
                    <Text style={styles.menuSubtitle}>3 addresses</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuTitle}>Payment methods</Text>
                    <Text style={styles.menuSubtitle}>Visa **34</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuTitle}>Promocodes</Text>
                    <Text style={styles.menuSubtitle}>You have special promocodes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuTitle}>My reviews</Text>
                    <Text style={styles.menuSubtitle}>Reviews for 4 items</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ProfilePage;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFF',
        paddingBottom: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    searchIcon: {
        width: 24,
        height: 24,
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 24,
        paddingHorizontal: 16,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    profileText: {
        marginLeft: 16,
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileEmail: {
        fontSize: 16,
        color: '#888',
    },
    menu: {
        borderTopWidth: 1,
        borderTopColor: '#EEE',
    },
    menuItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    menuTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    menuSubtitle: {
        fontSize: 14,
        color: '#888',
    },
});