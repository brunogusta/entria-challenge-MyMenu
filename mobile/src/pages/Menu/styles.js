import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  background-color: #E20048;
`;

export const LogoWrapper = styled.View`
  align-items: center;
  justify-content: center;
  height: ${hp('10%')};
  padding: 0px 20px;
`;
export const LogOutBtn = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5, bottom: 5, left: 5, right: 5,
  },
})`
  position: absolute;
  left:${wp('85%')};
  right: 0;
`;

export const LogoImage = styled.Image`
  height: ${hp('9%')};
  width: ${wp('100%')};
`;

export const ContentWrapper = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,

  elevation: 24,
})`
  height: ${hp('90%')};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: #fff;
  padding: 15px 0px;
`;

export const FlatListWrapper = styled.View`
  flex:1;
  padding-bottom: 10px;
`;

export const ItemBox = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,

  elevation: 15,
})`
  height: ${hp('33%')};
  width: ${wp('43%')};
  margin: 10px ${`${wp('4%')}px`};
  border-radius: 10px;
  background-color: #fff;
`;

export const HeaderWrapper = styled.View`
  flex: 1;
`;

export const ImageWrapper = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
export const NoImageWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ItemImage = styled.Image`
  flex: 1;
  height: ${hp('10%')};
  width: ${wp('30%')};

`;

export const NoItemImage = styled.Image`
  height: ${hp('40%')};
  width: ${wp('80%')};
`;

export const InfoWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;


export const ItemText = styled.Text`
 font-size: ${hp('3%')};
 color: #575757;
 font-weight: bold;
`;

export const DetailWrapper = styled.View`
  flex: 1;
`;

export const DetailText = styled.Text`
 font-size: ${hp('3%')};
 color: #ccc;
 font-weight: bold;
`;

export const styles = StyleSheet.create({
  flatList: {
    padding: 10,
  },
});

export const Loading = styled.Text`
 font-size: ${hp('3%')};
 color: #575757;
 font-weight: bold;
`;
