import React from 'react';

import {
  Box,
  Button,
  Content,
  Dropdown,
  DropdownTabItem,
  ExtLink,
  Flex,
  Footer,
  Header,
  Image,
  Layout,
  Link,
  Modal,
  MenuItem,
  NavItem,
  Navs,
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
              text="Product name"
            />
          </Link>
        )}
        right={(
          <Flex>
            <NavItem
              to="/"
              text="Option 1"
              onClick={() => {
              }}
            />
            <NavItem to="/abc" ml={14} text="Option 2" />
          </Flex>
        )}
      />
      <Content pt="4rem">
        {Time.ago(Time.now() - 20)}
        <ExtLink
          to="http://www.google.com"
          target="_blank"
          text="Hello"
        />
        <Link to="/world" target="_blank" text="World" />

        <Button
          text="Click"
        />

        <Button
          format="link"
          text="Link"
          to="/link"
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
            disabled
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
        <Tabs height={48}>
          <TabItem
            text="Home"
            to="/"
          />
          <TabItem
            text="Activities"
            to="/me"
          />
          <TabItem
            text="Teams"
            to="/you"
          />
          <TabItem
            text="Alerts"
            to="/her"
          />
        </Tabs>

        <Box width={120}>
          <Navs title="TEAM ACTIVITIES">
            <NavItem
              icon="exclamation-circle"
              text="Home"
              to="/"
            />
            <NavItem
              icon="spinner"
              text="Lenin Ravindranath"
            />
            <NavItem
              icon={(<Image src="https://ui-avatars.com/api/?background=ffd022&color=000&name=Lenin" />)}
              text="Lenin"
            />
          </Navs>
        </Box>

        {showModal && (
          <Modal title="Test modal">
            <Text text="Modal content" />
            <Text text="Modal content" />
            <Text text="Modal content" />
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
