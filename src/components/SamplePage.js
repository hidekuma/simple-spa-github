import React from 'react';
import { Header } from 'semantic-ui-react';

import Layout from './Layout';

const SamplePage = () => {
  return (
    <Layout>
      <Header as="h2">Sample Page</Header>
      <p>Hello world!!!</p>
    </Layout>
  );
};

export default SamplePage;
