import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
  LoadingWrapper,
} from './styles';

import logo from '~/assets/images/logo.png';

import noItemsImage from '~/assets/images/no_items.png';

import { isEmpty } from '~/utils/helpers';
import AnimatedModal from './components/AnimatedModal';
import AnimatedDetails from './components/AnimatedDetails';
import Spin from '~/utils/loading';
import environment from '~/relay/Environment';

import { baseURL } from '~/services/api';


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
    NewItemSubscription {
      _id
      title
      cost
      fileName
      details
    }
  }
`;


const Menu = ({ navigation }) => {
  const [state, setState] = useState({
    items: [],
    firstCall: true,
  });


  const logOut = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Auth');
  };


  requestSubscription(
    environment,
    {
      subscription,
      onNext: ({ NewItemSubscription }) => setState({
        items: [...state.items, NewItemSubscription], firstCall: false,
      }),
      onError: (err) => console.log(err),
    },
  );


  const renderQuery = ({ error, props }) => {
    if (error) {
      return showMessage({
        message: 'Always went wrong when fetching items, try again',
        type: 'danger',
      });
    } if (!props) return (<LoadingWrapper><Spin /></LoadingWrapper>);
    const { items } = props;
    if (props && !isEmpty(items)) {
      if (state.firstCall) setState({ firstCall: false, items });
      return (
        <FlatList
          data={state.items}
          renderItem={({ item }) => (
            <ItemBox>
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
          keyExtractor={(item, index) => index.toString()}
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
        <AnimatedModal navigation={navigation} />
        <FlatListWrapper>
          <QueryRenderer
            environment={environment}
            query={query}
            fetchPolicy="store-and-network"
            variables={{}}
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
  // eslint-disable-next-line react/no-unused-prop-types
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cost: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  props: PropTypes.shape({
    items: PropTypes.array.isRequired,
  }),
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
};

Menu.defaultProps = {
  error: null,
  props: undefined,
};
