import React, { useState } from 'react';
import { Formik } from 'formik';
import { showMessage } from 'react-native-flash-message';
import { useRelayEnvironment } from 'react-relay/hooks';
import { commitMutation } from 'relay-runtime';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import * as yup from 'yup';


import {
  Container,
  BackGroundImage,
  InputsWrapper,
  Form,
  Input,
  Text,
  RegisterBtn,
  LoginBtn,
  FooterText,
  FooterWrapper,
  RegisterText,
  TextError,
  InputScroll,
  styles,
  LogoWrapper,
  LogoImage,
} from './styles';

import background from '~/assets/images/background.png';

import welcome from '~/assets/images/welcome.png';

const Register = ({ navigation }) => {
  const environment = useRelayEnvironment();
  const [isPending, setPending] = useState(false);

  const handleSubmitValues = (values) => {
    console.log(values);
  };


  return (
    <BackGroundImage source={background}>
      <Container>
        <LogoWrapper>
          <LogoImage source={welcome} resizeMode="contain" />
        </LogoWrapper>
        <InputsWrapper>
          <Formik
            initialValues={{ email: '', password: '', confirmPassword: '' }}
            onSubmit={(values, actions) => {
              actions.resetForm();
              return handleSubmitValues(values);
            }}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .email('O E-mail informado não é válido.')
                .required('O E-mail é obrigatório.'),
              password: yup
                .string()
                .required('A senha é obrigatória.'),
              confirmPassword: yup.string().test('', 'As senhas não são idênticas',
                function test(value) {
                  return this.parent.password === value;
                }),
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
                  <Text>Confirm Password</Text>
                  <Input
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                    onBlur={() => setFieldTouched('confirmPassword')}
                    value={values.confirmPassword}
                    onChangeText={handleChange('confirmPassword')}
                  />
                  {errors.confirmPassword && touched.confirmPassword
                && <TextError>{errors.confirmPassword}</TextError>}
                </InputScroll>
                <RegisterBtn onPress={handleSubmit} disabled={!isValid}>
                  <LinearGradient
                    locations={[0.0, 1.0]}
                    start={{ x: 0, y: 0.75 }}
                    end={{ x: 1, y: 0.25 }}
                    colors={['#ff512f', '#dd2476']}
                    style={styles.gradient}
                  >
                    <Text>Send</Text>
                  </LinearGradient>
                </RegisterBtn>
              </Form>
            )}
          </Formik>
        </InputsWrapper>
        <FooterWrapper>
          <FooterText>Already a member?</FooterText>
          <LoginBtn onPress={() => navigation.navigate('Login')}>
            <RegisterText>Login.</RegisterText>
          </LoginBtn>
        </FooterWrapper>
      </Container>
    </BackGroundImage>
  );
};
export default Register;

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
