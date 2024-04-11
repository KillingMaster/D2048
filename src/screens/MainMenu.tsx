/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

interface MainMenuProps {
    navigation: any;
}

const MainMenu: FC<MainMenuProps> = ({}) => {
    return (
        <View style={styles.container}>
            {/* Add your main menu content here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MainMenu;
