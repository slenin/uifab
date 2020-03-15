import React from 'react';

import {
  Button,
  Content,
  Flex,
  Footer,
  Header,
  Layout,
  NavItem,
  Time,
} from 'uifab';

function App() {
  return (
    <Layout>
      <Header
        left={(
          <Button
            format="link"
            to="/"
            fontSize="large"
            fontWeight="bold"
            text="Product name"
          />
        )}
        right={(
          <Flex>
            <NavItem to="/" text="Option 1" />
            <NavItem to="/abc" ml={14} text="Option 2" />
          </Flex>
        )}
      />
      <Content pt="4rem">
        {Time.ago(Time.now() - 20)}
      </Content>
      <Footer pt={4} pb="4rem">
        Footer
      </Footer>
    </Layout>
  );
}

export default App;
