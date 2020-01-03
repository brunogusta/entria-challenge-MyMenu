import React, { useState } from 'react';
import PropTypes, { func } from 'prop-types';
import { StatusBar, FlatList, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements';
import { graphql, QueryRenderer, requestSubscription } from 'react-relay';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { showMessage } from 'react-native-flash-message';


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
  NoImageWrapper,
  NoItemImage,
} from './styles';

import logo from '../../assets/images/logo.png';

import noItemsImage from '~/assets/images/no_items.png';

import { isEmpty } from '~/utils/helpers';
import AnimatedModal from './components/AnimatedModal';
import AnimatedDetails from './components/AnimatedDetails';

import environment from '../../relay/Environment';

import { baseURL } from '../../services/api';

const query = graphql`
  query MenuQuery($limit: Int) {
    items(limit: $limit) {
      _id
      title
      cost
      fileName
      details
    }
  }
`;

const subscription = graphql`
  subscription MenuSubscription {
    newItemSubscription {
     item {
      _id
      title
      cost
      fileName
      details
     }
    }
  }
`;

const subscriptionConfig = {
  subscription,
  variables: {},
  onCompleted: (response) => console.log(`SUBS ${response}`),
  onError: (err) => console.log(err),
};

const Menu = ({ navigation }) => {
  const logOut = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Auth');
  };


  requestSubscription(
    environment,
    subscriptionConfig,
  );

  const renderQuery = ({ error, props }) => {
    if (error) {
      return showMessage({
        message: 'Always went wrong when fetching items, try again',
        type: 'danger',
      });
    } if (props && !isEmpty(props.items)) {
      return (
        <FlatList
          data={props.items}
          renderItem={({ item }) => (
            <ItemBox key={item.title}>
              <AnimatedDetails details={item.details} />
              <HeaderWrapper>
                <ImageWrapper>
                  <ItemImage source={{ uri: `${baseURL}/image/${item.fileName}` }} resizeMode="contain" />
                </ImageWrapper>
                <InfoWrapper>
                  <ItemText>{item.title}</ItemText>
                  <ItemText>{`US$ ${item.cost.replace('.', ',')}`}</ItemText>
                </InfoWrapper>
              </HeaderWrapper>
            </ItemBox>
          )}
          showsVerticalScrollIndicator={false}
        />
      );
    }

    return (
      <NoImageWrapper>
        <NoItemImage source={noItemsImage} resizeMode="contain" />
        <ItemText>No items registred.</ItemText>
      </NoImageWrapper>
    );
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
          <QueryRenderer
            environment={environment}
            query={query}
            fetchPolicy="network-only"
            variables={{ limit: 10 }}
            render={renderQuery}
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
  error: PropTypes.func,
  props: PropTypes.shape({
    items: PropTypes.array.isRequired,
  }),
};

Menu.defaultProps = {
  error: null,
  props: undefined,
};
