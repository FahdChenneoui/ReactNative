import React from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
/// Header Welcome and login please
const FormHeader = ({
  ///slide welcome and show Back 
  leftHeading,
  rightHeading,
  subHeading,
  leftHeaderTranslateX = 40,
  rightHeaderTranslateY = -20,
  rightHeaderOpacity = 0,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Animated.Text
          style={[
            styles.heading,
            /// move Welcome to left 
            { transform: [{ translateX: leftHeaderTranslateX }] },
          ]}
        >
          {leftHeading}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.heading,
            {
              opacity: rightHeaderOpacity,
                /// move Welcome to right 
              transform: [{ translateY: rightHeaderTranslateY }],
            },
          ]}
        >
          {rightHeading}
        </Animated.Text>
      </View>
      <Text style={styles.subHeading}>{subHeading}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: { fontSize: 30, fontWeight: 'bold', color: '#1b1b33' },
  subHeading: { fontSize: 18, color: '#1b1b33', textAlign: 'center' },
});

export default FormHeader;
