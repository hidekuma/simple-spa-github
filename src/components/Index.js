import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import Layout from './Layout';

const Index = () => (
    <Layout>
      <List.Item>
        <Link to="/sample">Go to Sample Page</Link>
      </List.Item>
    </Layout>
)

export default Index;
