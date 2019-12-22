import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Animated, Easing,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import {
  Container,
  ShowDetailsBtn,
  CloseDetailsBtn,
  DetailText,
  DetailsWrapper,
  Header,
  ImageHeader,
  ContentWrapper,
  styles,
} from './styles';

import headerImage from '~/assets/images/details.png';

const AnimatedDetails = ({ details }) => {
  const [animation, setAnimation] = useState({
    modalXtranslate: new Animated.Value(0),
    startAnimation: false,
  });

  // <<MODAL ANIMATION>>
  const modalWidth = animation.modalXtranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [wp('100%'), wp('50%')],
  });

  const startAnimation = () => {
    setAnimation({
      ...animation,
      startAnimation: true,
    });
    Animated.spring(animation.modalXtranslate, {
      toValue: 1,
      friction: 5,
    }).start();
  };

  const closeModal = () => {
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
        style={[styles.box, { left: modalWidth }]}
      >
        <DetailsWrapper>
          <Header>
            <ImageHeader source={headerImage} resizeMode="center" />
          </Header>
          <ContentWrapper>
            <DetailText>{details}</DetailText>
          </ContentWrapper>
        </DetailsWrapper>
      </Animated.View>
      <Container>
        {!animation.startAnimation
          ? (
            <ShowDetailsBtn onPress={() => startAnimation()}>
              <Icon
                name="ios-information-circle-outline"
                type="ionicon"
                color="#E20048"
                size={hp('5%')}
              />
            </ShowDetailsBtn>
          )
          : (
            (
              <CloseDetailsBtn onPress={() => closeModal()}>
                <Icon
                  name="ios-information-circle"
                  type="ionicon"
                  color="#E20048"
                  size={hp('5%')}
                />
              </CloseDetailsBtn>
            )
          )}
      </Container>
    </>
  );
};

export default AnimatedDetails;

AnimatedDetails.propTypes = {
  details: PropTypes.string().isRequired,
};
