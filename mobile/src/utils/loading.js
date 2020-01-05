/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Easing,
  StyleSheet,
} from 'react-native';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import loadingImage from '~/assets/images/pizza.png';

const Spin = (props) => {
  const [useSpin] = useState({
    spinValue: new Animated.Value(0),
  });


  const spinStart = () => {
    useSpin.spinValue.setValue(0);
    Animated.timing(
      useSpin.spinValue, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      },
    ).start(() => spinStart());
  };
  const stopSpin = () => {
    useSpin.spinValue.setValue(0);
    Animated.timing(
      useSpin.spinValue, {
        toValue: 0,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      },
    ).start();
  };

  useEffect(() => {
    spinStart();

    return () => {
      stopSpin();
    };
  }, []);

  const spinConfig = useSpin.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const { isBtn } = props;
  const styles = StyleSheet.create({
    spin: {
      height: isBtn ? hp('5%') : hp('13%'),
      width: isBtn ? hp('5%') : hp('13%'),
      transform: [{ rotate: spinConfig }],
    },
  });

  return (
    <Animated.Image
      style={styles.spin}
      source={loadingImage}
    />
  );
};

export default Spin;

Spin.prototypes = {
  isBtn: PropTypes.bool,
};
