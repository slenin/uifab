import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

import style from './style';
import useTheme from './useTheme';

function Select(props) {
  const {
    className, isSearchable, name, onChange,
    options, showIndicator, value,
  } = props;
  const [valueState, setValue] = useState(value);
  const theme = useTheme();

  let components = {};
  if (!showIndicator) {
    components = { DropdownIndicator: () => null, IndicatorSeparator: () => null };
  }

  return (
    <ReactSelect
      className={className}
      components={components}
      value={options.find((option) => option.value === valueState) || ''}
      options={options}
      onChange={(selected) => {
        setValue(selected.value);
        if (onChange) {
          onChange({ target: { name, value: selected.value } });
        }
      }}
      isSearchable={isSearchable}
      styles={{
        menu: (menuStyles) => ({ ...menuStyles, zIndex: 999 }),
        control: (controlStyles, state) => ({
          ...controlStyles,
          borderColor: state.isFocused ? theme.colors.primary : theme.colors.border,
          boxShadow: state.isFocused ? 0 : 0,
          '&:hover': {
            borderColor: theme.colors.primary,
          },
        }),
      }}
    />
  );
}

Select.propTypes = {
  className: PropTypes.string,
  isSearchable: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]),
      value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object,
        PropTypes.string,
      ]),
    }),
  ),
  showIndicator: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
  ]),
};

Select.defaultProps = {
  className: null,
  isSearchable: false,
  name: 'select',
  onChange: null,
  options: [],
  showIndicator: true,
  value: null,
};

export default style(Select);
