import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

export default function Visualsearch() {
    return (
        <View style={{ 
            flex: 1,
            backgroundColor: '#ffffff',
        }}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
            }}>
                <Image
                    style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover',
                    }}
                    source={require('./assets/wanita.jpg')}
                />

                {/* Overlay yang menggelapkan area di luar kotak */}
                <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay gelap
                    }} />
                    <View style={{
                        position: 'absolute',
                        width: 200,
                        height: 200,
                        top: '50%',
                        left: '50%',
                        transform: [{ translateX: -100 }, { translateY: -100 }],
                        borderColor: '#ffffff',
                        borderWidth: 4,
                        borderRadius: 20,
                        overflow: 'hidden', // Pastikan hanya area dalam kotak yang terlihat
                    }}>
                        <Image
                            style={{
                                width: '100%',
                                height: '100%',
                                resizeMode: 'cover',
                            }}
                            source={require('./assets/wanita.jpg')}
                        />
                    </View>
                </View>
            </View>

            <TouchableOpacity style={{
                position: 'absolute',
                bottom: 20,
                left: '50%',
                transform: [{ translateX: -25 }],
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#ff3b30',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5,
            }}>
                <Image
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: '#ffffff',
                    }}
                    source={require('./assets/icon/search.png')}
                />
            </TouchableOpacity>
        </View>
    );
}