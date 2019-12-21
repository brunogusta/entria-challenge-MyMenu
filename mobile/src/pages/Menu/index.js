import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, FlatList } from 'react-native';

import { Icon } from 'react-native-elements';

import {
  Container,
  LogoImage,
  LogoWrapper,
  ContentWrapper,
  FlatListWrapper,
  ItemBox,
  HeaderWrapper,
  InfoWrapper,
  ItemText,
  ImageWrapper,
  ItemImage,
} from './styles';

import logo from '~/assets/images/logo.png';

import pizza from '~/assets/images/1.png';
import coca from '~/assets/images/coca.png';

import AnimatedModal from './components/AnimatedModal';
import AnimatedDetails from './components/AnimatedDetails';


const Menu = ({ navigation }) => {
  const [items] = useState({
    data: [
      {
        title: 'Calabresa',
        cost: '23,00',
        details: 'Qualquer coisa 33',
      },
      {
        title: 'Frango',
        cost: '23,00',
        details: 'Qualquer coisa 33',
      },
      {
        title: 'Brócolis',
        cost: '23,00',
        details: 'Qualquer coisa 2123',
      },
      {
        title: '4 Queijos',
        cost: '23,00',
        details: 'Qualquer coisa 12 ',
      },
    ],
  });


  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#E20048" />
      <LogoWrapper>
        <LogoImage source={logo} resizeMode="contain" />
      </LogoWrapper>
      <ContentWrapper>
        <AnimatedModal />
        <FlatListWrapper>
          <FlatList
            data={items.data}
            renderItem={({ item }) => (
              <>
                <ItemBox key={item.title}>
                  <HeaderWrapper>
                    <ImageWrapper>
                      <ItemImage source={pizza} resizeMode="contain" />
                    </ImageWrapper>
                    <InfoWrapper>
                      <ItemText>{item.title}</ItemText>
                      <ItemText>{`R$ ${item.cost}`}</ItemText>
                    </InfoWrapper>
                  </HeaderWrapper>
                  <AnimatedDetails details={item.details} />
                </ItemBox>
              </>
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
