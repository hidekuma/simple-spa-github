import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, List, Flag } from 'semantic-ui-react';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header as="h1">
				<Link to="/" style={{color: '#000'}}>
					Simple-spa-github
				</Link>
      </Header>
			<List>
     	 {children}
			</List>
      <Divider />
      <p>
        Made by <Flag name='kr' />Hidekuma
      </p>
    </Container>
  );
};

export default Layout;
