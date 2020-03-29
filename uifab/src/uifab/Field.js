import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import FormContext from './FormContext';
import Label from './Label';
import Text from './Text';
import Tooltip from './Tooltip';
import stylex from './stylex';

function Field(props) {
  const {
    className, component, footer,
    label, name, onChange, tooltip,
  } = props;
  const fprops = useContext(FormContext);
  return (
    <Box className={className}>
      {label && (
        <Label
          mb={1}
          htmlFor={name}
        >
          {label}
        </Label>
      )}

      {tooltip && (
        <Tooltip
          ml={2}
          tooltip={tooltip}
          name={`${name}-tooltip`}
        />
      )}

      {React.cloneElement(component, {
        name,
        onChange: onChange || (fprops && fprops.handleChange),
      })}

      {footer && (
        <Text
          fontSize="0.75em"
          mt={1}
          text={footer}
        />
      )}

      {fprops && fprops.touched[name] && fprops.errors[name] && (
        <Text
          color="error"
          fontSize="0.75em"
          mt={1}
          text={fprops.errors[name]}
        />
      )}
    </Box>
  );
}

Field.propTypes = {
  className: PropTypes.string,
  component: PropTypes.node,
  footer: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  tooltip: PropTypes.string,
};

Field.defaultProps = {
  className: null,
  component: null,
  footer: null,
  label: null,
  onChange: null,
  tooltip: null,
};

export default stylex(Field, {
  mb: 2,
});
