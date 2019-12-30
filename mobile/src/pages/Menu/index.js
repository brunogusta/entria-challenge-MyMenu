import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, FlatList, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements';


import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
  Container,
  LogoImage,
  LogoWrapper,
  LogOutBtn,
  ContentWrapper,
  FlatListWrapper,
  ItemBox,
  HeaderWrapper,
  InfoWrapper,
  ItemText,
  ImageWrapper,
  ItemImage,
} from './styles';

import logo from '../../assets/images/logo.png';

import pizza from '../../assets/images/1.png';

import AnimatedModal from './components/AnimatedModal';
import AnimatedDetails from './components/AnimatedDetails';


const Menu = ({ navigation }) => {
  const [items] = useState({
    data: [
      {
        id: '1',
        title: 'Calabresa',
        cost: '23,00',
        details: 'Qualquer coisa 33, lorem ipsum testando, 123, 123, 123 osahdoahdoiashdosahd',
      },
    ],
  });


  const logOut = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Auth');
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#E20048" />
      <LogoWrapper>
        <LogoImage source={logo} resizeMode="contain" />
        <LogOutBtn onPress={logOut}>
          <Icon name="logout" type="material-community" color="#fff" size={hp('4%')} />
        </LogOutBtn>
      </LogoWrapper>
      <ContentWrapper>
        <AnimatedModal />
        <FlatListWrapper>
          <FlatList
            data={items.data}
            renderItem={({ item }) => (
              <ItemBox key={item.id}>
                <AnimatedDetails details={item.details} />
                <HeaderWrapper>
                  <ImageWrapper>
                    <ItemImage source={pizza} resizeMode="contain" />
                  </ImageWrapper>
                  <InfoWrapper>
                    <ItemText>{item.title}</ItemText>
                    <ItemText>{`R$ ${item.cost}`}</ItemText>
                  </InfoWrapper>
                </HeaderWrapper>
              </ItemBox>
            )}
            showsVerticalScrollIndicator={false}
          />
        </FlatListWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Menu;


Menu.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
