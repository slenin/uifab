import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/monokai';

import Box from './Box';
import { withStyles } from './styles';

function CodeInput(props) {
  const {
    className, minLines, name, onChange, value,
  } = props;
  const [valueState, setValue] = useState(value || '');

  return (
    <Box className={className}>
      <AceEditor
        mode="javascript"
        theme="monokai"
        name={name}
        value={valueState}
        onChange={(v) => {
          setValue(v);
          if (onChange) {
            onChange({ target: { name, value: v } });
          }
        }}
        fontSize="inherit"
        showPrintMargin
        showGutter
        highlightActiveLine
        setOptions={{
          showLineNumbers: true,
          tabSize: 2,
          useWorker: false,
        }}
        width="100%"
        minLines={minLines}
        maxLines={Infinity}
      />
    </Box>
  );
}

CodeInput.propTypes = {
  className: PropTypes.string,
  minLines: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

CodeInput.defaultProps = {
  className: null,
  minLines: 10,
  name: 'code',
  onChange: null,
  value: null,
};

export default withStyles(CodeInput);
