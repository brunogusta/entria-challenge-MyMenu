import { commitMutation, graphql } from 'relay-runtime';
import environment from '../../../../relay/Environment';

const mutation = graphql`
    mutation AddNewItemMutation ($title: String!, $cost: String!, $details: String!)  {
        AddNewItemMutation(input: {title: $title, cost: $cost, details: $details}) {
            item {
                _id
                title
                cost
                details
                file
            }
        }
    }
`;

export default (
  item, file, onCompleted, onError,
) => {
  const variables = {
    title: item.title,
    cost: item.cost,
    details: item.details,
  };


  let uploadables;

  if (file) {
    uploadables = {
      file,
    };
  }

  commitMutation(environment, {
    mutation,
    variables,
    uploadables,
    onCompleted,
    onError,
  });
};
