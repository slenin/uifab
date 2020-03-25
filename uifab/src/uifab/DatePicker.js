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

function DatePicker(props) {
  const {
    className, name, onChange, value,
  } = props;
  const [valueState, setValue] = useState(value);

  return (
    <Wrapper>
      <ReactDatePicker
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

DatePicker.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};

DatePicker.defaultProps = {
  className: null,
  name: 'date',
  onChange: null,
  value: new Date(),
};

export default style(DatePicker, inputStyle);
