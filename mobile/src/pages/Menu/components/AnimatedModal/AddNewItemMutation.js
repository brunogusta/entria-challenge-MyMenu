import { commitMutation, graphql } from 'relay-runtime';
import { ReactNativeFile } from 'extract-files';
import environment from '../../../../relay/Environment';

const mutation = graphql`
    mutation AddNewItemMutation ($title: String!, $cost: String!, $details: String!, $file: Upload! )  {
        AddNewItemMutation(input: {title: $title, cost: $cost, details: $details, file: $file}) {
            item {
                _id
                title
                cost
                details
                fileName
            }
        }
    }
`;

export default (
  item, file, onCompleted, onError,
) => {
  const image = new ReactNativeFile({
    uri: file.uri,
    name: file.name,
    type: file.type,
  });

  const variables = {
    title: item.title,
    cost: item.cost,
    details: item.details,
    file: image,
  };


  let uploadables;

  if (file) {
    uploadables = file;
  }

  commitMutation(environment, {
    mutation,
    variables,
    uploadables,
    onCompleted,
    onError,
  });
};
