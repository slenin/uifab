import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import Button from './Button';
import stylex from './stylex';

const Line = stylex('span');

/* Adapted from */
/* https://github.com/cameronbourke/react-hamburger-menu/blob/master/src/HamburgerMenu.js */
function Hamburger(props) {
  const {
    animationDuration, className, iconColor,
    iconHeight, iconWidth, lineRadius, onClick, open, rotate, strokeWidth,
  } = props;

  const halfHeight = iconHeight / 2;
  const halfStrokeWidth = -(strokeWidth / 2);
  const getTransformValue = (isOpen, defaultPos, rotateVal) => (
    `translate3d(0,${isOpen ? halfHeight : defaultPos}px,0) rotate(${isOpen ? `${rotateVal}deg` : '0'})`
  );

  const styles = {
    container: {
      width: iconWidth,
      height: iconHeight,
      position: 'relative',
      transform: `rotate(${rotate}deg)`,
    },
    lineBase: {
      display: 'block',
      height: `${strokeWidth}px`,
      width: '100%',
      background: iconColor,
      transitionTimingFunction: 'ease',
      transitionDuration: `${animationDuration}s`,
      borderRadius: `${lineRadius}px`,
      transformOrigin: 'center',
      position: 'absolute',
      marginTop: halfStrokeWidth,
    },
    firstLine: {
      transform: getTransformValue(open, 0, 45),
    },
    secondLine: {
      transitionTimingFunction: 'ease-out',
      transitionDuration: `${animationDuration / 4}s`,
      opacity: open ? '0' : '1',
      top: halfHeight,
    },
    thirdLine: {
      transform: getTransformValue(open, iconHeight, -45),
    },
  };

  return (
    <Button
      className={className}
      format="inline"
      onClick={(e) => onClick && onClick(e)}
    >
      <Box
        style={styles.container}
      >
        <Line bg={iconColor} style={{ ...styles.lineBase, ...styles.firstLine }} />
        <Line bg={iconColor} style={{ ...styles.lineBase, ...styles.secondLine }} />
        <Line bg={iconColor} style={{ ...styles.lineBase, ...styles.thirdLine }} />
      </Box>
    </Button>
  );
}

Hamburger.propTypes = {
  animationDuration: PropTypes.number,
  className: PropTypes.string,
  iconColor: PropTypes.string,
  iconHeight: PropTypes.number,
  iconWidth: PropTypes.number,
  lineRadius: PropTypes.number,
  onClick: PropTypes.func,
  open: PropTypes.bool,
  rotate: PropTypes.number,
  strokeWidth: PropTypes.number,
};

Hamburger.defaultProps = {
  animationDuration: 0.4,
  className: null,
  iconColor: 'black',
  iconHeight: 14,
  lineRadius: 16,
  iconWidth: 20,
  onClick: null,
  open: false,
  rotate: 0,
  strokeWidth: 2,
};

export default stylex(Hamburger);
