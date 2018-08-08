import React from 'react';
import { Link } from 'react-router-dom';
import { List, Divider, Icon } from 'semantic-ui-react';
import Layout from './Layout';

const Index = () => (
    <Layout>
      <List.Item>
        <Link to="/sample"><Icon name='linkify' />Go to Sample Page</Link>
				<span> / </span>
        <a href="https://github.com/hidekuma/simple-spa-github"><Icon name='github' />Go to github</a>
      </List.Item>
    </Layout>
)

export default Index;
