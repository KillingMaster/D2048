import React, {FC, useEffect} from 'react';
import {View, StyleSheet, useColorScheme, Animated, Dimensions} from 'react-native';

interface SplashScreenProps {
  navigation: any;
}

const SplashScreen: FC<SplashScreenProps> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const animatedValue = new Animated.Value(0);
  const windowWidth = Dimensions.get('window').width;
  const [diceValue, setDiceValue] = React.useState(4);
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      //double the dice value
      setDiceValue(diceValue * 2);
      //Wait 3 other seconds before navigating to the main menu
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'MainMenu'}],
        });
        navigation.navigate('MainMenu');
      }, 5000);
    });
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: isDarkMode ? 'black' : 'white',
    },
    leftAnimatedSquare: {
      position: 'absolute',
      left: animatedValue.interpolate({ 
        inputRange: [0, 1],
        outputRange: [20, (windowWidth / 2)-26],
      }),
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 60,
      borderRadius: 16,
      backgroundColor: isDarkMode ? 'white' : 'black',
      opacity: animatedValue.interpolate({ 
        inputRange: [0, 1],
        outputRange: [0.8, 1],
      })
    },
    rightAnimatedSquare: {
      position: 'absolute',
      right: animatedValue.interpolate({ 
        inputRange: [0, 1],
        outputRange: [20, (windowWidth / 2)-26],
      }),
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 60,
      borderRadius: 16,
      backgroundColor: isDarkMode ? 'white' : 'black',
      opacity: animatedValue.interpolate({ 
        inputRange: [0, 1],
        outputRange: [0.8, 1],
      }),
      transform: [{ scale: animatedValue.interpolate({ 
        inputRange: [0, 1],
        outputRange: [1, 1.5],
      })}],
    },
  });

  return (
    <View style={[styles.container]}>
      <Animated.View style={[styles.leftAnimatedSquare]}>
        <Animated.Text style={{color: isDarkMode ? 'black' : 'white'}}>{diceValue}</Animated.Text>
      </Animated.View>
      <Animated.View style={[styles.rightAnimatedSquare]}>
        <Animated.Text style={{color: isDarkMode ? 'black' : 'white'}}>{diceValue}</Animated.Text>
      </Animated.View>
    </View>
  );
};


export default SplashScreen;
