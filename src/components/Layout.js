import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, List, Icon } from 'semantic-ui-react';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header as="h1">
				<Link to="/">
					Simple-spa-github
				</Link>
      </Header>
			<List>
     	 {children}
			</List>
      <Divider />
      <p>
        Made by <Icon name="star" color="yellow" /> Hidekuma
      </p>
    </Container>
  );
};

export default Layout;
