import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

import stylex from './stylex';
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
        menu: (styles) => ({
          ...styles,
          backgroundColor: theme.colors.bg,
          borderColor: theme.colors.border,
          borderStyle: 'solid',
          borderWidth: 1,
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
          color: theme.colors.fg,
          zIndex: 999,
        }),
        control: (styles, state) => ({
          ...styles,
          backgroundColor: theme.colors.bg,
          borderColor: state.isFocused ? theme.colors.primary : theme.colors.border,
          boxShadow: state.isFocused ? 0 : 0,
          color: theme.colors.fg,
          '&:hover': {
            borderColor: theme.colors.primary,
          },
        }),
        singleValue: (styles) => ({
          ...styles,
          color: theme.colors.fg,
        }),
        option: (styles, state) => ({
          ...styles,
          backgroundColor: state.isSelected ? theme.colors.primary : null,
          '&:hover': {
            backgroundColor: state.isSelected ? null : theme.colors['bg-light'],
          },
        }),
        indicatorSeparator: (styles) => ({
          ...styles,
          backgroundColor: theme.colors.border,
        }),
        dropdownIndicator: (styles, state) => ({
          ...styles,
          color: state.selectProps.menuIsOpen ? theme.colors.fg : theme.colors.border,
          '&:hover': {
            color: state.selectProps.menuIsOpen ? theme.colors.fg : theme.colors.muted,
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

export default stylex(Select);
