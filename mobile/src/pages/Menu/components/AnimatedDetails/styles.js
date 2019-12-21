import styled from 'styled-components/native';
import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const Container = styled.View`
  justify-content: center;
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
`;

export const DetailsWrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 10px;
`;


export const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    left: wp('45%'),
    top: 0,
    bottom: 0,
    height: hp('30%'),
    width: 0,
    borderRadius: 10,
    backgroundColor: '#fff',

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
