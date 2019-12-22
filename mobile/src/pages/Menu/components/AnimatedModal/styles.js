import styled from 'styled-components/native';
import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { height } = Dimensions.get('window');

export const Container = styled.View``;

export const AddBtn = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 25, bottom: 25, left: 25, right: 25,
  },
})`
  height:${hp('5%')};
  width: ${hp('5%')};
  border-radius: ${wp('100%')};
  background-color: #E20048;
  align-items:center;
  justify-content: center;
  margin-left: ${wp('88%')};
`;

export const ExitBtn = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 25, bottom: 25, left: 25, right: 25,
  },
})`
  height:${hp('5%')};
  width: ${hp('5%')};
  border-radius: ${wp('100%')};
  background-color: #E20048;
  align-items:center;
  justify-content: center;
  margin-left: ${wp('88%')};
`;

export const DrawImageWrapper = styled.View`
  align-items: center;
  justify-content:center;
`;


export const ScrollView = styled.ScrollView`
  flex-grow: 0;
`;

export const ContentWrapper = styled.View`
  flex:1;
  padding: 0px 15px;
  margin-top: 10px;
  padding-bottom: 10px;
`;

export const FormContainer = styled.View`
  flex: 1;
  `;

export const DrawImage = styled.Image`
  height: ${height > 600 ? hp('40%') : hp('35%')};
  width:  100%;
`;

export const SelectImageWrapper = styled.View`
  height: ${hp('15%')};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

`;

export const InputsWrapper = styled.View`
  flex: 1;

`;

export const Input = styled.TextInput`
  padding: 0 0 0 5px;
  height: ${hp('6.5%')};
  color: #504450;
  font-weight: bold;
  font-size: ${hp('2.5%')};

`;

export const SelectImageButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  margin-top: 20px;
  margin-right: 10px;
`;

export const IconWrapper = styled.View`
  height: 90%;
  width: 100%;
  border: dashed 2px  #E20048;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;


export const PreviewImageWrapper = styled.View`
  height: 90%;
  width: 50%;
  margin-top: 20px;
  margin-right: 10px;
  justify-content: flex-start;
`;

export const RemovePothoBtn = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5, bottom: 5, left: 5, right: 5,
  },
})`
  position: absolute;
  left: ${wp('41%')};
  bottom: ${hp('11%')};
  height:${hp('4%')};
  width: ${hp('4%')};
  border-radius: ${wp('100%')};
  background-color: #E20048;
  align-items:center;
  justify-content: center;
  z-index: 1;
`;

export const PreviewImage = styled.Image`
  flex: 1;
  border-radius: 10px;
`;

export const TextBtn = styled.Text`
  font-size: ${hp('3.5%')};
  color: #fff;
  font-weight: bold;
`;

export const DetailsBox = styled.View`
  border-radius: 10px;
  border: dashed 2px #ccc;

  margin: 10px 0px;
`;

export const Bar = styled.View`
  height: 3px;
  background-color: #E20048;
  border-radius: 10px;
  width:${wp('40%')};
  `;

export const SendBtn = styled.TouchableOpacity`
  margin: 10px 0px;
  border-radius: ${wp('10%')};
`;

export const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    width: '100%',
    height: hp('90%'),
    bottom: -hp('90%'),
    borderRadius: 10,
    paddingTop: 15,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  gradient: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboard: {
    flex: 1,
  },
});
