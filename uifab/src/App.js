import React from 'react';

import {
  Button,
  Modal,
  Input,
  Text,
} from 'uifab';

function App() {
  return (
    <>
      <Text
        value="Hello"
      />
      <Modal title="Modal">
        <Button
          text="Click me"
        />
        <Input />
      </Modal>
    </>
  );
}

export default App;
