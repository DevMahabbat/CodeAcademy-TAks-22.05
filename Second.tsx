import React from 'react';
import {Button, StyleSheet, SafeAreaView} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const Second = () => {
  const width = useSharedValue(50);
  const cubeStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        duration: 300,
        easing: Easing.bezier(0.1, 0.5, 0.22, 0.9),
      }),
    };
  });

  const handlePress = () => {
    width.value = Math.random() * 200 + 100;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[cubeStyle, {height: 100, backgroundColor: '#031A74'}]}
      />
      <Button title="Random width" onPress={handlePress} />
    </SafeAreaView>
  );
};

export default Second;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
    rowGap: 10,
  },
});