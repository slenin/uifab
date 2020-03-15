import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactDatePicker from 'react-datepicker';

import inputStyle from './inputStyle';
import style from './style';

import 'react-datepicker/dist/react-datepicker.css';

function TimePicker(props) {
  const {
    className, name, onChange, value,
  } = props;
  const [valueState, setValue] = useState(value);
  const ref = useRef(null);
  useEffect(() => {
    /* eslint-disable react/no-find-dom-node */
    const element = ReactDOM.findDOMNode(ref.current);
    /* eslint-enable react/no-find-dom-node */

    if (element) {
      element.style.display = 'block';
    }
  }, []);

  return (
    <ReactDatePicker
      ref={ref}
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
