import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const BackGroundImage = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
`;


export const Header = styled.View`
  align-items: flex-start;
  padding: 0px 20px;
`;

export const LogoWrapper = styled.View`
  align-items: flex-start;
  justify-content: center;
  height: ${hp('10%')};
  margin-top: ${hp('3%')};
  padding: 0px 20px;
  `;

export const LogoImage = styled.Image`
  height: ${hp('13%')};
  width: ${wp('70%')};
`;


export const InputsWrapper = styled.View`
  margin-top: ${hp('2%')};
  padding: 0px 20px;
`;

export const Form = styled.View`
`;

export const InputScroll = styled.ScrollView`
  max-height:${hp('31%')};
`;

export const Text = styled.Text`
  font-size: ${hp('3.3%')};
  font-weight: bold;
  color: #fff;
  margin: 8px 0px;
`;


export const Input = styled.TextInput`
  padding: ${`${hp('0.5%')}px`} 0px ${`${hp('0.5%')}px`} 10px;
  font-size: ${hp('2.5%')};
  border-radius: 30px;
  width:${wp('60%')};
  background: #fff;
`;


export const LoginBtn = styled.TouchableOpacity`
  margin-top: ${hp('2%')};
  color: #fff;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  height: ${hp('6.5%')};
  width: ${wp('30%')};

  border-radius: 30px;
  color: #fff;
`;

export const FooterWrapper = styled.View`
  flex: 1;
  flex-direction:row;
  align-items: flex-end;
  padding:${`${hp('3%')}px`} 20px;
`;

export const RegisterBtn = styled.TouchableOpacity`
  margin-left: 2px;
`;

export const RegisterText = styled.Text`
  color: #E20048;
  font-weight: bold;
  font-size: ${hp('2.7%')};
`;

export const FooterText = styled.Text`
  font-size: ${hp('2.7%')};
`;

export const TextError = styled.Text`
  font-size: ${hp('2.7%')};
  color: #fff;
`;


export const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
