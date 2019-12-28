import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

import { getToken } from '~/utils/auth';
import { handleData } from './helpers';

function fetchQuery(operation, variables, cacheConfig, uploadables) {
  const request = {
    method: 'POST',
    headers: {
      Authorization: `bearer ${getToken()}`,
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
  } else {
    request.headers['Content-Type'] = 'application/json';
    request.body = JSON.stringify({
      query: operation.text,
      variables,
    });
  }

  return fetch('http://localhost:4000/graphql', request)
    .then((response) => {
      const data = handleData(response);

      if (response.status === 200) {
        return response.json();
      }

      if (response.status === 401) {
        throw data.errors;
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
