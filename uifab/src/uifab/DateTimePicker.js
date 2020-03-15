import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import DatePicker from './DatePicker';
import Flex from './Flex';
import TimePicker from './TimePicker';
import style from './style';

function DateTimePicker(props) {
  const {
    className, name, onChange, value,
  } = props;
  const [valueState, setValue] = useState(value);
  return (
    <Flex className={className}>
      <Box width={1 / 2} mr={2}>
        <DatePicker
          name={`${name}-date`}
          value={valueState}
          onChange={(e) => {
            setValue(e.target.value);
            if (onChange) {
              onChange({ target: { name, value: e.target.value } });
            }
          }}
        />
      </Box>
      <Box width={1 / 2} ml={2}>
        <TimePicker
          name={`${name}-time`}
          value={valueState}
          onChange={(e) => {
            setValue(e.target.value);
            if (onChange) {
              onChange({ target: { name, value: e.target.value } });
            }
          }}
        />
      </Box>
    </Flex>
  );
}

DateTimePicker.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};

DateTimePicker.defaultProps = {
  className: null,
  name: 'datetime',
  onChange: null,
  value: new Date(),
};

export default style(DateTimePicker);
