import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactDatePicker from 'react-datepicker';

import inputStyle from './inputStyle';
import { withStyles } from './styles';

import 'react-datepicker/dist/react-datepicker.css';

function DatePicker(props) {
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

export default withStyles(DatePicker, inputStyle);
