import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import EllipsisText from './EllipsisText';
import style from './style';

function Navs(props) {
  const {
    children,
    className,
    title,
  } = props;

  return (
    <Box className={className}>
      {title && (
        <EllipsisText
          color="muted"
          fontWeight="bold"
          mb={2}
          value={title}
        />
      )}
      {children.map((child, index) => {
        if (!child) {
          return null;
        }

        return (
          <Box
            key={child.props.text || index}
            mb={2}
          >
            {child}
          </Box>
        );
      })}
    </Box>
  );
}

Navs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
  title: PropTypes.string,
};

Navs.defaultProps = {
  children: null,
  className: null,
  title: null,
};

export default style(Navs);
