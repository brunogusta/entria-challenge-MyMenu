import styled from 'styled-components/native';
import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const Container = styled.View`
  align-items: flex-end;
  margin-top: 3%;
  padding: 0px 3%;
`;


export const ShowDetailsBtn = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5, bottom: 5, left: 5, right: 5,
  },
})`
  height: ${hp('5%')};
  width: ${hp('5%')};
  border-radius: ${wp('100%')};
`;

export const CloseDetailsBtn = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5, bottom: 5, left: 5, right: 5,
  },
})`
  height: ${hp('5%')};
  width: ${hp('5%')};
  border-radius: ${wp('100%')};
`;

export const DetailText = styled.Text`
  padding: 10px;
  text-align: justify;
`;

export const DetailsWrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex: 1;
  padding: 2px;
  background-color: #E20048;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ImageHeader = styled.ImageBackground`
  height: 100%;
`;


export const ContentWrapper = styled.View`
  flex: 4;
  background-color: #fff;
  border-radius: 10px;
`;

export const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    left: wp('100%'),
    top: 0,
    bottom: 0,
    height: hp('33%'),
    width: wp('43%'),
    borderRadius: 10,
    backgroundColor: '#E20048',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
