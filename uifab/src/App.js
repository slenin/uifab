import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Button,
  Content,
  DatePicker,
  DateTimePicker,
  Dropdown,
  DropdownTabItem,
  EllipsisText,
  ExtLink,
  Flex,
  Footer,
  Header,
  HttpClient,
  Image,
  Input,
  Layout,
  Link,
  Modal,
  MenuItem,
  NavItem,
  Navs,
  RichText,
  RichTextInput,
  Section,
  Select,
  TabItem,
  Table,
  Tabs,
  Text,
  Time,
  TimePicker,
  useApi,
  useModalState,
} from 'uifab';

const http = new HttpClient(`${window.location.origin}`, 'json', null);

const Th = ({ title }) => (
  <Box p={3} textAlign="left">
    {title}
  </Box>
);

Th.propTypes = {
  title: PropTypes.string.isRequired,
};

const Name = ({ cell }) => (
  <EllipsisText
    p={3}
    text={cell.value}
  />
);

Name.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
};

const Age = ({ cell }) => (
  <Text
    p={3}
    text={cell.value}
  />
);

Age.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
};

const Status = ({ row, cell }) => (
  <Button
    format="link"
    p={3}
    to={`/${row.values.name}`}
  >
    {cell.value}
  </Button>
);

Status.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
  row: PropTypes.shape({
    values: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

function App() {
  const modalState = useModalState();
  const { showModal } = modalState.get();
  const {
    data, isLoading, error, setDependency,
  } = useApi(async (option) => http.get(`/sample/${option}`), 0);

  const [richTextValue, setRichTextValue] = useState(null);
  const [filter, setFilter] = useState('');
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
        <RichTextInput
          borderStyle="solid"
          minLines={5}
          onChange={(e) => setRichTextValue(e.target.value)}
        />
        <RichText text={richTextValue} />
        <DateTimePicker />
        <DatePicker />
        <TimePicker />
        <Flex justifyContent="space-between">
          <DatePicker />
          <TimePicker />
        </Flex>
        <Text>
          Lenin
          <span>Ravindranath</span>
        </Text>
        <Select
          options={
            [
              { value: 0, label: 'Success' },
              { value: 404, label: 'Error' },
            ]
          }
          onChange={(e) => setDependency(e.target.value)}
          value={0}
          m={3}
        />

        <Section loading={isLoading} error={error && error.map({ notFound: 'Not found' })}>
          {data && (
            <>
              <Input onChange={(e) => setFilter(e.target.value)} />
              <Table
                borderRadius={4}
                columns={[
                  {
                    Header: <Th title="Name" />,
                    accessor: 'name',
                    width: '15%',
                    Cell: Name,
                  },
                  {
                    Header: <Th title="Age" />,
                    accessor: 'age',
                    width: 'auto',
                    Cell: Age,
                  },
                  {
                    Header: <Th title="Status" />,
                    accessor: 'status',
                    Cell: Status,
                    width: '20%',
                    disableSortBy: true,
                  },
                ]}
                data={data}
                globalFilter={filter}
                noData={(
                  <Text
                    p={3}
                    color="error"
                    textAlign="center"
                    text="No members found"
                  />
                )}
              />
            </>
          )}
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
        </Section>
      </Content>
      <Footer pt={4} pb="4rem">
        Footer
      </Footer>
    </Layout>
  );
}

export default App;
