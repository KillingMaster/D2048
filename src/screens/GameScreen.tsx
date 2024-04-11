/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

interface GameScreenProps {
  navigation: any;
}

const GameScreen: FC<GameScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
         {/* Add your game screen content here */}
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

export default GameScreen;
