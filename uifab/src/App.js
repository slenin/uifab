import React from 'react';

import {
  Button,
  Content,
  Dropdown,
  DropdownTabItem,
  ExtLink,
  Flex,
  Footer,
  Header,
  Layout,
  Link,
  Modal,
  MenuItem,
  NavItem,
  TabItem,
  Tabs,
  Text,
  Time,
  useModalState,
} from 'uifab';

function App() {
  const modalState = useModalState();
  const { showModal } = modalState.get();
  return (
    <Layout>
      <Header
        left={(
          <Link
            to="/"
          >
            <Text
              fontSize="large"
              fontWeight="bold"
              value="Product name"
            />
          </Link>
        )}
        right={(
          <Flex>
            <NavItem
              to="/"
              text="Option 1"
              onClick={() => {
                console.log('Option 1');
              }}
            />
            <NavItem to="/abc" ml={14} text="Option 2" />
          </Flex>
        )}
      />
      <Content pt="4rem">
        {Time.ago(Time.now() - 20)}
        <ExtLink href="http://www.google.com" target="_blank">
          Hello
        </ExtLink>

        <Button
          text="Click"
        />

        <Dropdown
          toggle={(
            <Button
              text="Hello"
            />
          )}
          menu={(
            <>
              <MenuItem
                text="Hello 1"
                onClick={() => {
                  modalState.push({ showModal: true });
                }}
              />
              <MenuItem text="Hello 2" />
            </>
          )}
        />
        <Tabs height={56} color="black">
          <TabItem
            text="Home"
            to="/"
            icon="exclamation-circle"
          />
          <TabItem
            text="Activities"
            to="/me"
            icon="exclamation-circle"
          />
          <TabItem
            text="Teams"
            to="/you"
            icon="exclamation-circle"
            badge="7"
          />
          <TabItem
            text="Alerts"
            to="/her"
            icon="exclamation-circle"
            badge="7"
          />
          <DropdownTabItem
            text="Me"
            to="/her"
            icon="exclamation-circle"
            menu={(
              <>
                <MenuItem divider text="Click here" />
                <MenuItem text="Click now" />
              </>
            )}
            alignRight
          />
        </Tabs>
        {showModal && (
          <Modal title="Test modal">
            <Text value="Modal content" />
            <Text value="Modal content" />
            <Text value="Modal content" />
          </Modal>
        )}
      </Content>
      <Footer pt={4} pb="4rem">
        Footer
      </Footer>
    </Layout>
  );
}

export default App;
