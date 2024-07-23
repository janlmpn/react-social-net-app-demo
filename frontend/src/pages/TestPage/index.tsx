import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_TEST_DATA } from '../../graphql/queries/test';
import { Query } from '../../generated/graphql';

const TestPage: React.FC = () => {
  const { data, error, loading } = useQuery<Query>(GET_TEST_DATA);

  if (loading) {
    return <p>now loading...</p>;
  }

  return error ? (
    <p>{`There was an error: ${JSON.stringify(error)}`}</p>
  ) : (
    <div>
      <h2>From GraphQL</h2>
      <p>{`Response: ${data?.test?.message}`}</p>
      {data?.test?.data?.length && (
        <ul>
          {data?.test?.data.map((currUserData: any, i: any) => {
            const { name, userId } = currUserData!;

            return (
              <li key={i}>
                {`${userId}: ${name}`}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
export default TestPage;