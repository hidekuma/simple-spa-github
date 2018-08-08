import React from 'react';
import { Icon, Header } from 'semantic-ui-react';
import Layout from './Layout';

const NotFound = () => {
  return (
    <Layout>
      <Header as="h2">404</Header>
			<p>Page Not Found</p>
    </Layout>
  );
};

export default NotFound;
