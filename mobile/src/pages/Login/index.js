import React, { useEffect, useState } from 'react';
import { showMessage } from 'react-native-flash-message';
import { commitMutation, graphql } from 'relay-runtime';
import { useRelayEnvironment } from 'react-relay/hooks';
import LinearGradient from 'react-native-linear-gradient';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import { AsyncStorage } from 'react-native';

import {
  Container,
  BackGroundImage,
  LogoWrapper,
  LogoImage,
  InputsWrapper,
  Form,
  Input,
  Text,
  LoginBtn,
  RegisterBtn,
  FooterText,
  FooterWrapper,
  RegisterText,
  TextError,
  InputScroll,
  styles,
} from './styles';


import background from '~/assets/images/background.png';

import logo from '~/assets/images/logo.png';


const mutation = graphql`
  mutation LoginMutation($email: String!, $password: String!) {
    LoginMutation(input: {email: $email, password: $password}){
       token
    }
  }
`;


const Login = ({ navigation }) => {
  const environment = useRelayEnvironment();

  const handleSubmitValues = ({ email, password }) => {
    commitMutation(
      environment,
      {
        mutation,
        variables: {
          email,
          password,
        },
        onCompleted: async ({ LoginMutation }, errors) => {
          if (errors) {
            showMessage({
              message: errors[0].message,
              type: 'danger',
            });
            return;
          }

          await AsyncStorage.setItem('token', LoginMutation.token);
          showMessage({
            message: 'Login successfully',
            description: 'Start adding items to your menu!',
            type: 'success',
          });
          navigation.navigate('Menu');
        },
        onError: (err) => {
          console.log(err);
          showMessage({
            message: 'Oops! Something went wrong, try again!',
            type: 'danger',
          });
        },
      },
    );
  };

  useEffect(() => {
    async function getToken() {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        navigation.navigate('Menu');
      }
    }
    getToken();
  }, []);

  return (
    <BackGroundImage source={background}>
      <Container>
        <LogoWrapper>
          <LogoImage source={logo} resizeMode="contain" />
        </LogoWrapper>
        <InputsWrapper>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, actions) => {
              actions.resetForm();
              return handleSubmitValues(values);
            }}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .email('The Email you entered is not valid')
                .required('Email is required.'),
              password: yup
                .string()
                .required('Password is required.'),
            })}
          >
            {({
              values,
              handleSubmit,
              handleChange,
              errors,
              setFieldTouched,
              touched,
              isValid,
            }) => (
              <Form>
                <InputScroll showsVerticalScrollIndicator={false}>
                  <Text>E-mail</Text>
                  <Input
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onBlur={() => setFieldTouched('email')}
                    value={values.email}
                    onChangeText={handleChange('email')}
                  />
                  {errors.email && touched.email
                && <TextError>{errors.email}</TextError>}
                  <Text>Password</Text>
                  <Input
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                    onBlur={() => setFieldTouched('password')}
                    value={values.password}
                    onChangeText={handleChange('password')}
                  />
                  {errors.password && touched.password
                && <TextError>{errors.password}</TextError>}
                </InputScroll>
                <LoginBtn onPress={handleSubmit} disabled={!isValid}>
                  <LinearGradient
                    locations={[0.0, 1.0]}
                    start={{ x: 0, y: 0.75 }}
                    end={{ x: 1, y: 0.25 }}
                    colors={['#ff512f', '#dd2476']}
                    style={styles.gradient}
                  >
                    <Text>Login</Text>
                  </LinearGradient>
                </LoginBtn>
              </Form>
            )}
          </Formik>
        </InputsWrapper>
        <FooterWrapper>
          <FooterText>Do you not a member?</FooterText>
          <RegisterBtn onPress={() => navigation.navigate('Register')}>
            <RegisterText>Register.</RegisterText>
          </RegisterBtn>
        </FooterWrapper>
      </Container>
    </BackGroundImage>
  );
};
export default Login;

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
