import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';
import { AsyncStorage } from 'react-native';
import { extractFiles } from 'extract-files';

import { SubscriptionClient } from 'subscriptions-transport-ws';
import { baseURL } from '~/services/api';


async function fetchQuery(operation, variables, cacheConfig, uploadables) {
  const token = await AsyncStorage.getItem('token');
  const request = {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
    },
  };

  if (uploadables) {
    const formData = new FormData();

    const operations = {
      query: operation.text,
      variables,
    };

    const { clone: extractedOperations, files } = extractFiles(operations);

    formData.append('operations', JSON.stringify(extractedOperations));

    const pathMap = {};
    let i = 0;

    files.forEach((paths) => {
      pathMap[++i] = paths;
    });

    formData.append('map', JSON.stringify(pathMap));

    i = 0;
    files.forEach((paths, file) => {
      formData.append(++i, file, file.name);
    });


    request.body = formData;
  } else {
    request.headers['Content-Type'] = 'application/json';
    request.body = JSON.stringify({
      query: operation.text,
      variables,
    });
  }
  return fetch(`${baseURL}/graphql`, request)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }


      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

const setupSubscription = (operation, variables, cacheConfig) => {
  const query = operation.text;
  console.log(operation.text);
  const subscriptionClient = new SubscriptionClient(`${baseURL}/subscription`, { reconnect: true });

  const observable = subscriptionClient.request({ query, variables });

  return observable;
};

const source = new RecordSource();
const store = new Store(source);

// singleton Environment
export default new Environment({
  // network: networkLayer,
  // handlerProvider,
  network: Network.create(fetchQuery, setupSubscription),
  store,
});
