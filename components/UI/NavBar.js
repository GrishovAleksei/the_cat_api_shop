import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Back from '../../assets/icons/back.svg'
import Colors from '../../constants/colors'

export default function HeaderNavigation(props) {
    const {
        onBackPress,
        children,
    } = props
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={onBackPress}
                >
                    <Back size={14} fill={Colors.primary}/>
                </TouchableOpacity>
            </View>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundPrimary,
    },
    headerContainer: {
        height: 60,
        backgroundColor: Colors.backgroundPrimary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowRadius: 20,
        shadowOffset: {
            height: 0,
            width: 4
        },
        elevation: 50,
    }
})
