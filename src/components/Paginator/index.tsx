/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Animated, useWindowDimensions} from 'react-native';

export const Paginator = ({data, scrollX}: any) => {
  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 14,
        marginBottom: 16,
        justifyContent: 'center',
      }}>
      {data.map((_: any, i: any) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [6, 19, 6],
          extrapolate: 'clamp',
        });

        const background = scrollX.interpolate({
          inputRange,
          outputRange: ['#41455E', '#0066FF', '#41455E'],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[
              styles.dot,
              {
                width: dotWidth,
                backgroundColor: background,
              },
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 6,
    borderRadius: 5,
    marginHorizontal: 4,
  },
});
