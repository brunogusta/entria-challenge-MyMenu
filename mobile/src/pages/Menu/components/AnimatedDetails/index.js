import React, { useState } from 'react';
import {
  Animated, Easing, Keyboard, KeyboardAvoidingView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import {
  Container,
  ShowDetailsBtn,
  CloseDetailsBtn,
  DetailText,
  DetailsWrapper,
  styles,
} from './styles';

const AnimatedDetails = ({ details }) => {
  const [animation, setAnimation] = useState({
    modalXtranslate: new Animated.Value(0),
    startAnimation: false,
  });

  // <<MODAL ANIMATION>>
  const modalWidth = animation.modalXtranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, wp('46%')],
  });

  const startAnimation = () => {
    setAnimation({
      ...animation,
      startAnimation: true,
    });
    Animated.spring(animation.modalXtranslate, {
      toValue: 1,
      friction: 7,
    }).start();
  };

  const closeModal = () => {
    Keyboard.dismiss();
    Animated.timing(animation.modalXtranslate, {
      toValue: 0,
      duration: 300,
      easing: Easing.linear,
    }).start(() => setAnimation({
      ...animation,
      startAnimation: false,
    }));
  };
  // <<MODAL ANIMATION/>>

  return (
    <>
      <Animated.View
        style={[styles.box, { width: modalWidth }]}
      >
        <DetailsWrapper>
          <DetailText>{details}</DetailText>
        </DetailsWrapper>
      </Animated.View>
      <Container>
        {!animation.startAnimation
          ? (
            <ShowDetailsBtn onPress={() => startAnimation()}>
              <Icon
                name="ios-arrow-forward"
                type="ionicon"
                color="#E20048"
                size={hp('6%')}
              />
            </ShowDetailsBtn>
          )
          : (
            (
              <CloseDetailsBtn onPress={() => closeModal()}>
                <Icon
                  name="ios-arrow-back"
                  type="ionicon"
                  color="#E20048"
                  size={hp('6%')}
                />
              </CloseDetailsBtn>
            )
          )}
      </Container>
    </>
  );
};

export default AnimatedDetails;
