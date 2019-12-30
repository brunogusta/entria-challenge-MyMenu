import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';
import { AsyncStorage } from 'react-native';

async function fetchQuery(operation, variables, cacheConfig, uploadables) {
  const token = await AsyncStorage.getItem('token');

  const request = {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
      Accept: '*/*',
    },
  };

  if (uploadables) {
    if (!global.window.FormData) {
      throw new Error('Uploading files without `FormData` not supported.');
    }

    const formData = new FormData();
    formData.append('query', operation.text);
    formData.append('variables', JSON.stringify(variables));

    Object.keys(uploadables).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(uploadables, key)) {
        formData.append(key, uploadables[key]);
      }
    });


    request.body = formData;
    console.log(request.body._parts);
  } else {
    request.headers['Content-Type'] = 'application/json';
    request.body = JSON.stringify({
      query: operation.text,
      variables,
    });
  }

  return fetch('http://10.10.10.7:4000/graphql', request)
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

const source = new RecordSource();
const store = new Store(source);

// singleton Environment
export default new Environment({
  // network: networkLayer,
  // handlerProvider,
  network: Network.create(fetchQuery),
  store,
});
