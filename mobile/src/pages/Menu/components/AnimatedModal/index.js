import React, { useState, useEffect } from 'react';
import {
  Animated, Easing, Keyboard, KeyboardAvoidingView,
} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { Formik } from 'formik';
import { Icon } from 'react-native-elements';
import { showMessage } from 'react-native-flash-message';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import usePhoto from '~/hooks/usePhoto';

import {
  Container,
  AddBtn,
  ExitBtn,
  styles,
  ContentWrapper,
  FormContainer,
  DrawImageWrapper,
  DrawImage,
  SelectImageWrapper,
  SelectImageButton,
  IconWrapper,
  PreviewImageWrapper,
  PreviewImage,
  RemovePothoBtn,
  InputsWrapper,
  Input,
  Bar,
  DetailsBox,
  SendBtn,
  TextBtn,
  ScrollView,
} from './styles';

import catImage from '~/assets/images/catImage.png';

import AddNewItemMutation from './AddNewItemMutation';

const AnimatedModal = ({ navigation }) => {
  const [photo, handleSelectImage, removeImage] = usePhoto();
  const [showImage, setShowImage] = useState(true);
  const [animation, setAnimation] = useState({
    modalYtranslate: new Animated.Value(0),
    startAnimation: false,
  });

  // <<MODAL ANIMATION>>
  const modalMoveY = animation.modalYtranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -hp('90%')],
  });

  const translateStyle = { transform: [{ translateY: modalMoveY }] };

  const startAnimation = () => {
    setAnimation({
      ...animation,
      startAnimation: true,
    });
    Animated.spring(animation.modalYtranslate, {
      toValue: 1,
      friction: 7,
    }).start();
  };

  const closeModal = () => {
    Keyboard.dismiss();
    Animated.timing(animation.modalYtranslate, {
      toValue: 0,
      duration: 300,
      easing: Easing.linear,
    }).start(() => setAnimation({
      ...animation,
      startAnimation: false,
    }));
  };
  // <<MODAL ANIMATION/>>


  // <<KEYBOARD LISTENER >>
  const keyboardDidShow = () => {
    setShowImage(false);
  };

  const keyboardDidHide = () => {
    setShowImage(true);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  // <<KEYBOARD LISTENER/>>


  const handleSubmitValues = ({ title, cost, details }) => {
    if (title.length === 0) {
      return showMessage({
        message: 'All fields must be completed',
        type: 'danger',
      });
    } if (cost.length === 0) {
      return showMessage({
        message: 'All fields must be completed',
        type: 'danger',
      });
    } if (details.length === 0) {
      return showMessage({
        message: 'All fields must be completed',
        type: 'danger',
      });
    }


    const file = photo;
    if (file === null) {
      return showMessage({
        message: 'No images have been selected',
        type: 'danger',
      });
    }


    const onCompleted = (_, errors) => {
      if (errors) {
        showMessage({
          message: 'Always went wrong when upload item, try again',
          type: 'danger',
        });
      } else {
        showMessage({
          message: 'New item added successfully',
          type: 'success',
        });
        navigation.navigate('Menu');
        closeModal();
      }
    };

    const onError = (err) => {
      console.log(err);
    };

    const item = {
      title,
      cost,
      details,
    };

    AddNewItemMutation(item, file, onCompleted, onError);
    removeImage();
  };


  return (
    <>
      <Animated.View style={[
        styles.box,
        translateStyle,
      ]}
      >
        <KeyboardAvoidingView
          style={styles.keyboard}
          behavior="padding"
          keyboardVerticalOffset={showImage ? 100 : null}
        >
          <ExitBtn onPress={() => closeModal()}>
            <Icon name="remove" type="font-awesome" color="#fff" size={hp('4%')} />
          </ExitBtn>
          {showImage && (
          <DrawImageWrapper>
            <DrawImage source={catImage} resizeMode="contain" />
          </DrawImageWrapper>
          )}
          <ContentWrapper>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Formik
                initialValues={{ title: null, cost: null, details: null }}
                onSubmit={(values, actions) => {
                  actions.resetForm();
                  return handleSubmitValues(values);
                }}
              >
                {({
                  values,
                  handleSubmit,
                  handleChange,
                  setFieldTouched,
                }) => (
                  <FormContainer>
                    <SelectImageWrapper>
                      <InputsWrapper>
                        <Input
                          placeholder="Title"
                          autoCapitalize="words"
                          autoCorrect={false}
                          onBlur={() => setFieldTouched('title')}
                          value={values.title}
                          onChangeText={handleChange('title')}
                        />
                        <Bar />
                        <Input
                          keyboardType="decimal-pad"
                          placeholder="Cost"
                          autoCapitalize="none"
                          autoCorrect={false}
                          onBlur={() => setFieldTouched('cost')}
                          value={values.cost}
                          onChangeText={handleChange('cost')}
                        />
                        <Bar />
                      </InputsWrapper>
                      {!photo ? (
                        <SelectImageButton onPress={handleSelectImage}>
                          <IconWrapper>
                            <Icon name="camera" type="font-awesome" color="#E20048" size={hp('4%')} />
                          </IconWrapper>
                        </SelectImageButton>
                      )
                        : (
                          <PreviewImageWrapper>
                            <RemovePothoBtn onPress={() => removeImage()}>
                              <Icon name="remove" type="font-awesome" color="#fff" size={hp('3%')} />
                            </RemovePothoBtn>
                            <PreviewImage source={{ uri: photo.uri }} resizeMode="contain" />
                          </PreviewImageWrapper>
                        )}
                    </SelectImageWrapper>
                    <DetailsBox>
                      <Input
                        placeholder="Details"
                        autoCapitalize="words"
                        onBlur={() => setFieldTouched('details')}
                        value={values.details}
                        onChangeText={handleChange('details')}
                      />
                    </DetailsBox>
                    <SendBtn onPress={handleSubmit}>
                      <LinearGradient
                        locations={[0.0, 1.0]}
                        start={{ x: 0, y: 0.75 }}
                        end={{ x: 1, y: 0.25 }}
                        colors={['#ff512f', '#dd2476']}
                        style={styles.gradient}
                      >
                        <TextBtn>Send</TextBtn>
                      </LinearGradient>
                    </SendBtn>
                  </FormContainer>
                )}
              </Formik>
            </ScrollView>
          </ContentWrapper>
        </KeyboardAvoidingView>
      </Animated.View>
      <Container>
        <AddBtn onPress={() => startAnimation()}>
          <Icon name="ios-add" type="ionicon" color="#fff" size={hp('5%')} />
        </AddBtn>
      </Container>
    </>
  );
};


export default AnimatedModal;

AnimatedModal.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
