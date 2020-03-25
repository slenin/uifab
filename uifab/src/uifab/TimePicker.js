import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';

import Box from './Box';
import inputStyle from './inputStyle';
import style from './style';

import 'react-datepicker/dist/react-datepicker.css';

const Wrapper = style(Box, {
  '.react-datepicker-wrapper': {
    display: 'block',
  },
});

function TimePicker(props) {
  const {
    className, name, onChange, value,
  } = props;
  const [valueState, setValue] = useState(value);

  return (
    <Wrapper>
      <ReactDatePicker
        showTimeSelect
        showTimeSelectOnly
        dateFormat="h:mm aa"
        className={className}
        name={name}
        selected={valueState}
        onChange={(date) => {
          setValue(date);
          if (onChange) {
            onChange({ target: { name, value: date } });
          }
        }}
      />
    </Wrapper>
  );
}

TimePicker.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};

TimePicker.defaultProps = {
  className: null,
  name: 'time',
  onChange: null,
  value: new Date(),
};

export default style(TimePicker, inputStyle);
