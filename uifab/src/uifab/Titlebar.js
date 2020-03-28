import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Box from './Box';
import Divider from './Divider';
import Flex from './Flex';
import IconButton from './IconButton';
import stylex from './stylex';

function Titlebar(props) {
  const {
    action, backButton, className,
    modal, subtitle, title,
  } = props;

  const history = useHistory();

  return (
    <>
      <Flex
        className={className}
        alignItems="center"
        px={modal ? 6 : 3}
        py={subtitle ? 2 : 3}
      >
        {backButton && (
          <IconButton
            icon="arrow-left"
            onClick={() => { history.goBack(); }}
            color="primary"
            fontSize="large"
            mr={3}
          />
        )}
        <Box flexGrow={1}>
          <Box fontSize="medium" fontWeight="bold">
            {title}
          </Box>
          {subtitle && (
            <Box fontSize="xx-small">
              {subtitle}
            </Box>
          )}
        </Box>
        {action && action}
      </Flex>
      <Divider />
    </>
  );
}

Titlebar.propTypes = {
  action: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  backButton: PropTypes.bool,
  className: PropTypes.string,
  modal: PropTypes.bool,
  subtitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

Titlebar.defaultProps = {
  action: null,
  backButton: true,
  className: null,
  modal: false,
  subtitle: null,
};

export default stylex(Titlebar);
