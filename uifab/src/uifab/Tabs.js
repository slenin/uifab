import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import Divider from './Divider';
import { withStyles } from './styles';

function Tabs(props) {
  const {
    children,
    className,
  } = props;

  let totalTabs = 0;
  children.forEach((child) => {
    totalTabs += (child ? 1 : 0);
  });

  return (
    <Box className={className}>
      {children.map((child, index) => {
        if (!child) {
          return null;
        }

        return (
          <Box
            key={child.props.text || index}
            display="inline-block"
            height="100%"
            width={1 / totalTabs}
          >
            {child}
          </Box>
        );
      })}
      <Divider />
    </Box>
  );
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
};

Tabs.defaultProps = {
  children: null,
  className: null,
};

export default withStyles(Tabs, {
  color: 'muted',
  height: 48,
});
